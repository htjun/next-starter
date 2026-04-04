#!/usr/bin/env node

import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const ROOT = process.cwd()
const ROOT_DOC_LIMITS = new Map([
  ["AGENTS.md", 40],
  ["README.md", 85],
  ["docs/index.md", 25],
  ["docs/status.md", 20],
  ["docs/project-overview.md", 30],
  ["docs/engineering-guide.md", 40],
  ["docs/decisions.md", 30],
  ["docs/plans/README.md", 25],
])
const ROOT_DOC_TOTAL_LIMIT = 260
const PLAN_LIMITS = {
  active: 80,
  archive: 120,
}
const DOCS_INDEX_LINKS = [
  "status.md",
  "project-overview.md",
  "engineering-guide.md",
  "decisions.md",
  "plans/README.md",
]

const errors = []

const countLines = (text) => {
  const trimmed = text.trimEnd()

  return trimmed === "" ? 0 : trimmed.split(/\r?\n/u).length
}

const readText = (relativePath) =>
  readFile(path.join(ROOT, relativePath), "utf8")

const listMarkdownFiles = async (relativeDir) => {
  const absoluteDir = path.join(ROOT, relativeDir)
  const entries = await readdir(absoluteDir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const relativePath = path.join(relativeDir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(relativePath)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(relativePath)
    }
  }

  return files.toSorted()
}

const checkLineBudget = async (relativePath, maxLines) => {
  const content = await readText(relativePath)
  const lines = countLines(content)

  if (lines > maxLines) {
    errors.push(`${relativePath}: ${lines} lines (max ${maxLines})`)
  }

  return { lines }
}

const main = async () => {
  let rootDocLines = 0

  for (const [relativePath, maxLines] of ROOT_DOC_LIMITS) {
    const { lines } = await checkLineBudget(relativePath, maxLines)
    rootDocLines += lines
  }

  if (rootDocLines > ROOT_DOC_TOTAL_LIMIT) {
    errors.push(
      `root docs total ${rootDocLines} lines (max ${ROOT_DOC_TOTAL_LIMIT})`
    )
  }

  const agents = await readText("AGENTS.md")
  const docsIndex = await readText("docs/index.md")
  const status = await readText("docs/status.md")

  if (!agents.includes("docs/index.md")) {
    errors.push("AGENTS.md must point to docs/index.md")
  }

  for (const link of DOCS_INDEX_LINKS) {
    if (!docsIndex.includes(link)) {
      errors.push(`docs/index.md must mention ${link}`)
    }
  }

  for (const pattern of ["State:", "Active plan:"]) {
    if (!status.includes(pattern)) {
      errors.push(`docs/status.md must include ${pattern}`)
    }
  }

  const docsRootEntries = await readdir(path.join(ROOT, "docs"), {
    withFileTypes: true,
  })

  for (const entry of docsRootEntries) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      continue
    }

    const relativePath = path.join("docs", entry.name)

    if (!ROOT_DOC_LIMITS.has(relativePath)) {
      errors.push(`unbudgeted root doc: ${relativePath}`)
    }
  }

  const planFiles = await listMarkdownFiles("docs/plans")

  for (const relativePath of planFiles) {
    if (relativePath === "docs/plans/README.md") {
      continue
    }

    if (relativePath.startsWith("docs/plans/active/")) {
      await checkLineBudget(relativePath, PLAN_LIMITS.active)
      continue
    }

    if (relativePath.startsWith("docs/plans/archive/")) {
      await checkLineBudget(relativePath, PLAN_LIMITS.archive)
      continue
    }

    errors.push(`move ${relativePath} to docs/plans/active/ or archive/`)
  }

  if (errors.length > 0) {
    process.stderr.write("docs:check failed\n")

    for (const error of errors) {
      process.stderr.write(`- ${error}\n`)
    }

    process.exitCode = 1
    return
  }

  process.stdout.write(
    `docs:check passed (${rootDocLines}/${ROOT_DOC_TOTAL_LIMIT} root doc lines)\n`
  )
}

try {
  await main()
} catch (error) {
  process.stderr.write(`docs:check failed\n- ${error.message}\n`)
  process.exitCode = 1
}

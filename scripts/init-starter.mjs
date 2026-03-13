#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises"
import process from "node:process"

const PLACEHOLDER_NAME = "starter-app"
const PLACEHOLDER_TITLE = "Starter App"

const usage = `Usage:
  node scripts/init-starter.mjs --name my-app [--title "My App"]

Options:
  --name   Required. Lowercase letters, numbers, and hyphens only.
  --title  Optional. Defaults to Title Case derived from --name.
  --help   Show this message.
`

const parseArgs = (argv) => {
  const args = {}

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]

    if (arg === "--help") {
      args.help = true
      continue
    }

    if (arg === "--name" || arg === "--title") {
      const value = argv[index + 1]

      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`)
      }

      args[arg.slice(2)] = value
      index += 1
      continue
    }

    throw new Error(`Unknown argument: ${arg}`)
  }

  return args
}

const validateName = (name) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)

const toTitleCase = (name) =>
  name
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ")

const replaceInFile = async (path, replacements) => {
  const original = await readFile(path, "utf8")
  let next = original

  for (const [from, to] of replacements) {
    next = next.split(from).join(to)
  }

  if (next !== original) {
    await writeFile(path, next)
  }
}

const updatePackageJson = async (name) => {
  const raw = await readFile("package.json", "utf8")
  const pkg = JSON.parse(raw)

  pkg.name = name

  await writeFile("package.json", `${JSON.stringify(pkg, null, 2)}\n`)
}

const main = async () => {
  const args = parseArgs(process.argv.slice(2))

  if (args.help) {
    process.stdout.write(usage)
    return
  }

  if (!args.name) {
    throw new Error("The --name option is required.")
  }

  if (!validateName(args.name)) {
    throw new Error(
      "Invalid --name. Use lowercase letters, numbers, and hyphens only."
    )
  }

  const title = args.title ?? toTitleCase(args.name)

  await updatePackageJson(args.name)

  const replacements = [
    [PLACEHOLDER_NAME, args.name],
    [PLACEHOLDER_TITLE, title],
  ]

  await replaceInFile("README.md", replacements)
  await replaceInFile("app/layout.tsx", replacements)
  await replaceInFile("app/page.tsx", replacements)
  await replaceInFile(".env.example", replacements)

  process.stdout.write(`Initialized starter for "${title}" (${args.name}).\n`)
}

try {
  await main()
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.stderr.write(usage)
  process.exitCode = 1
}

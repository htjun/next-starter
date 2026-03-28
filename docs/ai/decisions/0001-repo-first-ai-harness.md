# 0001 Repo-First AI Harness

Status: active

## Decision

- Store canonical AI context inside the repo under `docs/ai/`.
- Keep tool-specific adapters (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`) thin and hand-maintained.
- Use progressive disclosure: `core.md` first, then area docs matching the task.
- No code generation, no sync scripts, no freshness tracking. Agents read source files directly.
- Keep complexity proportional to repo size.

## Why

- The same context needs to work across Codex, Cursor, Claude Code, and future tools.
- Small modular files reduce token waste better than one long catch-all memory document.
- Agents can read `package.json`, `tsconfig.json`, and directory trees natively. Generated mirrors of these files add staleness risk without adding comprehension.
- Hand-maintained docs are easier to update than maintaining scripts that generate docs.

## Implications

- `docs/ai/active.md` is intentionally temporary and should be pruned, not accumulated.
- When conventions change, update the relevant area doc or `core.md` directly.
- If the repo grows substantially, revisit whether lightweight automation (e.g., a CI check for doc existence) is warranted.

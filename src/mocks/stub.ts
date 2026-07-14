import { vi } from 'vitest'

type Dict = Record<string, unknown>

const isDict = (value: unknown): value is Dict => typeof value === 'object' && value !== null

/**
 * Stub a dotted path on a global (e.g. `game.i18n.localize`), preserving any
 * sibling keys already stubbed by another mock.
 */
export const stubGlobalPath = (path: string, value: unknown): void => {
  const [root, ...rest] = path.split('.')
  const existing = (globalThis as Dict)[root]

  if (rest.length === 0) {
    vi.stubGlobal(root, value)
    return
  }

  const base: Dict = isDict(existing) ? { ...existing } : {}
  let node = base

  for (const key of rest.slice(0, -1)) {
    const child = node[key]
    const next: Dict = isDict(child) ? { ...child } : {}
    node[key] = next
    node = next
  }

  node[rest[rest.length - 1]] = value
  vi.stubGlobal(root, base)
}

const cloneValue = (
  value: unknown,
  options: { prune?: boolean, strict?: boolean }
): unknown => {
  if (typeof value !== 'object' || value === null) return value
  if (Array.isArray(value)) return value.map(v => cloneValue(v, options))
  if (value instanceof Date) return new Date(value)

  if (value.constructor && value.constructor !== Object) {
    if (options.strict) throw new Error('deepClone cannot clone advanced objects')
    return value
  }

  const clone: Record<string, unknown> = {}
  for (const key of Object.keys(value)) {
    const cloned = cloneValue((value as Record<string, unknown>)[key], options)
    if (options.prune && cloned === undefined) continue
    clone[key] = cloned
  }
  return clone
}

export const deepClone = <T extends object>(
  original: T,
  options: { prune?: boolean, strict?: boolean } = {}
): T => cloneValue(original, options) as T

export interface ApplicationPositionOptions extends Partial<foundry.types.ApplicationPosition> {
  viewport?: { innerWidth: number, innerHeight: number }
}

export const getDimension = (
  value: number | 'auto',
  total: number
): number | 'auto' => {
  if (value === 'auto') return value
  return value > 1 ? value : Math.floor(total * value)
}

export const getOffset = (
  value: number | 'auto',
  total: number
): number => {
  const v = value === 'auto'
    ? Math.floor(total / 2)
    : value
  const remainder = total - v
  return Math.ceil(remainder / 2)
}

export const generateApplicationPosition = (
  options: ApplicationPositionOptions,
): foundry.types.ApplicationPosition => {
  const viewport = options?.viewport ?? window
  const { innerWidth, innerHeight } = viewport

  const width = getDimension(options?.width ?? 0.5, innerWidth)
  const height = getDimension(options?.height ?? 0.5, innerHeight)

  const left = options?.left ?? getOffset(width, innerWidth)
  const top = options?.top ?? getOffset(height, innerHeight)

  return { width, height, left, top, scale: 1, zIndex: 101 }
}

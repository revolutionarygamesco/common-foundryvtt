export interface PanelDimensions {
  width: number
  height: number
  top: number
  left: number
}

export const getPanelDimensions = (
  width: number,
  height: number,
  viewport: { innerWidth: number, innerHeight: number }
): PanelDimensions => {
  const { innerWidth, innerHeight } = viewport
  const w = width > 1 ? width : Math.floor(innerWidth * width)
  const h = height > 1 ? height : Math.floor(innerHeight * height)
  const left = Math.ceil((innerWidth - w) / 2)
  const top = Math.ceil((innerHeight - h) / 2)
  return { width: w, height: h, left, top }
}

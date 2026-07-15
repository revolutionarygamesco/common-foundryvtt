import { afterEach, describe, expect, it, vi } from 'vitest'
import { getPanelDimensions } from './get-panel-dimensions.ts'

describe('getPanelDimensions', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const viewport = { innerWidth: 1920, innerHeight: 1080 }

  it('sets static dimensions', () => {
    const { width, height, left, top } = getPanelDimensions(800, 500, viewport)
    expect(width).toBe(800)
    expect(height).toBe(500)
    expect(top).toBe(Math.ceil((1080 - 500) / 2))
    expect(left).toBe(Math.ceil((1920 - 800) / 2))
  })

  it('applies fractional dimensions', () => {
    const { height } = getPanelDimensions(1000, 2 / 3, viewport)
    expect(height).toBe(1080 * (2/ 3))
  })

  it('rounds to the nearest pixel', () => {
    const { width, height } = getPanelDimensions(1 / 3, 1 / 3, viewport)
    expect(Number.isInteger(width)).toBe(true)
    expect(Number.isInteger(height)).toBe(true)
  })
})

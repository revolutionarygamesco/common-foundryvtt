import { afterEach, describe, expect, it, vi } from 'vitest'
import { getPanelDimensions } from './get-panel-dimensions.ts'

describe('getPanelDimensions', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const viewport = { innerWidth: 1920, innerHeight: 1080 }

  it('sets static dimensions', () => {
    expect(getPanelDimensions(800, 500, viewport)).toMatchObject({ width: 800, height: 500 })
  })

  it('applies fractional dimensions', () => {
    expect(getPanelDimensions(1000, 2 / 3, viewport).height).toBe(1080 * (2/ 3))
  })

  it('rounds to the nearest pixel', () => {
    const { width, height } = getPanelDimensions(1 / 3, 1 / 3, viewport)
    expect(Number.isInteger(width)).toBe(true)
    expect(Number.isInteger(height)).toBe(true)
  })
})

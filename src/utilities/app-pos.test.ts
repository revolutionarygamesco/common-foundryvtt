import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  type ApplicationPositionOptions,
  getDimension,
  getOffset,
  generateApplicationPosition
} from './app-pos.ts'

const options: ApplicationPositionOptions = {
  width: 800,
  height: 500,
  viewport: { innerWidth: 1920, innerHeight: 1080 }
}

describe('getDimension', () => {
  it('returns auto if given auto', () => {
    const actual = getDimension('auto', options.viewport!.innerWidth)
    expect(actual).toBe('auto')
  })

  it('returns the number if given an integer', () => {
    const actual = getDimension(options.width!, options.viewport!.innerWidth)
    expect(actual).toBe(options.width)
  })

  it('calculates the dimension if given something less than 1', () => {
    const actual = getDimension(0.6, options.viewport!.innerWidth)
    expect(actual).toBe(Math.floor(options.viewport!.innerWidth * 0.6))
  })
})

describe('getOffset', () => {
  it('assumes half the total if given auto', () => {
    const actual = getOffset('auto', options.viewport!.innerWidth)
    expect(actual).toBe(Math.ceil(options.viewport!.innerWidth / 4))
  })

  it('calculates the offset', () => {
    const actual = getOffset(options.width!, options.viewport!.innerWidth)
    expect(actual).toBe(Math.ceil((options.viewport!.innerWidth - (options.width as number)) / 2))
  })
})

describe('generateApplicationPosition', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('sets static dimensions', () => {
    const { width, height, left, top } = generateApplicationPosition(options)
    expect(width).toBe(800)
    expect(height).toBe(500)
    expect(top).toBe(Math.ceil((1080 - 500) / 2))
    expect(left).toBe(Math.ceil((1920 - 800) / 2))
  })

  it('applies fractional dimensions', () => {
    const { height } = generateApplicationPosition({ ...options, height: 2 / 3 })
    expect(height).toBe(1080 * (2/ 3))
  })

  it('rounds to the nearest pixel', () => {
    const { width, height } = generateApplicationPosition({ ...options, width: 1 / 3, height: 1 / 3 })
    expect(Number.isInteger(width)).toBe(true)
    expect(Number.isInteger(height)).toBe(true)
  })
})

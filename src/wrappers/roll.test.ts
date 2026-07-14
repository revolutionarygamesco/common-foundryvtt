import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockRoll } from '../mocks/roll.ts'
import { roll } from './roll.ts'

describe('roll', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns the total', () => {
    mockRoll(11)
    expect(roll('1d10')).toBe(11)
  })
})

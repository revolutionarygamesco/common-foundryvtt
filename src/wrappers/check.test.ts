import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockRoll } from '../mocks/roll.ts'
import { check } from './check.ts'

describe('check', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns true if the check passes', () => {
    mockRoll(11)
    expect(check('1d10', total => total < 20)).toBe(true)
  })

  it('returns false if the check fails', () => {
    mockRoll(11)
    expect(check('1d10', total => total < 5)).toBe(false)
  })
})

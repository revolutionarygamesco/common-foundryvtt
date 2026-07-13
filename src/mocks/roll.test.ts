import { describe, expect, it } from 'vitest'
import { mockRoll } from './roll.js'

describe('mockRoll', () => {
  it('defaults to a total of 1', () => {
    expect(mockRoll().total).toBe(1)
  })

  it('reports the total it was given', () => {
    expect(mockRoll(20).total).toBe(20)
  })

  it('returns itself from evaluate', async () => {
    const roll = mockRoll(12)
    expect(await roll.evaluate()).toBe(roll)
    expect(roll.evaluateSync()).toBe(roll)
  })
})

import { beforeEach, describe, expect, it } from 'vitest'
import { mockTables } from '../mocks/tables.ts'
import { generateID } from '../utilities/generate-id.ts'
import { drawStr } from './draw-str.ts'

describe('drawStr', () => {
  const described = `RollTable.${generateID()}`
  const named = `RollTable.${generateID()}`

  beforeEach(() => {
    mockTables({
      [named]: { results: [{ name: 'a' } as foundry.documents.TableResult] },
      [described]: { results: [{ description: 'a' } as foundry.documents.TableResult] }
    })
  })

  it('draws the description by default', async () => {
    const actual = await drawStr(described, 'c')
    expect(actual).toBe('a')
  })

  it('can draw the name instead', async () => {
    const actual = await drawStr(named, 'c', 'name')
    expect(actual).toBe('a')
  })

  it('returns the fallback if no string is returned', async () => {
    const actual = await drawStr('nope', 'c')
    expect(actual).toBe('c')
  })
})

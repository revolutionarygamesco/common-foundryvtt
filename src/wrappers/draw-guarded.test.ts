import { beforeEach, describe, expect, it } from 'vitest'
import { isString } from '@revolutionarygamesco/common'
import { mockTables } from '../mocks/tables.ts'
import { generateID } from '../utilities/generate-id.ts'
import { drawGuarded } from './draw-guarded.ts'

describe('drawGuarded', () => {
  const described = `RollTable.${generateID()}`
  const named = `RollTable.${generateID()}`
  const invalid = `RollTable.${generateID()}`

  const isValid = (
    candidate: unknown
  ): candidate is 'a' | 'b' | 'c' => {
    if (!isString(candidate)) return false
    return ['a', 'b', 'c'].includes(candidate)
  }

  beforeEach(() => {
    mockTables({
      [named]: { results: [{ name: 'a' } as foundry.documents.TableResult] },
      [described]: { results: [{ description: 'a' } as foundry.documents.TableResult] },
      [invalid]: { results: [{ description: 'nope' } as foundry.documents.TableResult] }
    })
  })

  it('draws the description by default', async () => {
    const actual = await drawGuarded(described, isValid, 'c')
    expect(actual).toBe('a')
  })

  it('can draw the name instead', async () => {
    const actual = await drawGuarded(named, isValid, 'c', 'name')
    expect(actual).toBe('a')
  })

  it('returns the fallback if a valid result is not returned', async () => {
    const actual = await drawGuarded(invalid, isValid, 'c')
    expect(actual).toBe('c')
  })
})

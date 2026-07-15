import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockFromUuid } from '../mocks/from-uuid.ts'
import { rollTable } from './roll-table.ts'

describe('rollTable', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const total = 1
  const name = 'Name'
  const description = 'Description'

  const tables: Record<string, foundry.abstract.Document> = {
    table: {
      draw: async (options?: object): Promise<{ roll: foundry.dice.Roll, results: foundry.documents.TableResult[] }> => {
        return {
          roll: { total } as foundry.dice.Roll,
          results: [
            { name, description } as foundry.documents.TableResult
          ]
        }
      }
    } as foundry.documents.RollTable
  }

  it('returns the result', async () => {
    mockFromUuid(tables)
    const actual = await rollTable('table')
    expect(actual?.roll.total).toBe(total)
    expect(actual?.results[0].name).toBe(name)
    expect(actual?.results[0].description).toBe(description)
  })
})

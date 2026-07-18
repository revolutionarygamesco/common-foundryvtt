import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { mockTables } from '../mocks/tables.ts'
import { generateID } from '../utilities/generate-id.ts'
import { rollTable } from './roll-table.ts'

describe('rollTable', () => {
  const uuid = `RollTable.${generateID()}`
  const roll = 1
  const name = 'Name'
  const description = 'Description'

  beforeEach(() => {
    mockTables({
      [uuid]: { roll, results: [{ name, description } as foundry.documents.TableResult] }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns the result', async () => {
    const actual = await rollTable(uuid)
    expect(actual?.roll.total).toBe(roll)
    expect(actual?.results[0]?.name).toBe(name)
    expect(actual?.results[0]?.description).toBe(description)
  })
})

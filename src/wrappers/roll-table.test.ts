import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockTable } from '../mocks/table.ts'
import { rollTable } from './roll-table.ts'

describe('rollTable', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const roll = 1
  const name = 'Name'
  const description = 'Description'

  it('returns the result', async () => {
    mockTable({ uuid: 'table', roll, results: [{ name, description } as foundry.documents.TableResult] })
    const actual = await rollTable('table')
    expect(actual?.roll.total).toBe(roll)
    expect(actual?.results[0]?.name).toBe(name)
    expect(actual?.results[0]?.description).toBe(description)
  })
})

import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockTable } from '../mocks/table.ts'
import { drawName } from './draw-name.ts'

describe('drawName', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const roll = 1
  const name = 'Name'
  const description = 'Description'

  it('draws the name from the first table result', async () => {
    mockTable({ uuid: 'table', roll, results: [{ name, description } as foundry.documents.TableResult] })
    const actual = await drawName('table')
    expect(actual).toBe(name)
  })

  it('returns null if it gets no results', async () => {
    mockTable({ uuid: 'table', roll, results: [] })
    const actual = await drawName('table')
    expect(actual).toBeNull()
  })

  it('returns null if table does not exist', async () => {
    mockTable({ uuid: 'table', roll, results: [{ name, description } as foundry.documents.TableResult] })
    const actual = await drawName('nope')
    expect(actual).toBeNull()
  })
})

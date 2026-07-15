import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockTable } from '../mocks/table.ts'
import { drawDescription } from './draw-description.ts'

describe('drawDescription', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const roll = 1
  const name = 'Name'
  const description = 'Description'

  it('draws the description from the first table result', async () => {
    mockTable({ uuid: 'table', roll, results: [{ name, description } as foundry.documents.TableResult] })
    const actual = await drawDescription('table')
    expect(actual).toBe(description)
  })

  it('returns null if it gets no results', async () => {
    mockTable({ uuid: 'table', roll, results: [] })
    const actual = await drawDescription('table')
    expect(actual).toBeNull()
  })

  it('returns null if table does not exist', async () => {
    mockTable({ uuid: 'table', roll, results: [{ name, description } as foundry.documents.TableResult] })
    const actual = await drawDescription('nope')
    expect(actual).toBeNull()
  })
})

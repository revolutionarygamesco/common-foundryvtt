import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { mockTables } from '../mocks/tables.ts'
import { generateID } from '../utilities/generate-id.ts'
import { drawDescription } from './draw-description.ts'

describe('drawDescription', () => {
  const regular = `RollTable.${generateID()}`
  const empty = `RollTable.${generateID()}`
  const name = 'Name'
  const description = 'Description'

  beforeEach(() => {
    mockTables({
      [regular]: { results: [{ name, description } as foundry.documents.TableResult] },
      [empty]: { results: [] }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('draws the description from the first table result', async () => {
    const actual = await drawDescription(regular)
    expect(actual).toBe(description)
  })

  it('returns null if it gets no results', async () => {
    const actual = await drawDescription(empty)
    expect(actual).toBeNull()
  })

  it('returns null if table does not exist', async () => {
    const actual = await drawDescription('nope')
    expect(actual).toBeNull()
  })
})

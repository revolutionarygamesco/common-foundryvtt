import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockFromUuid } from '../mocks/index.ts'
import { generateID } from './generate-id.ts'
import { loadDocument } from './load-document.ts'

describe('loadDocument', () => {
  beforeEach(() => {
    mockFromUuid({ [uuid]: actor })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const id = generateID()
  const uuid = `Actor.${id}`
  const actor = { uuid, documentName: 'Actor', type: 'character' } as unknown as foundry.abstract.Document

  it('returns null if there is no such document', async () => {
    expect(await loadDocument<foundry.documents.Actor>(`Actor.${generateID()}`, 'Actor')).toBeNull()
  })

  it('returns null if the document is the wrong type', async () => {
    expect(await loadDocument<foundry.documents.Item>(uuid, 'Item')).toBeNull()
  })

  it('returns null if the document is the wrong subtype', async () => {
    expect(await loadDocument<foundry.documents.Actor>(uuid, 'Actor', 'creature')).toBeNull()
  })

  it('returns the document', async () => {
    const actual = await loadDocument<foundry.documents.Actor>(uuid, 'Actor')
    expect(actual!.uuid).toBe(uuid)
  })
})

import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockDragData, mockFromUuid } from '../mocks/index.ts'
import { generateID } from './generate-id.ts'
import { getDroppedDocument } from './dropped-document.ts'

describe('getDroppedDocument', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const id = generateID()
  const uuid = `Actor.${id}`
  const event = {} as DragEvent
  const actor = { documentName: 'Actor', type: 'character' } as unknown as foundry.abstract.Document

  const standardMockSetup = () => {
    mockDragData({ uuid })
    mockFromUuid({ [uuid]: actor })
  }

  it('returns null when the payload carries no uuid', async () => {
    mockDragData({})
    expect(await getDroppedDocument(event)).toBeNull()
  })

  it('resolves the dropped document from its uuid', async () => {
    standardMockSetup()
    expect(await getDroppedDocument(event)).toBe(actor)
  })

  it('returns null when the uuid resolves to nothing', async () => {
    mockDragData({ uuid })
    mockFromUuid({})
    expect(await getDroppedDocument(event)).toBeNull()
  })

  it('rejects a payload whose document class does not match the type', async () => {
    const uuid = `Item.${id}`
    mockDragData({ uuid })
    mockFromUuid({ [uuid]: { documentName: 'Item', type: 'feature' } as unknown as foundry.abstract.Document })
    expect(await getDroppedDocument(event, 'Actor')).toBeNull()
  })

  it('accepts a payload whose document class matches the type', async () => {
    standardMockSetup()
    expect(await getDroppedDocument(event, 'Actor')).toBe(actor)
  })

  it('rejects a payload whose document class does not match the subtype', async () => {
    standardMockSetup()
    expect(await getDroppedDocument(event, 'Actor', 'vehicle')).toBeNull()
  })

  it('accepts a payload whose document class matches the type and subtype', async () => {
    standardMockSetup()
    expect(await getDroppedDocument(event, 'Actor', 'character')).toBe(actor)
  })

  it('accepts a payload whose document class matches tthe subtype', async () => {
    standardMockSetup()
    expect(await getDroppedDocument(event, undefined, 'character')).toBe(actor)
  })
})

import { vi } from 'vitest'
import { stubGlobalPath } from './stub.ts'

export type CollectionRecord<T extends foundry.abstract.Document> = Record<string, T>

export const mockCollection = <T extends foundry.abstract.Document>(
  path: string,
  record: CollectionRecord<T> = {}
): foundry.utils.Collection<string, T> => {
  const map = new Map<string, T>(Object.entries(record))
  map.get = vi.fn(map.get.bind(map))
  const collection = map as foundry.utils.Collection<string, T>
  stubGlobalPath(path, collection)
  return collection
}

export const mockActors = (
  documents: CollectionRecord<foundry.documents.Actor> = {}
): void => { mockCollection('game.actors', documents) }

export const mockItems = (
  documents: CollectionRecord<foundry.documents.Item> = {}
): void => { mockCollection('game.items', documents) }

export const mockJournal = (
  documents: CollectionRecord<foundry.documents.JournalEntry> = {}
): void => { mockCollection('game.journal', documents) }

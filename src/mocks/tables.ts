import { generateID } from '../utilities/generate-id.ts'
import { mockFromUuid } from './from-uuid.ts'

interface MockTableOptions {
  uuid: string
  name: string
  roll: number
  results: foundry.documents.TableResult[]
}

export const mockTables = (
  tables: Record<string, Partial<MockTableOptions>> = {}
): void => {
  if (Object.keys(tables).length === 0) tables[`RollTable.${generateID()}`] = {}
  const data: Record<string, foundry.abstract.Document> = {}

  for (const [uuid, entry] of Object.entries(tables)) {
    data[uuid] = {
      name: entry.name ?? 'Mock RollTable',
      draw: async (options?: object): Promise<{ roll: foundry.dice.Roll, results: foundry.documents.TableResult[] }> => {
        return {
          roll: { total: entry.roll ?? 1 } as foundry.dice.Roll,
          results: entry.results ?? [{
            name: 'Mock RollTable Result #1',
            description: 'This is the first result in the mock RollTable.'
          } as foundry.documents.TableResult]
        }
      }
    } as foundry.documents.RollTable
  }

  mockFromUuid(data)
}

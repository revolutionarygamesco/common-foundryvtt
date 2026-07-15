import { generateID } from '../utilities/generate-id.ts'
import { mockFromUuid } from './from-uuid.ts'

interface MockTableOptions {
  uuid: string
  name: string
  roll: number
  results: foundry.documents.TableResult[]
}

export const mockTable = (
  options?: Partial<MockTableOptions>
): void => {
  const uuid = options?.uuid ?? `RollTable.${generateID()}`
  const name = options?.name ?? 'Mock RollTable'
  const roll = options?.roll ?? 1
  const results = options?.results ?? [{
    name: 'Mock RollTable Result #1',
    description: 'This is the first result in the mock RollTable.'
  } as foundry.documents.TableResult]

  mockFromUuid({
    [uuid]: {
      name,
      draw: async (options?: object): Promise<{ roll: foundry.dice.Roll, results: foundry.documents.TableResult[] }> => {
        return {
          roll: { total: roll } as foundry.dice.Roll,
          results
        }
      }
    } as foundry.documents.RollTable
  })
}

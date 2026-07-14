import { stubGlobalPath } from './stub.ts'

export const mockFromUuid = (
  documents: Record<string, foundry.abstract.Document> = {}
): void => {
  const fromUuid = async (uuid: string): Promise<foundry.abstract.Document | null> => documents[uuid] ?? null
  stubGlobalPath('foundry.utils.fromUuid', fromUuid)
}

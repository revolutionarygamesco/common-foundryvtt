import { rollTable } from './roll-table.ts'

export const drawDescription = async (
  uuid: string
): Promise<string | null> => {
  const result = await rollTable(uuid)
  return result?.results[0].description ?? null
}

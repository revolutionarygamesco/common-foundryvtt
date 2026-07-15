import { rollTable } from './roll-table.ts'

export const drawDescription = async (
  uuid: string
): Promise<string | null> => {
  const drawn = await rollTable(uuid)
  if (!drawn || drawn.results.length < 1) return null
  return drawn.results[0].description ?? null
}

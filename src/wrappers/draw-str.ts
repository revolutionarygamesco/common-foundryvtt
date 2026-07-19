import { isString } from '@revolutionarygamesco/common'
import { drawGuarded } from './draw-guarded.ts'

export const drawStr = async (
  uuid: string,
  fallback: string,
  field: 'name' | 'description' = 'description'
): Promise<string> => {
  return await drawGuarded(uuid, isString, fallback, field)
}

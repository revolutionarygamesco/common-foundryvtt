import { drawName } from './draw-name.ts'
import { drawDescription } from './draw-description.ts'

export const drawGuarded = async <T>(
  uuid: string,
  guard: (candidate: unknown) => candidate is T,
  fallback: T,
  field: 'name' | 'description' = 'description'
): Promise<T> => {
  const draw = field === 'name' ? drawName : drawDescription
  const drawn = await draw(uuid)
  return guard(drawn) ? drawn : fallback
}

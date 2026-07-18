import { roll } from './roll.ts'

export const check = (
  expr: string,
  callback: (total: number) => boolean
): boolean => {
  return callback(roll(expr))
}

import { isString } from '@revolutionarygamesco/common'

export const scopeLocalizer = (
  ...prefix: string[]
): (key: string | string[], data?: object) => string => {
  return (key: string | string[], data?: object): string => {
    const elems = isString(key) ? [key] : key
    const path = [...prefix, ...elems].join('.')
    return game.i18n.localize(path, data)
  }
}

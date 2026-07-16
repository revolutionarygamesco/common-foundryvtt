type Dict = Record<string, unknown>

const escapeHTML = (original: string): string => {
  return original.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const globals = globalThis as Dict
const game = (globals.game ?? {}) as Dict
const i18n = (game.i18n ?? {}) as Dict

i18n.localize ??= (key: string): string => key
game.i18n = i18n
globals.game = game

const foundry = (globals.foundry ?? {}) as Dict
const utils = (foundry.utils ?? {}) as Dict

utils.deepClone = <T extends object>(original: T): T => structuredClone(original)
utils.escapeHTML = escapeHTML
utils.fromUuid = async (uuid: string): Promise<foundry.abstract.Document | null> => null
foundry.utils = utils
globals.foundry = foundry

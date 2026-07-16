type Dict = Record<string, unknown>

const escapeHTML = (original: string): string => {
  return original.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const unescapeHTML = (original: string): string => {
  return original.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
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
utils.unescapeHTML = unescapeHTML
utils.fromUuid = async (uuid: string): Promise<foundry.abstract.Document | null> => null
foundry.utils = utils
globals.foundry = foundry

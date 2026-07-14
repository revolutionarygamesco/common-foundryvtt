type Dict = Record<string, unknown>

const globals = globalThis as Dict
const game = (globals.game ?? {}) as Dict
const i18n = (game.i18n ?? {}) as Dict

i18n.localize ??= (key: string): string => key
game.i18n = i18n
globals.game = game

const foundry = (globals.foundry ?? {}) as Dict
const utils = (foundry.utils ?? {}) as Dict

utils.fromUuid = async (uuid: string): Promise<foundry.abstract.Document | null> => null
foundry.utils = utils
globals.foundry = foundry

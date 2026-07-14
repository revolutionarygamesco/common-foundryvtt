type Dict = Record<string, unknown>

const globals = globalThis as Dict
const game = (globals.game ?? {}) as Dict
const i18n = (game.i18n ?? {}) as Dict

i18n.localize ??= (key: string): string => key

game.i18n = i18n
globals.game = game

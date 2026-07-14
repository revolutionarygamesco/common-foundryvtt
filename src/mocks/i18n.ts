import { stubGlobalPath } from './stub.ts'

export const mockLocalize = (
  translations: Record<string, string> = {}
): void => {
  const localize = (key: string): string => translations[key] ?? key
  stubGlobalPath('game.i18n.localize', localize)
}

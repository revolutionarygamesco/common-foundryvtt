export const registerAPI = (
  moduleId: string,
  api: Record<string, Function>
): void => {
  Hooks.once('init', () => {
    const module = game.modules.get(moduleId)
    if (module) module.api = api
  })
}

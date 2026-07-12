declare const Hooks: {
  on: (name: string, callback: Function) => number
  once: (name: string, callback: Function) => number
  off: (name: string, fn: number | Function) => void
}

declare const game: {
  i18n: {
    localize: (key: string, data?: object) => string
  }
  actors: foundry.utils.Collection<string, foundry.documents.Actor>
  modules: foundry.utils.Collection<string, foundry.packages.Module>
  packs: foundry.utils.Collection<string, any>
  paused: boolean
  scenes: foundry.utils.Collection<string, foundry.documents.Scene>
  settings: {
    register: (namespace: string, key: string, data: object) => void
    get: <T>(namespace: string, key: string) => T
    set: <T>(namespace: string, key: string, value: T) => Promise<T>
  }
  tables: foundry.utils.Collection<string, foundry.documents.RollTable>
  time: foundry.helpers.GameTime
  userId: string
  users: foundry.documents.Users
}

export {}

declare global {
  namespace foundry {
    interface Hooks {
      on: (name: string, callback: Function) => number
      once: (name: string, callback: Function) => number
      off: (name: string, fn: number | Function) => void
    }

    interface Game {
      i18n: {
        localize: (key: string, data?: object) => string
      }
      actors: foundry.utils.Collection<string, foundry.documents.Actor>
      folders: foundry.utils.Collection<string, foundry.documents.Folder>
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
      user: foundry.documents.User
      users: foundry.documents.Users
    }

    interface UI {
      notifications: {
        clear: () => void
        has: (notification: number | foundry.ui.Notification) => boolean
        notify: (message: string | object, type?: string, options?: foundry.ui.NotificationOptions) => foundry.ui.Notification
        remove: (notification: number | foundry.ui.Notification) => void
        update: (notification: number | foundry.ui.Notification, update?: foundry.ui.NotificationUpdate) => void
        error: (message: string | object, options?: foundry.ui.NotificationOptions) => Readonly<foundry.ui.Notification>
        info: (message: string | object, options?: foundry.ui.NotificationOptions) => Readonly<foundry.ui.Notification>
        success: (message: string | object, options?: foundry.ui.NotificationOptions) => Readonly<foundry.ui.Notification>
        warn: (message: string | object, options?: foundry.ui.NotificationOptions) => Readonly<foundry.ui.Notification>
      }
    }
  }

  const Hooks: foundry.Hooks
  const game: foundry.Game
  const ui: foundry.UI
}

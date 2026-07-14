export {}

declare global {
  namespace foundry {
    namespace ui {
      interface Notification {
        active: boolean
        console: boolean
        element?: HTMLElement
        error?: Error
        id: number
        message: string
        pct: number
        permanent: boolean
        progress: boolean
        remove?: () => void
        timestamp: number
        type: string
        update?: (pct: number) => void
      }

      interface NotificationOptions {
        clean?: boolean
        console?: boolean
        escape?: boolean
        format?: Record<string, string>
        localize?: boolean
        permanent?: boolean
        progress?: boolean
      }

      interface NotificationUpdate {
        clean?: string
        escape?: string
        format?: Record<string, string>
        localize?: string
        message?: string
        pct?: number
      }
    }
  }
}

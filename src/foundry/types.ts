export {}

declare global {
  namespace foundry {
    namespace types {
      interface ElevatedPoint {
        x: number
        y: number
        elevation: number
      }

      interface TimeComponents {
        day: number
        dayOfMonth: number
        dayOfWeek: number
        hour: number
        leapYear: boolean
        minute: number
        month: number
        season: number
        second: number
        year: number
      }
    }
  }
}

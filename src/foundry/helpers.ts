export {}

declare global {
  namespace foundry {
    namespace helpers {
      interface GameTime {
        readonly worldTime: number
        advance(delta: number | types.TimeComponents, options?: object): Promise<number>
        set(time: number | types.TimeComponents, options?: object): Promise<number>
      }
    }
  }
}

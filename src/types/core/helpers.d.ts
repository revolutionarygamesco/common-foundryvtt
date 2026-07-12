declare namespace foundry {
  namespace helpers {
    interface GameTime {
      get worldTime(): number
      advance(delta: number | types.TimeComponents, options?: object): Promise<number>
      set(time: number | types.TimeComponents, options?: object): Promise<number>
    }
  }
}

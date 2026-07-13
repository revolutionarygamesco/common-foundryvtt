export {}

declare global {
  namespace foundry {
    namespace audio {
      class AudioHelper {
        static play(src: string, options?: object): Promise<Sound>
      }

      class Sound {
        src: string

        readonly playing: boolean
        readonly volume: number

        pause(): void
        play(options?: object): Promise<Sound>
        stop(options?: object): Promise<Sound>
      }
    }
  }
}

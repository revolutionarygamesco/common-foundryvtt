export interface PirateBorgActorSystem {
  attributes?: {
    speed?: { value: number }
    crew?: { min: number; max: number; value: number }
    cargo?: { max: number; value: number }
    featureType?: string
  }
  captain?: string
  crews?: string[]
  silver?: number
}

declare global {
  namespace foundry {
    namespace documents {
      interface ActorSystem extends PirateBorgActorSystem {}
    }
  }
}

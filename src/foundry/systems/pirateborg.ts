export namespace PirateBorgSystem {
  export type Die = '0' | 'd2' | 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20'

  export interface Stat {
    value: number
  }

  export interface Meter extends Stat {
    max: number
  }

  export interface Range extends Meter {
    min: number
  }

  export interface ShipWeapon {
    die: Die
    quantity?: number
    warning?: string
  }

  export interface CreatureWeapon {
    formula: Die
    description?: string
  }

  export interface Actor {
    abilities?: {
      agility?: Stat
      presence?: Stat
      skill?: Stat
      spirit?: Stat
      strength?: Stat
      toughness?: Stat
    }
    attributes?: {
      armor?: CreatureWeapon
      attack?: CreatureWeapon
      cargo?: Meter
      carryingModifier?: Stat
      combat?: {
        armorTierModifier?: number
        attackModifier?: number
        damageModifier?: number
        drModifier?: number
        initiativeModifier?: number
        luckyModifier?: number
        speedModifier?: number
      }
      crew?: Range
      extraResource?: Range
      grog?: {
        drinks?: number
        hoursRemaining?: number
      }
      hp?: Meter
      hull?: Range
      luck?: Range
      morale?: number
      rituals?: Range
      shanties?: Range
      speed?: Range
    }
    baseClass?: string
    description?: string
    weapons?: {
      smallArms?: ShipWeapon
      broadsides?: ShipWeapon
      ram?: ShipWeapon
    }
    captain?: string
    crews?: string[]
    silver?: number
    special?: string
  }
}

declare global {
  namespace foundry {
    namespace documents {
      interface ActorSystem extends PirateBorgSystem.Actor {}
    }
  }
}

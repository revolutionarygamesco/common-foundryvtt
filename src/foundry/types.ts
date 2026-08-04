export {}

declare global {
  namespace foundry {
    namespace types {
      type FolderTypes = 'ActiveEffect' | 'Actor' | 'Adventure' | 'Item' | 'Scene' | 'JournalEntry' | 'Playlist' | 'RollTable' | 'Cards' | 'Macro' | 'Compendium'
      type DataSchema = Record<string, foundry.data.fields.DataField>

      interface ApplicationPosition {
        height: number | 'auto'
        left: number
        scale: number
        top: number
        width: number | 'auto'
        zIndex: number
      }

      interface ApplicationTab {
        active: boolean
        cssClass: string
        group: string
        icon?: string
        id: string
        label?: string
        tooltip?: string
      }

      interface ApplicationTabsConfiguration {
        initial?: string
        labelPrefix?: string
        tabs: Array<{
          cssClass?: string
          icon?: string
          id: string
          label?: string
          tooltip?: string
        }>
      }

      interface ElevatedPoint {
        x: number
        y: number
        elevation: number
      }

      interface FolderChildNode {
        children: FolderChildNode[]
        depth: number
        entries: Array<foundry.abstract.Document>
        folder: foundry.documents.Folder
        root: boolean
        visible: boolean
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

      interface TokenBarData {
        attribute?: string;
      }

      interface TokenData {
        _id: string | null
        _movementHistory: object[]
        _regions: string[]
        actorId: string | null
        actorLink?: boolean
        alpha?: number
        bar1?: TokenBarData
        bar2?: TokenBarData
        delta?: object
        depth?: number
        detectionModes: object
        displayBars?: number
        displayName?: number
        disposition?: number
        elevation?: number
        flags: Record<string, Record<string, unknown>>
        height?: number
        hidden?: boolean
        level?: string
        light?: any
        locked?: boolean
        lockRotation?: boolean
        movementAction: string
        name: string
        occludable: any
        ring: TokenRingData
        rotation?: number
        shape?: any
        sight: any
        sort?: number
        texture: {
          src: string
          [key: string]: any
        };
        width?: number
        x?: number
        y?: number
      }

      type PrototypeTokenData = Omit<TokenData, | '_id' | 'actorId' | 'delta' | 'x' | 'y' | 'elevation' | 'shape' | 'sort' | 'hidden' | 'locked' | '_movementHistory' | '_regions'>

      interface TokenRingData {
        colors: { background?: string; ring?: string }
        effects?: number
        enabled?: number
        subject: { scale?: number; texture?: string }
      }
    }
  }
}

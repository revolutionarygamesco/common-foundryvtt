export {}

declare global {
  namespace foundry {
    namespace types {
      type FolderTypes = 'ActiveEffect' | 'Actor' | 'Adventure' | 'Item' | 'Scene' | 'JournalEntry' | 'Playlist' | 'RollTable' | 'Cards' | 'Macro' | 'Compendium'

      interface ApplicationPosition {
        height: number | 'auto'
        left: number
        scale: number
        top: number
        width: number | 'auto'
        zIndex: number
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
    }
  }
}

export {}

declare global {
  namespace foundry {
    namespace documents {
      interface ActorSystem {}
      interface ItemSystem {}
      interface JournalEntryPageSystem {}
      interface TableResultSystem {}

      interface Actor extends foundry.ClientDocument, abstract.Named, abstract.Imaged, abstract.Sorted, abstract.Subtyped<ActorSystem> {
        folder: Folder | undefined
        items: utils.Collection<string, Item>
        prototypeToken: foundry.types.PrototypeTokenData
        getTokenDocument(data?: object, options?: object): Promise<TokenDocument>
      }

      class Actor {
        static create(data?: any, operation?: abstract.CreateOperation): Promise<Actor | undefined>
      }

      interface Adventure extends foundry.ClientDocument, abstract.Named, abstract.Imaged, abstract.Sorted {}

      interface ChatMessage extends foundry.ClientDocument {}
      class ChatMessage {
        static create(data?: any, operation?: abstract.CreateOperation): Promise<ChatMessage | undefined>
      }

      interface Drawing extends foundry.ClientDocument {
        text?: string
        name: string
      }

      class Folder {
        type: foundry.types.FolderTypes
        name: string
        children: foundry.types.FolderChildNode[]
        get folder (): Folder | null
        static create(data?: any, operation?: any): Promise<Folder | undefined>
      }

      interface Item extends foundry.ClientDocument, abstract.Named, abstract.Imaged, abstract.Sorted, abstract.Subtyped<ItemSystem> {
        folder: Folder | undefined
      }

      class Item {
        static create(data?: any, operation?: abstract.CreateOperation): Promise<Item | undefined>
      }

      interface JournalEntry extends foundry.ClientDocument, abstract.Named, abstract.Sorted {
        folder: Folder | undefined
        pages: utils.Collection<string, JournalEntryPage>
      }

      class JournalEntry {
        static create(data?: any, operation?: abstract.CreateOperation): Promise<JournalEntry | undefined>
      }

      interface JournalEntryPage extends foundry.ClientDocument, abstract.Named, abstract.Sorted, abstract.Subtyped<JournalEntryPageSystem> {
        title: { show: boolean; level: number }
        text: { format: number; content: string }
      }

      interface RegionDocument extends foundry.ClientDocument {
        testPoint(point: types.ElevatedPoint): boolean
      }

      interface Scene extends foundry.ClientDocument, abstract.Named, abstract.Sorted {
        active: boolean
        drawings: utils.Collection<string, Drawing>
        folder: Folder | undefined
        regions: utils.Collection<string, RegionDocument>
        tokens: utils.Collection<string, TokenDocument>
        activate(): Promise<Scene>
        view(): Promise<Scene>
      }

      interface TokenDocument extends foundry.ClientDocument, abstract.Named, abstract.Sorted {
        readonly actor: Actor | null
        readonly isLinked: boolean
        hidden: boolean
      }

      interface RollTable extends foundry.ClientDocument, abstract.Named, abstract.Imaged, abstract.Sorted {
        folder: Folder | undefined
        draw(options?: object): Promise<any>
      }

      interface TableResult extends foundry.ClientDocument, abstract.Subtyped<TableResultSystem> {
        description?: string
        documentUuid?: string
        img?: string
        name?: string
      }

      interface User extends abstract.Named {
        id: string
        get isGM (): boolean
      }

      interface Users extends utils.Collection<string, User> {
        current: User | null
        activeGM: User | null
      }
    }
  }
}

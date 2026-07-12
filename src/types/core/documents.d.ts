declare namespace foundry {
  namespace documents {
    interface ActorSystem {}
    interface ItemSystem {}
    interface JournalEntryPageSystem {}
    interface TableResultSystem {}

    interface Actor extends abstract.Document, abstract.Named, abstract.Imaged, abstract.Subtyped<ActorSystem> {
      items: utils.Collection<string, Item>
      getTokenDocument(data?: object, options?: object): Promise<TokenDocument>
    }

    class Actor {
      static create(data?: any, operation?: abstract.CreateOperation): Promise<Actor | undefined>
    }

    interface Adventure extends abstract.Document, abstract.Named, abstract.Imaged {}

    interface ChatMessage extends abstract.Document {}
    class ChatMessage {
      static create(data?: any, operation?: abstract.CreateOperation): Promise<ChatMessage | undefined>
    }

    interface Drawing extends abstract.Document {
      text?: string
    }

    interface Item extends abstract.Document, abstract.Named, abstract.Imaged, abstract.Subtyped<ItemSystem> {}
    class Item {
      static create(data?: any, operation?: abstract.CreateOperation): Promise<Item | undefined>
    }

    interface JournalEntry extends abstract.Document, abstract.Named {
      pages: utils.Collection<string, JournalEntryPage>
    }

    class JournalEntry {
      static create(data?: any, operation?: abstract.CreateOperation): Promise<JournalEntry | undefined>
    }

    interface JournalEntryPage extends abstract.Document, abstract.Named, abstract.Subtyped<JournalEntryPageSystem> {
      title: { show: boolean; level: number }
      text: { format: number; content: string }
    }

    interface RegionDocument extends abstract.Document {
      testPoint(point: types.ElevatedPoint): boolean
    }

    interface Scene extends abstract.Document, abstract.Named {
      active: boolean
      drawings: utils.Collection<string, Drawing>
      regions: utils.Collection<string, RegionDocument>
      tokens: utils.Collection<string, TokenDocument>
      activate(): Promise<Scene>
      view(): Promise<Scene>
    }

    interface TokenDocument extends abstract.Document, abstract.Named {
      readonly actor: Actor | null
      readonly isLinked: boolean
      hidden: boolean
    }

    interface RollTable extends abstract.Document, abstract.Named, abstract.Imaged {
      draw(options?: object): Promise<any>
    }

    interface TableResult extends abstract.Document, abstract.Subtyped<TableResultSystem> {
      description?: string
      documentUuid?: string
      img?: string
      name?: string
    }

    interface User {
      id: string
    }

    interface Users extends utils.Collection<string, User> {
      current: User | null
      activeGM: User | null
    }
  }
}

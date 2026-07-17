export {}

declare global {
  namespace foundry {
    namespace utils {
      interface Collection<K, V> extends Map<K, V> {
        find(predicate: (value: V, key: K, collection: this) => boolean): V | undefined
        filter(predicate: (value: V, key: K, collection: this) => boolean): V[]
        map<T>(callback: (value: V, key: K, collection: this) => T): T[]
        some(predicate: (value: V, key: K, collection: this) => boolean): boolean
        every(predicate: (value: V, key: K, collection: this) => boolean): boolean
        reduce<T>(
          callback: (accumulator: T, value: V, key: K, collection: this) => T,
          initial: T,
        ): T
        getName(name: string): V | undefined
        contents: V[]
      }

      function deepClone<T extends object>(orig: T, options?: { prune?: boolean; strict?: boolean }): T
      function escapeHTML(content: string): string
      function unescapeHTML(content: string): string
      function fromUuid(uuid: string, options?: { invalid?: boolean, relative?: foundry.abstract.Document }): Promise<foundry.abstract.Document | null>
    }
  }
}

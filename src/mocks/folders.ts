import { stubGlobalPath } from './stub.ts'

export const mockFolders = (
  paths: string[]
): { folders: Map<string, foundry.documents.Folder>; all: foundry.documents.Folder[] } => {
  const folders = new Map<string, foundry.documents.Folder>()
  const all: foundry.documents.Folder[] = []
  for (const path of paths) {
    let parent: foundry.documents.Folder | null = null
    let acc = ''
    for (const name of path.split('/')) {
      acc = acc ? `${acc}/${name}` : name
      let node = folders.get(acc)
      if (!node) {
        node = { name, folder: parent } as unknown as foundry.documents.Folder
        folders.set(acc, node)
        all.push(node)
      }
      parent = node
    }
  }
  stubGlobalPath('game.folders', all)
  return { folders, all }
}

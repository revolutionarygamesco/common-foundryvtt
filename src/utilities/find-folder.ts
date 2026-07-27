export const findFolder = (
  path: string
): foundry.documents.Folder | undefined => {
  const names = path.split('/')
    .filter(Boolean)
    .map(name => name.trim())
  if (names.length === 0) return undefined

  return game.folders.find(folder => {
    let current: foundry.documents.Folder | null | undefined = folder
    for (const name of names.toReversed()) {
      if (current?.name !== name) return false
      current = current.folder
    }
    return true
  })
}

export const getClickedDocument = <T extends foundry.ClientDocument>(
  el: HTMLElement,
  collection: foundry.utils.Collection<string, T>
): T | null => {
  const id = el.closest<HTMLElement>('[data-entry-id]')?.dataset.entryId
  return id ? (collection.get(id) ?? null) : null
}

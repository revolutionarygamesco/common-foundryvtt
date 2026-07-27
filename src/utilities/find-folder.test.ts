import { describe, it, expect } from 'vitest'
import { mockFolders } from '../mocks/index.ts'
import { findFolder } from './find-folder.ts'

describe('findFolder', () => {
  it('finds a folder by its full path', () => {
    const { folders } = mockFolders(['Actors/Characters/PCs'])
    expect(findFolder('Actors/Characters/PCs')).toBe(folders.get('Actors/Characters/PCs'))
  })

  it('can handle spaces', () => {
    const { folders } = mockFolders(['Actors/Characters/PCs'])
    expect(findFolder('Actors / Characters / PCs')).toBe(folders.get('Actors/Characters/PCs'))
  })

  it('returns undefined if no such folder can be found', () => {
    mockFolders(['Actors/Characters/PCs'])
    expect(findFolder('Actors/Nobody')).toBeUndefined()
  })

  it('returns undefined for an empty path', () => {
    mockFolders(['Actors'])
    expect(findFolder('')).toBeUndefined()
  })
})

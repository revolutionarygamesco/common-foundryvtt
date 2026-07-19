import { beforeEach, describe, expect, it } from 'vitest'
import { mockLocalize } from '../mocks/index.ts'
import { scopeLocalizer } from './scope-localizer.ts'

describe('scopeLocalizer', () => {
  const scoped = 'This is the scoped option.'
  const unscoped = 'This is the unscoped option.'

  beforeEach(() => {
    mockLocalize({
      'prefix.path.path.to.thing': scoped,
      'path.to.thing': unscoped
    })
  })

  it('returns a scoped localizer', () => {
    const t = scopeLocalizer('prefix.path')
    const actual = t('path.to.thing')
    expect(actual).toBe(scoped)
  })

  it('can take several strings', () => {
    const t = scopeLocalizer('prefix', 'path')
    const actual = t(['path', 'to', 'thing'])
    expect(actual).toBe(scoped)
  })

  it('returns an unscoped localizer if not given a prefix', () => {
    const t = scopeLocalizer()
    const actual = t('path.to.thing')
    expect(actual).toBe(unscoped)
  })
})

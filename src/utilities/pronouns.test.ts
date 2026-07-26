import { describe, expect, it } from 'vitest'
import getPronouns from './pronouns.ts'

describe('getPronouns', () => {
  it.each(['masculine', 'feminine', 'third-gender'])('returns %s pronouns', (gender: string) => {
    const { s, o, self, pa, pp, S, O, Self, PA, PP } = getPronouns('path.to', gender)
    expect(s).toBe(`path.to.pronouns.${gender}.sub`)
    expect(o).toBe(`path.to.pronouns.${gender}.obj`)
    expect(self).toBe(`path.to.pronouns.${gender}.self`)
    expect(pa).toBe(`path.to.pronouns.${gender}.pos.adj`)
    expect(pp).toBe(`path.to.pronouns.${gender}.pos.pro`)
    expect(S).toBe(`Path.to.pronouns.${gender}.sub`)
    expect(O).toBe(`Path.to.pronouns.${gender}.obj`)
    expect(Self).toBe(`Path.to.pronouns.${gender}.self`)
    expect(PA).toBe(`Path.to.pronouns.${gender}.pos.adj`)
    expect(PP).toBe(`Path.to.pronouns.${gender}.pos.pro`)
  })
})

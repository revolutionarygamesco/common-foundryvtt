import { capitalize } from '@revolutionarygamesco/common'
import { scopeLocalizer } from '../wrappers/scope-localizer.ts'

export interface Pronouns {
  s: string // Subjective
  S: string // Subjective (capitalized)
  o: string // Objective
  O: string // Objective (capitalized)
  self: string // himself/herself
  Self: string // Himself/Herself (capitalized)
  pa: string // Possessive adjective
  PA: string // Possessive adjective (capitalized)
  pp: string // Possessive pronoun
  PP: string // Possessive pronoun (capitalized)
}

const getPronouns = (
  path: string,
  gender: string
): Pronouns => {
  const t = scopeLocalizer([path, 'pronouns', gender].join('.'))

  const s = t('sub')
  const o = t('obj')
  const self = t('self')
  const pa = t(['pos', 'adj'])
  const pp = t(['pos', 'pro'])

  const S = capitalize(s)
  const O = capitalize(o)
  const Self = capitalize(self)
  const PA = capitalize(pa)
  const PP = capitalize(pp)

  return { s, S, o, O, pa, PA, pp, PP, self, Self }
}

export default getPronouns

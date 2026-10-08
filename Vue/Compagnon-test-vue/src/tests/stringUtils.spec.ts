// src/services/stringUtils.spec.ts
import { describe, it, expect } from 'vitest'
import { toUpperCase, capitalize, formatFullName } from '../services/stringUtils'

describe('stringUtils service', () => {
  describe('toUpperCase()', () => {
    it('transforme une chaîne en majuscules', () => {
      expect(toUpperCase('library')).toBe('LIBRARY')
    })

    it('retourne une chaîne vide si la valeur est vide', () => {
      expect(toUpperCase('')).toBe('')
    })
  })

  describe('capitalize()', () => {
    it('met la première lettre en majuscule et le reste en minuscule', () => {
      expect(capitalize('mAtHiEu')).toBe('Mathieu')
    })

    it('supprime les espaces inutiles au début et à la fin', () => {
      expect(capitalize('  jean  ')).toBe('Jean')
    })
  })

  describe('formatFullName()', () => {
    it('formate le prénom avec une majuscule et le nom tout en majuscules', () => {
      const result = formatFullName('pierre', 'durand')
      expect(result).toBe('Pierre DURAND')
    })

    it('nettoie les espaces autour des entrées', () => {
      const result = formatFullName('  alice  ', '  martin  ')
      expect(result).toBe('Alice MARTIN')
    })
  })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter  from '../components/AppFooter.vue'
import BackToTop from '../components/BackToTop.vue'

//!mount est la fonction qui prend un composant Vue (ici AppFooter) et le compile dans l'environnement DOM virtuel de test (happy-dom ou jsdom).
// Lorsque vous exécutez mount(AppFooter) :
// Le bloc <script setup> du composant s'exécute (déclaration des ref, fonctions, etc.).
// Le template HTML est évalué et généré.
// Les composants enfants importés (comme <BackToTop/>) sont également instanciés et rendus.

//!wrapper est l'objet renvoyé par la fonction mount(). C'est une « enveloppe » (wrapper) autour de votre composant monté, 
// fournissant une API d'outils pour inspecter le DOM, vérifier l'état interne et simuler des actions.
// Au lieu de faire du JavaScript natif complexe (document.querySelector), le wrapper offre des méthodes raccourcies pour vos assertions :
// wrapper.find('h1') pour trouver un élément HTML
// wrapper.text() pour récupérer le texte du composant
// wrapper.find('h1').text() pour récupérer le texte d'un élément spécifique

describe('AppFooter.vue', () => {
  it('affiche dynamiquement l année courante dans le copyright', () => {
    const wrapper = mount(AppFooter)
    const currentYear = new Date().getFullYear()

    // Vérifie que l'année calculée est bien présente dans le texte du footer
    expect(wrapper.text()).toContain(`Copyright © ${currentYear} - All right reserved`)
  })

  it('rend correctement le composant enfant BackToTop', () => {
    const wrapper = mount(AppFooter)

    // Vérifie la présence du composant <BackToTop />
    expect(wrapper.findComponent(BackToTop).exists()).toBe(true)
  })

  it('contient les liens de réseaux sociaux dans la navigation', () => {
    const wrapper = mount(AppFooter)
    
    // Vérifie qu'il y a bien 3 liens <a> dans le bloc de navigation
    const socialLinks = wrapper.findAll('nav a')
    expect(socialLinks).toHaveLength(3)
  })
})
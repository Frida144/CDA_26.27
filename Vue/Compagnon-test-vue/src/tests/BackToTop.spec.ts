import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import BackToTop from '../components/BackToTop.vue'

// 1. Création d'un ref réactif pour simuler la position du scroll Y
const mockY = ref(0)

// 2. Mock du module @vueuse/core avant de charger le composant
vi.mock('@vueuse/core', () => ({
  useWindowScroll: () => ({
    y: mockY
  })
}))

describe('BackToTop.vue', () => {
  beforeEach(() => {
    // Réinitialisation du scroll à 0 avant chaque test
    mockY.value = 0
  })

  it('1. Affiche la valeur arrondie du scroll Y', async () => {
    mockY.value = 145.8
    const wrapper = mount(BackToTop)

    // Math.round(145.8) => 146
    expect(wrapper.text()).toContain('Scroll Y : 146px')
  })

  it('2. N affiche PAS le bouton si le scroll est inférieur ou égal à 300px', () => {
    mockY.value = 250
    const wrapper = mount(BackToTop)

    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('3. Affiche le bouton dès que le scroll dépasse 300px', () => {
    mockY.value = 350
    const wrapper = mount(BackToTop)

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-label')).toBe('Retour en haut')
  })

  it('4. Remet la valeur de Y à 0 lors du clic sur le bouton', async () => {
    mockY.value = 500
    const wrapper = mount(BackToTop)

    const button = wrapper.find('button')
    await button.trigger('click')

    // Vérifie que la fonction scrollToTop a bien remis la réactivité à 0
    expect(mockY.value).toBe(0)
  })
})
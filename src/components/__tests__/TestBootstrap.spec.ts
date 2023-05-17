import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'

import { configureCompat } from 'vue' // with @vue/compat
configureCompat({ MODE: 2 })
import { BootstrapVue } from 'bootstrap-vue'

import TestBootstrap from '../TestBootstrap.vue'

describe('TestBootstrap', () => {
  it('renders properly', () => {
    const msg = 'Hello Vitest'
    render(TestBootstrap, { props: { msg: msg }, global: { plugins: [BootstrapVue] } })
    screen.getByText(msg)
  })
})

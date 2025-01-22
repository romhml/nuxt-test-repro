import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ExampleComponent from '~/app/components/ExampleComponent.vue'

test('with mountSuspended', async () => {
  const wrapper = await mountSuspended(ExampleComponent, { attrs: { 'aria-label': 'Aria Label' } })
  expect(wrapper.find('[aria-label="Aria Label"]').exists()).toBe(true)
})


test('with mount', () => {
  const wrapper = mount(ExampleComponent, { attrs: { 'aria-label': 'Aria Label' } })
  expect(wrapper.find('[aria-label="Aria Label"]').exists()).toBe(true)
})

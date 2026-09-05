/**
 * Vue island entry point for qingshuige-theme.
 *
 * Hugo owns the document and page rendering. Vue will only mount into
 * explicitly marked islands. Components will be registered here as the
 * interactive design is implemented.
 */
import { createApp } from "vue"

const components = Object.freeze({})

for (const element of document.querySelectorAll("[data-vue-component]")) {
  const name = element.dataset.vueComponent
  const component = components[name]

  if (!component) {
    console.warn(`[qingshuige-theme] Unknown Vue component: ${name}`)
    continue
  }

  createApp(component).mount(element)
}

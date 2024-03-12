import { ref } from 'vue'

/**
 * @enum {object}
 * @readonly
*/
const ViewMode = {
  List: 'list',
  Form: 'form',
  Single: 'single'
}

/**
 * @function
 *
 * @desc Composable para utilizar nos componentes de view, estes componentes normalmente
 * são componentes que englobam a página.
 *
 * @param {{
 *  mode: import('types').ViewMode,
 *  defaults: import('types').ViewStateDefaults
 * }} config
 *
 * @example
 *
 * ```html
 * <app-list-view-component
 *  v-model:results="viewState.results"
 *  v-model:fields="viewState.fields"
 *  v-model:results="viewState.metadata"
 *  v-model:results="viewState.fetching"
 * />
 *
 * <script setup>
 * const { viewState } = useView({ mode: 'list' })
 *
 * viewState.value.fetching // true | false
 * </script>
 * ```
 *
 * @returns {{ viewState: import('types').ViewStateRef }}
 */
export function useView (config = {}) {
  const {
    mode = ViewMode.Form,
    defaults = {
      errors: {},
      metadata: {},
      values: {}
    }
  } = config

  const hasViewMode = Object.values(ViewMode).includes(mode)

  if (!hasViewMode) throw new Error('Invalid view mode')

  const viewState = ref({
    errors: { ...defaults?.errors },
    fields: { ...defaults?.fields },
    metadata: { ...defaults?.metadata },

    fetching: false,

    ...(mode === ViewMode.List && { results: [] }),
    ...(mode === ViewMode.Single && { result: {} }),
    ...(mode === ViewMode.Form && { values: { ...defaults?.values }, submitting: false })
  })

  return {
    viewState
  }
}

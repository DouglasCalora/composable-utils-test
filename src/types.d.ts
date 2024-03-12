import type { Ref } from 'vue'

// useCan
export type UserStore = {
  userPermissions: Record<string, string>
  isSuperuser?: boolean
}

// useView
export type ViewState = {
  errors: object,
  fields: object,
  metadata: object,
  fetching: boolean,
  values?: object,
  submitting?: boolean,
  results?: object[],
  result?: object
}

export type ViewStateRef = Ref<ViewState>

export type ViewMode = 'list' | 'form' | 'single'

export type ViewStateDefaults = Pick<ViewState, 'errors' | 'metadata' | 'values'>

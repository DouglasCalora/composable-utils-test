export type UserStore = {
  userPermissions: Record<string, string>
  isSuperuser?: boolean
}

export type UseCanParam = {
  store: UserStore
}
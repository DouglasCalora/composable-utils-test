import type { UseCanParam } from './use-can.type'

/**
 * @desc Composable base para permissionamento de tela, utilize-o como uma base para criar
 * seu composable interno, não utilize-o diretamente nas telas.
 *
 */
export function useCan ({ store }: UseCanParam) {
  const { userPermissions, isSuperuser } = store

  /**
   * @desc Função que valida apenas 1 permissão por vez.
   *
   * @example
   * ```js
   * can('users.list') // true | false
   * can('companies.list', 'companies') // true | false
   * ```
   */
  function can (permission: string, entity: string) {
    try {
      if (isSuperuser) return true

      if (Object.prototype.hasOwnProperty.call(userPermissions, permission)) {
        return entity
          ? userPermissions[permission] === '*' || userPermissions[permission].includes(entity)
          : true
      }

      return false
    } catch {
      return false
    }
  }

  /**
   * @desc Função que valida várias permissões de uma vez, se alguma das permissões
   * passadas existirem, retornará "true".
   *
   * @example
   * ```js
   * canAny(['users.list', 'users.show']) // true | false
   * canAny(['companies.list', 'companies.delete'], 'companies') // true | false
   * ```
   */
  function canAny (permissions: string[] = [], entity: string) {
    if (!Array.isArray(permissions)) {
      throw new Error('Please provide a valid array for permissions.')
    }

    return permissions.some(permission => can(permission, entity))
  }

  return {
    can,
    canAny
  }
}

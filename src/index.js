import error from '@magic/error'
import is from '@magic/types'

const libName = '@grundstein/mem-store'

/**
 * @template {Record<string, any>} T
 * @typedef {object} MemStore
 * @property {<K extends keyof T>(key: K, val: T[K]) => import('@magic/error').CustomError | true} set
 * @property {<K extends keyof T>(key: K) => T | T[K] | import('@magic/error').CustomError} get
 * @property {() => T} getAll
 * @property {() => void} reset
 * @property {() => void} clean
 */

/**
 * @template {Record<string | number, any>} T
 * @param {T} [initial]
 * @param {boolean} [throwError=false]
 * @returns {MemStore<T>}
 */
export const memStore = (initial = /** @type {T} */ ({}), throwError = false) => {
  let data = initial

  return {
    set: (key, val) => {
      if (is.empty(key)) {
        const err = error(`${libName}.set: key must be non-empty`, 'KEY_EMPTY')
        if (throwError) {
          throw err
        }
        return err
      }

      if (!is.string(key) && !is.number(key)) {
        const err = error(
          `${libName}.set: key must be a string or a number, got ${typeof key}`,
          'KEY_TYPE',
        )
        if (throwError) {
          throw err
        }
        return err
      }

      data[key] = val
      return true
    },

    get: key => {
      if (is.undefined(key)) {
        return data
      }

      const isValidKey = is.string(key) || is.number(key)
      if (is.empty(key) || !isValidKey) {
        const err = error(
          `${libName}.get: key must be a string or a number, got ${typeof key}`,
          'KEY_TYPE',
        )
        if (throwError) {
          throw err
        }
        return err
      }

      return data[key]
    },

    getAll: () => data,

    reset: () => {
      data = initial
    },

    clean: () => {
      data = /** @type {T} */ ({})
    },
  }
}

export default memStore

import error from '@magic/error'
import is from '@magic/types'

const libName = '@grundstein/mem-store'

export const memStore = (data = {}, throwError = false) => ({
  set: (key, val) => {
    if (is.empty(key)) {
      const err = error(`${libName}.set: key must be non-empty`, 'KEY_EMPTY')
      if (throwError) {
        throw err
      }
      return err
    }

    if (!is.string(key) && !is.number(key)) {
      const err = error(`${libName}.set: key must be a string or a number, got ${typeof key}`, 'KEY_TYPE')
      if (throwError) {
        throw err
      }
      return err
    }

    data[key] = val
    return true
  },

  get: (key = 'unset') => {
    if (key === 'unset') {
      return data
    }

    const isValidKey = is.string(key) || is.number(key)
    if (is.empty(key) || !isValidKey) {
      const err = error(`${libName}.get: key must be a string or a number, got ${typeof key}`, 'KEY_TYPE')
      if (throwError) {
        throw err
      }
      return err
    }

    return data[key]
  },

  reset: () => {
    data = {}
  },
})

export default memStore

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
  },

  // only return full cache if no key was passed to function, not if key is empty, null, undefined.
  // this SHOULD prevent get from erroring at runtime.
  get: (key = false) => {
    if (data.hasOwnProperty(key)) {
      return data[key]
    }

    if (key === false) {
      return data
    }
  },

  reset: () => {
    data = {}
  },
})

export default memStore

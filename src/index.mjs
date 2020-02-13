import error from '@magic/error'
import is from '@magic/types'

const libName = '@grundstein/mem-store'

export const memStore = (data = {}) => ({
  set: (key, val) => {
    if (is.empty(key)) {
      throw error(`${libName}.set: key must be non-empty`, 'KEY_EMPTY')
    }

    if (!is.string(key) && !is.number(key)) {
      throw error(`${libName}.set: key must be a string or a number, got ${typeof key}`, 'KEY_TYPE')
    }

    data[key] = val
  },

  // only return full cache if no key was passed to function, not if key is empty, null, undefined.
  // this SHOULD prevent get from erroring at runtime.
  get: (key = false) => (key !== false ? data[key] : data),

  reset: key => {
    data = {}
  },
})

export default memStore

import error from '@magic/error'
import is from '@magic/types'

const libName = '@grundstein/mem-store'

export const memStore = (data = {}) => ({
  set: (key, val) => {
    if (is.empty(key)) {
      throw error(`${libName}.set: empty key`, 'E_KEY_EMPTY')
    }

    if (!is.string(key)) {
      throw error(`${libName}.set: key must be a string, got ${typeof key}`, 'E_KEY_TYPE')
    }

    data[key] = val
  },

  // only return full cache if no key was passed to function, not if key was empty.
  get: (key = false) => (key !== false ? data[key] : data),

  reset: key => {
    data = {}
  },
})

export default memStore

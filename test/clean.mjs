import { is } from '@magic/test'

import memStore from '../src/index.mjs'

const store = memStore({ toReset: 'value' })

const fn = () => {
  store.clean()
  return store.get()
}

export default [{ fn, expect: is.empty, info: 'data can be reset' }]

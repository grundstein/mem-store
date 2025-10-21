import { is, tryCatch } from '@magic/test'

import memStore from '../src/index.js'

const data = { key: 'is set' }

const store = memStore(data)

const erroringStore = memStore({}, true)

export default [
  { fn: () => store.get('key'), expect: 'is set', info: 'expect data.key to be gettable' },
  {
    fn: () => store.get({ key: 'value' }),
    expect: is.error,
    info: 'return error if key is weird',
  },
  {
    fn: () => store.get(new Date()),
    expect: is.error,
    info: 'return error if key is Date',
  },
  {
    fn: () => store.get(new Error()),
    expect: is.error,
    info: 'return error if key is Error',
  },
  {
    fn: tryCatch(erroringStore.get, new Error()),
    expect: t => t.code === 'E_KEY_TYPE',
    info: 'throw error if second argument to memStore init was true',
  },
  {
    fn: () => store.get(),
    expect: is.deep.equal(data),
  },
]

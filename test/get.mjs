import { is } from '@magic/test'

import memStore from '../src/index.mjs'

const data = { key: 'is set' }

const store = memStore(data)

export default [
  { fn: () => store.get('key'), expect: 'is set', info: 'expect data to be gettable' },
  {
    fn: () => store.get({ data: 'value' }),
    expect: undefined,
    info: 'no error if key is weird',
  },
  {
    fn: () => store.get(new Date()),
    expect: undefined,
    info: 'no error if key is Date',
  },
  {
    fn: () => store.get(new Error()),
    expect: undefined,
    info: 'no error if key is Error',
  },
  {
    fn: () => store.get(false),
    expect: is.deep.equal(data),
  },
]

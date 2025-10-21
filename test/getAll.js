import { is } from '@magic/test'

import memStore from '../src/index.js'

const data = { key: 'value', another: 'data' }
const store = memStore(data)

export default [
  {
    fn: () => store.getAll(),
    expect: is.deep.equal(data),
    info: 'getAll returns all data',
  },
  {
    fn: () => {
      store.set('newKey', 'newValue')
      return store.getAll()
    },
    expect: t => t.key === 'value' && t.newKey === 'newValue',
    info: 'getAll returns updated data after set',
  },
]

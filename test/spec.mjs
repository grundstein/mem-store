import { is } from '@magic/test'

import store from '../src/index.mjs'

export default [
  { fn: () => store, expect: is.fn, info: 'store is a function' },
  { fn: store, expect: is.object, info: 'store returns an object when called' },
  { fn: () => store().set, expect: is.fn, info: 'store.put is a function' },
  { fn: () => store().get, expect: is.fn, info: 'store.get is a function' },
  { fn: () => store().reset, expect: is.fn, info: 'store.reset is a function' },
]

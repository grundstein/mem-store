import { tryCatch } from '@magic/test'

import memStore from '../src/index.mjs'

const store = memStore()

export default [
  { fn: () => store.set('setData', true), expect: store.get('setData'), info: 'data is settable' },
  {
    fn: () => store.set(235, true),
    expect: store.get('235'),
    info: 'data is settable via number and then gettable via string',
  },
  {
    fn: tryCatch(store.set, '', true),
    expect: t => t.code === 'E_KEY_EMPTY',
    info: 'empty key throws errors if second arg is true with E_KEY_EMPTY',
  },
  {
    fn: store.set(''),
    expect: t => t.code === 'E_KEY_EMPTY',
    info: 'empty key returns error with code === E_KEY_EMPTY',
  },
  {
    fn: tryCatch(store.set, [235], true),
    expect: t => t.code === 'E_KEY_TYPE',
    info: 'array as key throws errors with E_KEY_TYPE if second arg is true',
  },
  {
    fn: store.set([235]),
    expect: t => t.code === 'E_KEY_TYPE',
    info: 'array as key returns errors with E_KEY_TYPE',
  },
  {
    fn: tryCatch(store.set, { test: 235 }, true),
    expect: t => t.code === 'E_KEY_TYPE',
    info: 'object as key errors with E_KEY_TYPE',
  },

  {
    fn: store.set({ test: 235 }),
    expect: t => t.code === 'E_KEY_TYPE',
    info: 'array as key returns errors with E_KEY_TYPE',
  },
]

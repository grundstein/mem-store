import memStore from '../src/index.mjs'

const store = memStore({ data: 'is set' })

export default [
  { fn: () => store.get('data'), expect: 'is set', info: 'expect data to be gettable' },
  {
    fn: () => store.get({ data: 'value' }),
    expect: undefined,
    info: 'no to error if key is weird',
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
]

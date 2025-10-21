import memStore from '../src/index.js'

const store = memStore({ toReset: 'value' })

const fn = () => {
  store.reset()
  return store.get()
}

export default [{ fn, expect: { toReset: 'value' }, info: 'data can be reset' }]

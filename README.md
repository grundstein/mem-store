## @grundstein/mem-store

### WIP. NOT IN PRODUCTION YET!

minimal, memory only, key -> value store for nodejs.

#### installation
```bash
npm i @grundstein/mem-store
```

#### usage
```javascript
import memStore from '@grundstein/mem-store'

const data = {
  initial: 'data',
}

const store = memStore(data)

store.get('initial') // 'data'

store.set('key', 'value')

store.get('key') // 'value'

store.set('', '') // error, error.code === 'E_KEY_EMPTY'

store.set('key', '') // no error. value of store.key is ''.

store.set(undefined, [23]) // error. error.code === 'E_KEY_TYPE'

```

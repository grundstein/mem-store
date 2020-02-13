## @grundstein/mem-store

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
```

this library does NOT check for input errors

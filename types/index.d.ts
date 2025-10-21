export function memStore<T extends Record<string | number, any>>(
  initial?: T,
  throwError?: boolean,
): MemStore<T>
export default memStore
export type MemStore<T extends Record<string, any>> = {
  set: <K extends keyof T>(key: K, val: T[K]) => import('@magic/error').CustomError | true
  get: <K extends keyof T>(key: K) => T | T[K] | import('@magic/error').CustomError
  getAll: () => T
  reset: () => void
  clean: () => void
}

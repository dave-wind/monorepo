export const isClient = typeof window !== undefined

export const isServer = !isClient

export function isObject(data: Object) {
  return typeof data == 'object' && data !== null
}

export function debounce<
  Args extends Args[],
  T extends (...args: Args) => void
>(cb: T, number = 100) {
  let timer: ReturnType<typeof setTimeout> | undefined

  return function () {
    // tsconfig: noImplicitThis = false
    const self = this
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
    timer = setTimeout(function () {
      cb.apply(self, arguments)
    }, number)
  }
}

export function throttle(fn: () => {}, delay = 200) {
  let now: number,
    last: number,
    timer: ReturnType<typeof setTimeout> | undefined,
    self = null

  const execute = function () {
    fn.apply(self, arguments)
    last = now
  }

  return function () {
    self = this
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
    now = new Date().getTime()
    if (last) {
      const diff = delay - (now - last)
      if (diff > 0) {
        timer = setTimeout(function () {
          execute()
        }, diff)
      } else {
        execute()
      }
    } else {
      execute()
    }
  }
}

export function sum<Args extends Number[]>(...args: any[]) {
  let prevArgs = args
  const _sum = function (...newArgs: Args) {
    if (newArgs.length == 0) {
      return prevArgs.reduce((a, b) => Number(a) + Number(b), 0)
    } else {
      prevArgs = [...prevArgs, ...newArgs]
      return _sum
    }
  }
  return _sum
}

export function def<T>(data: Object, key: string, value: T): void {
  Object.defineProperty(data, key, {
    enumerable: false,
    writable: false,
    value
  })
}

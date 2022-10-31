### @neopark/react

> packages monorepo common react hooks and components

#### Install

```js
 npm install @neopark/react -S
```

#### Use components

```jsx
// use components
import { Button } from '@neopark/react/components'

function Page() {
  return (
    <div>
      <Button title="neopark"></Button>
    </div>
  )
}
```

#### Use hooks

```js
import { useDidUpdateEffect } from '@neopark/react/hooks'

useDidUpdateEffect(() => {
  console.log('to do')
}, [])
```

### Use Brower

```js
<script src="xxxx.react.16.9.0.js"></script>
<script src="xxxx.react-dom.16.9.0.js"></script>
<script src="xxxx.neopark-react.js"></script>
<script>
  const { useDidUpdateEffect } =  window['neopark-react']
  // to do
</script>

```

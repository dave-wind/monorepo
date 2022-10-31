<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ client ? 'yes' : 'NO' }}
  </div>
</template>

<script>
import { isClient } from '@neopark/common/utils'
export default {
  components: {},
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      client: false
    }
  },
  mounted() {
    this.client = isClient
    console.log('isClient---', isClient)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

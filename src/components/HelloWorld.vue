<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>if you find question,Please contact me
      <span>QQ:983171730</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloEuming',
  data () {
    return {
      msg: 'Welcome to Euming Vue.js App !'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
p{
  color: #ccc;
}
</style>

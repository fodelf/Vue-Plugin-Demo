<!--
 * @Description: Vue插件的测试
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-10-19 17:35:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-19 17:59:09
 -->
<template>
  <div>
    {{msg}}
    这是一个vue组件
  </div>
</template>
<script>
export default {
  name: 'text-test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
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

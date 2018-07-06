<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  // @import './style/element-ui';
	// @import './font-awesome/css/font-awesome.min.css';
	@import './style/common';
</style>

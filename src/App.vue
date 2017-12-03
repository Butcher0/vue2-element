<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
    font-size: 14px;
    height: 100%;
    width: 100%;
    position: absolute;
}

body {
  padding: 0;
  margin: 0;
}

</style>

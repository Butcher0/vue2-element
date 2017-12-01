<template>
  <div class="wapper">
    <aside class="side">
      <el-menu default-active="1" class="el-menu" :collapse="isCollapse">
        <el-menu-item index="1">
            <span slot="title">Element-UI</span>
        </el-menu-item>
        <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Nav One</span>
        </template>
        </el-submenu>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">Nav Two</span>
        </el-menu-item>
      </el-menu>
    </aside>
    <div class="content">
      <div class="header"><i class="fa fa-align-justify tools" @click.prevent="collapsed"></i></div>
      <section class="main">main</section>
    </div>
  </div> 
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    collapsed() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.main {
  float: left;
}
.side {
  float: left;
  top: 0;
  height: 100%;
}
.header {
  height: 60px;
  line-height: 60px;
  color: #409eff;
}
.header .logo {
  font-size: 22px;
  padding-left: 20px;
  font-weight: bold;
  border-right: 1px solid #d8dce5;
}
.header .info {
  width: 100px;
  float: right;
}
.tools {
  padding-left: 5px;
}
</style>


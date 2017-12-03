<template>
  <div class="wrapper">
    <aside class="side">
      <el-menu default-active="1" class="el-menu" :collapse="isCollapse">
        <el-menu-item index="1" class="logo">
            <i class="el-icon-menu"></i>
            <span slot="title" class="thema">Element</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Nav One</span>
          </template>
          <el-menu-item index="2-1">
              <i class="el-icon-setting"></i>
              <span slot="title">Option One</span>
          </el-menu-item>
          <el-menu-item index="2-2">
              <i class="el-icon-setting"></i>
              <span slot="title">Option One</span>
          </el-menu-item>
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
    <div class="clear-fix"></div>
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
.wrapper {
  width: 100%;
  height: 100%;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.main {
}
.side {
    float: left;
}
.header {
  height: 56px;
  line-height: 56px;
  color: #FFF;
  background-color: #409EFF;
}
.logo{
  font-size: 22px;
  font-weight: bold;
  background-color: #409EFF;
  color: #FFF;
}
.thema {

}
.content {

}
.header .info {
  width: 100px;
  float: right;
}
.tools {
  padding-left: 15px;
}
.tools:hover {
  color:#bbb;  
}
.clear-fix {
  clear: both;
}
</style>


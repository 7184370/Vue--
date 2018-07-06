<template>
    <div>
        <el-container>      
            <el-menu router v-bind:style="{ height: clientHeight + 'px' }" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <div class="manage" v-show="isopen">
                    <p>后台管理系统</p>
                </div>
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" >游戏一</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="pageone">选项1</el-menu-item>
                <el-menu-item index="pagetwo">选项2</el-menu-item>
                </el-menu-item-group>
                <!-- <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu> -->
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" >游戏二</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="pageone">选项1</el-menu-item>
                <el-menu-item index="pagetwo">选项2</el-menu-item>
                </el-menu-item-group>
                <!-- <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu> -->
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">游戏三</span>
            </el-menu-item>
            <el-menu-item index="supermanage">
                <i class="el-icon-document"></i>
                <span slot="title">超级管理员</span>
            </el-menu-item>
            </el-menu>   
        <el-container>
            <el-header class="top">
                <el-row type="flex" class="row-bg">
                     <el-col :span="1">
                            <el-switch
                            v-model="isCollapse">
                            </el-switch>
                    </el-col>
                    <router-link to="/Login">
                     <el-col :span="24">
                        <i class="el-icon-back">退出</i>                 
                    </el-col>
                    </router-link>
                   
                </el-row>
            </el-header>
            <el-main class="content">
                <keep-alive>
				    <router-view></router-view>
				</keep-alive>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .top{
      background: #EFF2F7;
  }
  .content{
      background: white;
  }
.el-radio-button__inner{
    font-size:0;   
}
.manage{
    height: 60px;
    font-size: 1.2rem;
    color: olivedrab;
    line-height: 60px;  
}
.el-icon-back{
    position: absolute;
    right: 2%;
    font-size: 20px;
    line-height: 60px;
    cursor: pointer;
    color:orangered;
}
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        clientHeight:'',
        isopen: true
      };
    },
    mounted (){
        this.clientHeight =   `${document.documentElement.clientHeight}` 
        console.log(this.clientHeight)
    },
    watch: {      
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col class="logo" :span="8" :style="{width:isCollapse?'64px':'240px'}">
          <strong>{{isCollapse?'饿':'饿了么管理系统'}}</strong>
        </el-col>
        <el-col class="info" :span="8">
          <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" @click="isCollapse=!isCollapse"></i>
        </el-col>
        <el-col :span="8" class="adminInfo">
          <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            <span>{{$store.state.admin.adminName}}</span> <img src="./assets/logo.jpg" alt="">
                        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="$store.commit('OUT_LOGIN')">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside  :style="{width:isCollapse?'auto':'240px'}">

        <el-menu :collapse-transition="false" default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">管理员设置</span>
            </template>
            <el-menu-item index="1-1" @click="$router.push('/adminLog')">管理员登陆日志</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/shopTypeList')">商品类别列表</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/shopList')">商品列表</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
<<<<<<< HEAD
              <span slot="title">广告管理</span>
            </template>
            <el-menu-item index="3-1" @click="$router.push('/advTypeList')">广告类别列表</el-menu-item>
            <el-menu-item index="3-2" @click="$router.push('/advList')">广告列表</el-menu-item>
=======
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item index="3-1" @click="$router.push('/userReg')">用户登陆日志</el-menu-item>
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
    export default {
        data() {
            return {
                // 是否折叠
                isCollapse: false
            }
        },
        methods:{
            fn(){
                console.log(121212);
            }
        }
    }
</script>

<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 1000px;
  }
  .el-header {
    padding: 0px!important;
    background: #409EFF;
    color: #ffffff;
<<<<<<< HEAD
  }
  .info{
    font-size:30px;
    line-height: 60px;
  }
  .logo {
    text-align:center;
    width: 240px;
    font-size: 25px;
    line-height: 60px;
    border-right: 1px solid rgba(238, 241, 146, 0.3);
  }
  .adminInfo {
    float: right;
    text-align: right;
    padding-right: 20px;
    line-height: 60px;
  }
  .el-dropdown-link span {
    color: #fff;
  }

  .el-dropdown-link img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
=======
    .info{
      font-size:30px;
      line-height: 60px;
    }
    .logo {
      text-align:center;
      width: 240px;
      font-size: 25px;
      line-height: 60px;
      border-right: 1px solid rgba(238, 241, 146, 0.3);
    }
    .adminInfo {
      float: right;
      text-align: right;
      padding-right: 20px;
      line-height: 60px;
      .el-dropdown-link {
        span {
          color: #fff;
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
    }
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
  }
  .toolbar {
    background:#f4f4f4;
    padding:10px;
    marign:20px 0!important;
  }
  .el-table th,.el-table td{
    text-align:center!important;
  }
  .toolbar .el-form-item{
    margin-bottom:0px;
  }
</style>


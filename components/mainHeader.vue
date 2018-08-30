<template>
    <div id="header" class="header navbar navbar-inverse navbar-fixed-top">
        <!-- begin container-fluid -->
        <div class="container-fluid">
            <div class="navbar-header">
                <a href="javascript:;" class="">
                    <img class="logo" src="/static/images/logo.png"/>
                    <span class="logo-title">车队云管家</span>
                </a>
            </div>
            <!-- begin header navigation right -->
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown navbar-user">
                    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <span class="hidden-xs">{{userinfo.name}}</span><b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu animated fadeInLeft">
                        <li class="arrow"></li>
                        <li>
                            <router-link to="/common/system/UserSetting">修改密码</router-link>
                        </li>
                        <li class="divider"></li>
                        <li><a href="javascript:void(0)" v-on:click="logout">签退</a></li>
                    </ul>
                </li>
            </ul>
            <!-- end header navigation right -->
        </div>
        <!-- end container-fluid -->
    </div>
</template>
<script>
    let common = require('commonFunc');
    export default {
        data: function () {
            return {
                userinfo: common.getStoreData('userinfo')
            }
        },
        name: 'mainHeader',
        methods: {
            logout: async function (event) {
                common.clearStoreData();
                this.$http.post('/api/signout', {});
                this.$router.push({
                    path: '/login'
                });
            }
        }
    }
</script>
<style scoped>
    .logo {
        zoom: 0.05;
        margin-top: -220px;
    }
    .logo-title {
        font-size: 20px;
        display: inline-block;
        margin-top: 15px;
    }
</style>

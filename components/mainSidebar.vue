<template>
    <div>
        <!-- begin #sidebar -->
        <div id="sidebar" class="sidebar">
            <!-- begin sidebar scrollbar -->
            <div data-scrollbar="true" data-height="100%">
                <!-- begin sidebar user -->
                <ul class="nav">
                    <li class="nav-profile">
                        <!--<div class="image">-->
                        <!--<a href="javascript:;"><img :src="userinfo.avatar" alt="" /></a>-->
                        <!--</div>-->
                        <div class="info">
                            {{userinfo.domain_name}}
                            <small>{{userinfo.name}}</small>
                        </div>
                    </li>
                </ul>
                <!-- end sidebar user -->
                <!-- begin sidebar nav -->
                <ul class="nav">
                    <li class="nav-header">主菜单</li>
                    <template v-for="(item, index) in userinfo.menulist">
                        <template v-if="item.node_type === '00'">
                            <li class="has-sub" @click="menuClick(index)" :class="[{active: (index == curIndex)}]">
                                <a href="javascript:;">
                                    <b class="caret pull-right"></b>
                                    <i :class="'fa ' + item.menu_icon"></i>
                                    <span>{{ item.menu_name }}</span>
                                    <el-badge v-model="badgeNum" style="position: absolute; top:15px; right: 40px" v-show="item.menu_name === `基础信息管理` && isShowBadge && badgeNum > 0"/>
                                </a>
                                <ul class="sub-menu">
                                    <template v-for="(sItem, subIndex) in item.sub_menu">
                                        <template v-if="sItem.node_type === '00'">
                                            <li class="has-sub">
                                                <a href="javascript:;">
                                                    <b class="caret pull-right"></b>
                                                    {{ sItem.menu_name }}
                                                </a>
                                                <ul class="sub-menu">
                                                    <template v-for="ssItem in sItem.sub_menu">
                                                        <li>
                                                            <router-link :to="ssItem.menu_path"> {{ ssItem.menu_name }}
                                                            </router-link>
                                                        </li>
                                                    </template>
                                                </ul>
                                            </li>
                                        </template>
                                        <template v-if="sItem.node_type === '01' ">
                                            <li @click="subMenuClick(subIndex)" :class="[{active: (subIndex == subCurIndex && lastIndex == curIndex)}]">
                                                <router-link :to="sItem.menu_path"> {{ sItem.menu_name }}
                                                    <el-badge v-model="badgeNum" style="position: absolute; top:10px; right: 40px" v-show="sItem.menu_name === `车辆管理` && badgeNum > 0"/>
                                                </router-link>
                                            </li>
                                        </template>
                                    </template>
                                </ul>
                            </li>
                        </template>
                        <template v-if="item.node_type === '01'">
                            <li>
                                <router-link :to="item.menu_path">
                                    <i v-bind:class="'fa ' + item.menu_icon "></i> <span>{{ item.menu_name }}</span>
                                </router-link>
                            </li>
                        </template>
                    </template>
                    <!-- begin sidebar minify button -->
                    <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i
                            class="fa fa-angle-double-left"></i></a></li>
                    <!-- end sidebar minify button -->
                </ul>
                <!-- end sidebar nav -->
            </div>
            <!-- end sidebar scrollbar -->
        </div>
        <div class="sidebar-bg"></div>
        <!-- end #sidebar -->
    </div>
</template>
<script>
    const common = require('commonFunc');
    const apiUrl = '/api/core/basic/Vehicle?method=';
    import bus from '../../../assets/js/eventBus';

    export default {
        name: 'mainMenu',
        data: function () {
            return {
                userinfo: common.getStoreData('userinfo'),
                divHeight: '',
                badgeNum: 0,
                lastIndex: 0,
                curIndex: 0,
                subCurIndex: 0
            }
        },
        mounted: function () {
            let _self = this;

            function getBadgeNum() {
                _self.$http.post(apiUrl + 'qei', {}).then((response) => {
                    let returnData = response.data.info;
                    if (returnData.length > 0) {
                        _self.badgeNum = returnData[0].total;
                    }
                }, (response) => {
                    common.dealErrorCommon(_self, response)
                })
            }

            bus.$on('badgeNumChanged',function (msg) {
                getBadgeNum();
            });

            getBadgeNum();
        },
        methods: {
            isShowBadge: function() {
                let _self = this;
                let isAuth = false;
                for (let m of _self.userinfo) {
                    if (m.menu_name === "基础信息管理") {
                        for (let subM of m.sub_menu) {
                            if (subM.menu_name === "车辆管理") {
                                isAuth = true;
                            }
                        }
                    }
                }
                return isAuth;
            },
            menuClick: function (index) {
                this.curIndex = index;
            },
            subMenuClick: function (index) {
                this.subCurIndex = index;
                this.lastIndex = this.curIndex;
            }

        }
    }
</script>
<style scoped>
</style>

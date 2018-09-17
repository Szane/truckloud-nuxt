<template>
    <div class="page-container">
        <div>
            <el-carousel :interval="4000" arrow="always" height="224px" indicator-position="none">
                <el-carousel-item>
                    <div class="banner-first-container">
                        <div>
                            <p class="desc">SAAS Based Transportation Management System</p>
                            <p class="desc">for Trucking Company in Container Shipping</p>
                            <p class="desc1">车队云管家，深度嵌入车队日常业务</p>
                            <p class="desc2">企业级TMS云服务，集装箱陆运车队的管理神器</p>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-second-container">
                        <div>
                            <p class="desc1">物联网（IoT) 车辆跟踪，运输安全，</p>
                            <p class="desc1">货物安全。</p>
                            <p class="desc2">Internet of things (IoT) vehicle tracking,</p>
                            <p class="desc2">transportation safety and cargo safety.</p>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-third-container">
                        <div>
                            <p class="desc1">化繁为简，司机只需用微信接单。</p>
                            <p class="desc2">Complex tasks turn simple.  A driver only needs</p>
                            <p class="desc2">to use Wechat to accept orders.</p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="search" class="search-container">
            <div class="search-title-container">
                <p class="search-title">货代或工厂: 用SO号查询运单状态</p>
                <p class="search-des">Freight forwarders or Factories: Search shipment by SO number</p>
            </div>
            <div class="input-group">
                <input class="search-input" type="text" placeholder="请输入SO号" v-model="order_booking_no">
                <button class="search-button" @click="searchSoCode">
                    <i class="fa fa-search fa-x"></i>
                </button>
            </div>
        </div>
        <div id="center" class="center-container">
            <div class="container-title">
                <img src="/images/homepage/mobile/m_center_title.png" alt="center title image">
            </div>
            <div class="center-body">
                <div>
                    <img class="icon" src="/images/homepage/center_icon.jpg" alt="center icon">
                </div>
                <div class="desc">
                    <div class="title">
                        <span >产品简介&适用人群</span>
                    </div>
                    <hr>
                    <div class="center-content">
                        <p>车队云管家是一套基于云的TMS（Transportation Management System）系统，它能
                            够帮助车企有效管理车辆、司机、客户、订单、账单信息，实现订单分配智能化，运输过
                            程可视化，财务对账电子化，服务业绩透明化。车队云管家专有的大数据算法将大幅提高
                            车企的运营管理效率，不但对自有车辆提供了绩效动力，而且还吸引挂靠车辆上平台找单
                            做，在不增加重资产的前提下，扩大了车企的业务规模。
                        </p>
                        <p style="margin-top: 10px">适用于依托港口，以陆运进出口业务为主营范围的具有一定运力规模的车队。</p>
                    </div>
                </div>
            </div>
            <div class="center-bottom row">
                <div class="container-title row">
                    <img src="/images/homepage/mobile/m_center_function.png" alt="center function">
                </div>
                <div class="center-function row">
                    <div class="row">
                        <div class="list-container col-sm-4 col-xs-4">
                            <img class="icon" src="/images/homepage/center_function_order.png" alt="">
                            <div class="desc-list">
                                <ul>
                                    <li>订单管理</li>
                                    <li>调度分配</li>
                                    <li>智能匹配</li>
                                </ul>
                            </div>
                        </div>
                        <div class="list-container col-sm-4 col-xs-4">
                            <img class="icon" src="/images/homepage/center_function_location.png" alt="">
                            <div class="desc-list">
                                <ul>
                                    <li>行车管理</li>
                                    <li>卫星定位跟踪</li>
                                    <li>电子围栏</li>
                                </ul>
                            </div>
                        </div>
                        <div class="list-container col-sm-4 col-xs-4">
                            <img class="icon" src="/images/homepage/center_function_setting.png" alt="">
                            <div class="desc-list">
                                <ul>
                                    <li>车辆管理</li>
                                    <li>人员管理</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="list-container col-sm-4 col-xs-4">
                            <img class="icon" src="/images/homepage/center_function_wechat.png" alt="">
                            <div class="desc-list">
                                <ul>
                                    <li>微信端接单</li>
                                    <li>消息推送</li>
                                </ul>
                            </div>
                        </div>
                        <div class="list-container col-sm-4 col-xs-4">
                            <img class="icon" src="/images/homepage/center_function_category.png" alt="">
                            <div class="desc-list">
                                <ul>
                                    <li>系统管理</li>
                                    <li>财务对账</li>
                                    <li>绩效考核</li>
                                    <li>大数据分析</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scene-container">
                <div class="container-title">
                    <img class="scene-title" src="/images/homepage/scene.png" alt="scene title">
                </div>
                <el-carousel :interval="4000" arrow="always" height="200px" indicator-position="none" style="margin-top: -25px">
                    <el-carousel-item class="row">
                        <div class="swiper-content-left col-sm-6 col-xs-12">
                            <img src="/images/homepage/scene_icon1.png" alt="">
                            <div>
                                <p>让车队信息管理脱离传统的手动记录和简单的</p>
                                <p>电子表格，通过互联网实时同步必要的车队</p>
                                <p>基本信息，更具时效性和精准性。</p>
                            </div>
                        </div>
                        <div class="swiper-content-left col-sm-6 col-xs-12">
                            <img src="/images/homepage/scene_icon2.png" alt="">
                            <div>
                                <p>让调度从每天繁重的电话沟通中解脱出来</p>
                                <p>只需要在电脑屏幕前就可以轻松完成运</p>
                                <p>输任务的分配和资源的调配。</p>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="row">
                        <div class="swiper-content-left col-sm-6 col-xs-12">
                            <img src="/images/homepage/scene_icon3.png" alt="">
                            <div>
                                <p>司机通过手机微信端绑定账号，并通过关注车</p>
                                <p>队服务号来完成运输任务及绩效考核，最大</p>
                                <p>限度的降低了司机使用难度以及培训成本。</p>
                            </div>
                        </div>
                        <div class="swiper-content-left col-sm-6 col-xs-12">
                            <img src="/images/homepage/scene_icon4.png" alt="">
                            <div>
                                <p>司机通过手机微信端主动抢单并参与运输任</p>
                                <p>务，减少了调度分配的工作量，提高了</p>
                                <p>车队的工作效率及司机的主观能动性。</p>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="row">
                        <div class="swiper-content-left col-sm-6 col-xs-12" style="margin-left: 15px">
                            <img src="/images/homepage/scene_icon5.png" alt="">
                            <div>
                                <p>客户只要通过订单号就能对运单的运输节点对</p>
                                <p>运输车辆的实时位置进行查询，避免了客户</p>
                                <p>对订单进展一无所知的尴尬局面。</p>
                            </div>
                        </div>
                        <div class="swiper-content-left col-sm-6 col-xs-12" style="margin-left: 15px">
                            <img src="/images/homepage/scene_icon6.png" alt="">
                            <div>
                                <p>通过车辆轨迹，实时位置以及电子围栏功能等技术，
                                    可以通过微信提醒和短信功能给司机推送重要节点
                                    的提示信息，使司机的工作更规范化。</p>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="row">
                        <div class="swiper-content-left col-sm-6 col-xs-12">
                            <img src="/images/homepage/scene_icon7.png" alt="">
                            <div>
                                <p>公司与客户对账，公司与司机对账，通过筛选</p>
                                <p>条件的控制，使账单更有针对性。</p>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div id="advantage" class="advantage-container row">
            <div class="container-title">
                <img class="title-size" src="/images/homepage/advantage.png" alt="advantage">
            </div>
            <div class="advantage-list">
                <div class="advantage-block col-sm-4 col-xs-4">
                    <div class="container-title">
                        <img class="advantage-icon-size" src="/images/homepage/advantage_network.png" alt="">
                    </div>
                    <div class="desc">
                        <p>开通后<b>立即</b>可以上网使用</p>
                        <p><b>不需要</b>购买服务器</p>
                        <p><b>不需要</b>安装任何软件</p>
                    </div>
                </div>
                <div class="advantage-block col-sm-4 col-xs-4">
                    <div class="container-title">
                        <img class="advantage-icon-size" src="/images/homepage/advantage_money.png" alt="">
                    </div>
                    <div class="desc">
                        <p>花<b>很少的钱</b>就可以实现<b>互联网</b></p>
                        <p><b>模式</b>的管理升级</p>
                    </div>
                </div>
                <div class="advantage-block col-sm-4 col-xs-4">
                    <div class="container-title">
                        <img class="advantage-icon-size" src="/images/homepage/advantage_wechat.png" alt="">
                    </div>
                    <div class="desc">
                        <p><b>不需要</b>懂IT，界面简单易懂</p>
                        <p><b>无需</b>培训</p>
                        <p>司机只需要会用<b>微信</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="free" class="free-container row">
            <div class="container-title">
                <img class="free-title-size" src="/images/homepage/free.png" alt="free title">
            </div>
            <div class="free-contact">
                <div class="title">
                    <span>留言后我们会尽快与您取得联系</span>
                </div>
                <hr>
                <div class="row-input">
                    <span style="color: red">*</span>
                    <span>公司名称</span>
                    <input type="text" placeholder="请填写您的公司名称"
                           v-model="submitData.contact_log_org_name">
                </div>
                <div class="row-input">
                    <span style="color: red">*</span>
                    <span>所在城市</span>
                    <input type="text" placeholder="请填写您的所在城市"
                           v-model="submitData.contact_log_city_name">
                </div>
                <div class="row-input">
                    <span style="color: red">*</span>
                    <span>您的姓名</span>
                    <input type="text" placeholder="请填写您的姓名"
                           v-model="submitData.contact_log_person_name">
                </div>
                <div class="row-input">
                    <span style="color: red">*</span>
                    <span>手机号码</span>
                    <input type="text" placeholder="请填写您的手机号码"
                           v-model="submitData.contact_log_phone">
                </div>
                <div class="row-input">
                    <span style="margin-left: 10px">联系邮箱</span>
                    <input type="text" placeholder="请填写您的邮箱"
                           v-model="submitData.contact_log_email">
                </div>
                <div class="row-input">
                    <span style="margin-left: 10px">备注信息</span>
                    <input type="text" v-model="submitData.contact_log_remark">
                </div>
                <div style="text-align: center">
                    <button type="button" @click="submitContact">马上提交</button>
                </div>
            </div>
        </div>
        <div id="about" class="footer-container row">
            <div class="company-wechat col-sm-3 col-xs-3">
                <div>
                    <img class="company-wechat-icon" src="/images/homepage/about_wechat_1.png" alt="">
                </div>
                <div class="wechat">
                    <span>微信公众号</span>
                </div>
            </div>
            <div class="company-container col-sm-9 col-xs-9">
                <div>
                    <span>公司地址: 辽宁省大连市高新园区晟辉大厦605室</span>
                </div>
                <div class="info">
                    <span>公司主页: http://www.missionpublic.com/cn/</span>
                </div>
                <div class="info">
                    <span>客服邮箱: info@missionpublic.com</span>
                </div>
                <div class="info">
                    <span>咨询电话: 400-186-8893</span>
                </div>
            </div>
        </div>
        <div class="copy-right">
            <p>© 2018 美森博多利（大连）科技有限公司</p>
            <p>版权所有 辽ICP备14014383号-7</p>
        </div>
        <div class="modal fade" id="soSearchModal" data-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">实时位置查询</h4>
                    </div>
                    <div class="modal-body">
                        <div v-show="orderList.length>0">
                            <table id="orderTable"></table>
                        </div>
                        <div class="panel panel-inverse" v-show="transNode.length>0 && containerPhotoUrl && sealPhotoUrl"
                             style="margin-top: 10px">
                            <div class="panel-heading">
                                <h4 class="panel-title">箱号铅封号</h4>
                            </div>
                            <div class="panel-body">
                                <div class="image">
                                    <div class="row">
                                        <img class="photo-style" :src="containerPhotoUrl">
                                        <img class="photo-style" :src="sealPhotoUrl">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" panel panel-inverse" v-show="transNode.length>0" style="margin-top: -20px">
                            <div class="panel-heading">
                                <div class="panel-heading-btn">
                                    <button class="btn btn-danger btn-xs" v-on:click="clear">关闭</button>
                                </div>
                                <h4 class="panel-title">运输节点信息</h4>
                            </div>
                            <div class="row">
                                <div class="panel-body">
                                    <div class="trans-node-container">
                                        <div class="row line-top" v-for="(node, index) in transNode" v-bind:key="node.trans_node_id">
                                            <span>{{node.trans_node_type | tansNodeFilter}}</span>
                                            <span class="left-space">{{formatDate(node.created_at)}}</span>
                                            <span class="left-space">{{node.trans_node_address}}</span>
                                            <div class="vertical-line" v-show="index < transNode.length - 1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-inverse" v-show="transNode.length>0 && orderState != 90" style="margin-top: -10px">
                            <div class="panel-heading">
                                <div class="panel-heading-btn">
                                </div>
                                <h4 class="panel-title">实时位置显示</h4>
                            </div>
                            <div class="row">
                                <div class="panel-body">
                                    <div id="mapContainer" style="height: 500px;width: 100%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const common = require('assets/js/common')
const apiUrl = '/api/log/ContactLog?method=';
const transNodeApiUrl = '/api/guest/TransNode?method=';
import request from '~/plugins/request'

export default {
    data: function() {
        return {
            pagePara: '',
            submitData: {},
            order_booking_no: '',
            orderList: [],
            transNode: [],
            orderState: null,
            containerPhotoUrl: null,
            sealPhotoUrl: null,
            images: [
                '/images/homepage/banner_1.jpg'
            ],
            tabIndex: 0
        }
    },
    name: 'HomepageMobileControl',
    filters: {
        tansNodeFilter: function (value) {
            if (value == 1) {
                return '开始运输';
            } else if (value == 2) {
                return '提箱';
            } else if (value == 3) {
                return '到厂';
            } else if (value == 4) {
                return '离厂';
            } else if (value == 5) {
                return '还箱';
            }
        }
    },
    mounted: function() {
        let _self = this;
        let $table = $('#orderTable');
        window.tableEvents = {
            'click .detail': function (e, value, row, index) {
                _self.containerAbstract = null;
                _self.sealAbstract = null;
                _self.orderState = row.order_state;
                _self.getNodeInfo(row.order_id);
                if (row.order_container_photo_id) {
                    _self.containerPhotoUrl = '/api/core/file/UploadFile?method=gf&type=2&order_id=' + row.order_id;
                }
                if (row.order_seal_photo_id) {
                    _self.sealPhotoUrl = '/api/core/file/UploadFile?method=gf&type=3&order_id=' + row.order_id;
                }
            }
        };

        function operateFormatter(value, row, index) {
            return [
                '<a class="btn btn-info btn-xs m-r-5 detail">查看详情</a>'
            ].join('')
        }

        function stateFormatter(value, row, index) {
            for (let state of _self.pagePara.orderStateSet) {
                if (value == 20 || value == 21 || value == 22 ||
                    value == 24 || value == 26 || value == 27 ||
                    value == 28) {
                    return '已处理';
                } else if (value == 80 || value == 81 || value == 88) {
                    return '已取消';
                } else {
                    if (value == state.id) {
                        return state.text;
                    }
                }
            }
        }

        function initTable() {
            $table.bootstrapTable({
                columns: [
                    common.BTRowFormatWithIndex('NO.'),
                    common.BTRowFormat('order_so_code', 'SO号'),
                    common.BTRowFormat('order_container_code', '柜号'),
                    common.BTRowFormat('order_seal_code', '封条号'),
                    common.BTRowFormat('order_container_weight', '柜重'),
                    common.BTRowFormat('order_vehicle_num', '车牌号'),
                    common.BTRowFormat('order_taker_name', '司机姓名'),
                    common.BTRowFormat('phone', '司机电话'),
                    common.BTRowFormat('order_customer_name', '客户名称'),
                    common.BTRowFormat('order_factory_name', '工厂名称'),
                    common.BTRowFormat('order_factory_address', '工厂地址'),
                    common.BTRowFormatWithFormatter('order_state', '订单状态', stateFormatter),
                    common.actFormatter('operate', operateFormatter, tableEvents)
                ],
                idField: 'order_id',
                uniqueId: 'order_id',
                striped: true,
                locale: 'zh-CN'
            });
            common.changeTableClass($table)
        }

        function getInit() {
          let getInit = async () => {
            let response = await request.post(transNodeApiUrl + 'i', {});
            _self.pagePara = response.data.info;
            initTable();
          };
        }

        function initPage() {
            //let page horizontally
            window.scrollTo((document.body.scrollWidth-document.body.offsetWidth)/2,0);
            getInit();
            common.initImageViewer();
        }

        initPage()

        $("#li-home").on("click",function(){
            _self.tabIndex = 0;
        });
        $("#li-search").on("click",function(){
            _self.tabIndex = 1;
        });
        $("#li-center").on("click",function(){
            _self.tabIndex = 2;
        });
        $("#li-advantage").on("click",function(){
            _self.tabIndex = 3;
        });
        $("#li-free").on("click",function(){
            _self.tabIndex = 4;
        });
        $("#li-about").on("click",function(){
            _self.tabIndex = 5;
        });
        $("#li-article").on("click",function(){
            _self.tabIndex = 6;
        });
    },
    methods: {
        initSwiper: function () {
            let swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationType: 'bullets',
                paginationClickable: true,
                autoplay: 5000,
                speed:3500,
                grabCursor: true,
                autoplayDisableOnInteraction: false
            });

            let sceneSwiper = new Swiper('.scene-swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.scene-swiper-pagination',
                paginationType: 'bullets',
                paginationClickable: true,
                autoplay: 5000,
                speed:3500,
                grabCursor: true,
                autoplayDisableOnInteraction: false
            });
        },
        submitContact: async function () {
        let _self = this;
        if (!_self.submitData.contact_log_org_name) {
          this.$message({
            message: '请填写您的公司名称',
            type: 'warning'
          });
          return;
        } else if (!_self.submitData.contact_log_city_name) {
          this.$message({
            message: '请填写您的所在城市',
            type: 'warning'
          });
          return;
        } else if (!_self.submitData.contact_log_person_name) {
          this.$message({
            message: '请填写您的姓名',
            type: 'warning'
          });
          return;

        } else if (!_self.submitData.contact_log_phone) {
          this.$message({
            message: '请填写您的手机号码',
            type: 'warning'
          });
          return;
        }
        let response = await request.post(apiUrl + 'c', _self.submitData);
        $('#freeTrialModal').modal('hide');
        if (response.data.errno === 0) {
          this.$alert('联系信息已提交！', '提示', {
            confirmButtonText: '确定'
          });
          _self.submitData = {};
        } else {
//            common.dealWarningCommon(response.data.msg);
        }
      },
        gotoLogin: function () {
            window.open('http://demo.truckloud.com');
        },
        gotoArticle: function () {
            let _self = this;
            _self.$router.push({
                path: '/homepage/ArticleControl',
                query: {}
            })
        },
        showFreeTrial: function () {
            $('#freeTrialModal').modal('show');
        },
        goTop: function () {
            window.scrollTo(0,0);
        },
        formatDate: function (date) {
            return common.dateFormat(date, 'min');
        },
        clear: function () {
            let _self = this;
            _self.transNode = [];
        },
      searchSoCode: async function () {
        let _self = this;
        let soCode = _self.order_booking_no;
        if (!soCode) {
          this.$message({
            message: '请输入SO号！',
            type: 'warning'
          });
          return;
        }
        //获取so号的订单
        let params = {
          order_so_code: soCode
        };
        let response = await request.post(transNodeApiUrl + 'qo', params);
        _self.orderList = response.data.info;
        _self.transNode = [];
        $('#orderTable').bootstrapTable('load', _self.orderList);
        if (_self.orderList.length <= 0) {
          this.$message({
            message: '查询的SO号无结果!',
            type: 'warning'
          });
        } else {
          $('#soSearchModal').modal('show');
        }
      },
      getNodeInfo: async function (orderId) {
        let _self = this;

        let params = {
          order_id: orderId
        };

        //获取运输节点
        let response1 = await request.post(transNodeApiUrl + 'gq', params);
        _self.transNode = response1.data.info;

        if (_self.orderState == 90) {//已完成订单不显示司机位置
          return;
        }

        //获取经纬度
        let response = await request.post(transNodeApiUrl + 'gq', params);
        let lng = response.data.info.lng;
        let lat = response.data.info.lat;

        let map = new AMap.Map('mapContainer', {
          resizeEnable: true,
          center: [lng, lat],
          zoom: 17
        });

        AMap.plugin('AMap.ToolBar', function () {
          let toolbar = new AMap.ToolBar();
          map.addControl(toolbar)
        });

        let marker = new AMap.Marker({
          map: map,
          position: [lng, lat],
          icon: "/images/location/truck.png",
          offset: new AMap.Pixel(-36, -12),
          autoRotation: true
        });

        let geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: "all"
        });

        geocoder.getAddress([lng, lat], function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            let address = result.regeocode.formattedAddress;
            let content = [];
            content.push("地理位置: " + address);
            content.push("经纬度:（" + lng.toFixed(4) + ", " + lat.toFixed(4) + "）");
            let infoWindow = new AMap.InfoWindow({
              content: content.join("<br/>"),
              offset: {x: 0, y: -5}
            });
            infoWindow.open(map, marker.getPosition());
            marker.on("mouseover", function (e) {
              infoWindow.open(map, marker.getPosition());
            });
          }
        });

        map.setFitView();

      },
        talkWithQQ: function () {
            window.open("http://wpa.qq.com/msgrd?v=3&uin=3444745254&site=qq&menu=yes","_blank");
        }
    }
}
</script>
<style scoped>
    .page-container {
        overflow: hidden;
        background: white;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: rgba(220,38,38,0);
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: rgba(220,38,38,0);
    }
    .banner-first-container {
        padding-top: 70px;
        padding-left: 50px;
        height: 100%;
        width: 100%;
        background-image: url(/images/homepage/mobile/m_banner_bg_1.png);
        background-size:100% 100%
    }
    .banner-first-container .desc {
        font-size: 14px;
        color: #215cb2;
        margin-bottom: -4px;
    }
    .banner-first-container .desc1 {
        font-size: 14px;
        color: #215cb2;
        margin-top: 5px;
    }
    .banner-first-container .desc1 {
        font-size: 12px;
        color: #215cb2;
        margin-top: 10px;
        margin-bottom: 0px;
    }
    .banner-first-container .desc2 {
        font-size: 14px;
        color: #215cb2;
    }
    .banner-second-container {
        padding-top: 80px;
        padding-left: 50px;
        width: 100%;
        height: 100%;
        background-image:url(/images/homepage/mobile/m_banner_bg_2.png);
        background-size:100% 100%
    }
    .banner-second-container .desc1 {
        font-size: 16px;
        color: white;
        margin-bottom: 0px;
    }
    .banner-second-container .desc2 {
        font-size: 14px;
        color: white;
        margin-bottom: -5px;
    }
    .banner-third-container {
        padding-top: 90px;
        padding-left: 50px;
        width: 100%;
        height: 100%;
        background-image:url(/images/homepage/mobile/m_banner_bg_3.png);
        background-size:100% 100%
    }
    .banner-third-container .desc1 {
        font-size: 16px;
        color: #215cb2;
        margin-bottom: 5px;
    }
    .banner-third-container .desc2 {
        font-size: 14px;
        color: #215cb2;
        margin-bottom: -5px;
    }
    /*search*/
    .search-container {
        margin: 10px 0px 0px 0px;
        padding: 0px;
        background-image:url(/images/homepage/mobile/m_search_bg.jpg);
        height: 100px;
    }
    .search-title-container {
        margin-left: 10px;
        padding-top: 10px;
    }
    .search-title {
        font-size: 16px;
        color: white;
    }
    .search-des {
        margin-top: -10px;
        font-size: 12px;
        color: white;
    }
    .input-group {
        margin-left: 10px;
    }
    .search-input {
        font-size: 12px;
        width: 300px;
        height: 30px;
        padding-left: 10px;
        outline: none;
        float: left;
    }
    .search-button {
        color: white;
        background-color: #0c5fa1;
        border: none;
        outline:none;
        font-size: 16px;
        float: left;
        height: 30px;
        width: 50px;
    }
    /*center*/
    .center-container {
        padding-top: 15px;
    }
    .container-title {
        text-align:center;
    }
    .center-body {
        padding-top: 15px;
    }
    .center-body .icon {
        width: 100%;
        height: 200px;
    }
    .center-body .desc {
        width: 100%;
        background: #f2f2f2;
        padding: 10px;
    }
    .center-body .desc .title {
        color: #292929;
        font-size: 16px;
        font-weight: bold
    }
    .center-body .desc hr {
        width: 40px;
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 10px;
        border:none;
        border-top: 2px solid #292929;
        background: green;
    }
    .center-content {
        font-size: 12px;
        color: #666666;
        margin-right: 0px;
    }
    .center-content p {
        margin: 0px;
    }
    .center-bottom {
        padding-top: 20px;
        height: 310px;
    }
    .center-function {
        padding-top: 20px;
    }
    .center-function .list-container {
        text-align:center;
    }
    .list-container .icon {
        width: 50px;
        height: 50px;
    }
    .list-container .desc-list {
        font-size: 12px;
        color: black;
    }
    .desc-list ul {
        list-style-type:none;
        margin-left: -40px;
        margin-top: 10px;
    }
    .desc-list li {
    }
    .scene-container {
        height: 200px;
        margin-top: 10px;
        overflow: hidden;
        background-image:url(/images/homepage/mobile/m_search_bg.jpg);
        background-size: 100% 100%;
    }
    .scene-title {
        width: 110px;
        height: 15px;
        margin-top: 10px
    }
    .swiper-content-left {
        margin-left: 25px;
        margin-top: 35px;
        font-size: 12px;
        color: white;
        background-color: rgba(220,38,38,0);
    }
    .swiper-content-left img {
        float: left;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .swiper-content-left p {
        margin: 0px 20px 0px 0px;
    }
    .advantage-container {
        padding-top: 20px;
    }
    .title-size {
        width: 150px;
        height: 40px;
    }
    .advantage-list {
        margin-left: 10px;
        margin-top: 20px;
    }
    .advantage-block {
        margin-left: 0px;
    }
    .advantage-icon-size {
        width: 50px;
        height: 50px;
    }
    .advantage-block p {
        margin-bottom: 0px;
        font-size: 12px;
    }
    .advantage-block .desc {
        color: black;
        margin-top: 10px;
    }
    .free-container {
        padding-top: 20px;
    }
    .free-title-size {
        width: 110px;
        height: 40px;
    }
    .free-contact {
        padding: 10px 20px 10px 20px;
        margin: 10px auto;
    }
    .free-contact .title {
        font-size: 16px;
        font-weight: bold;
        color: black;
        text-align: center;
    }
    .free-contact .row-input {
        font-size: 14px;
        color: black;
        margin-bottom: 15px;
    }
    .free-contact hr {
        width: 280px;
        border:none;
        border-top:1px solid #292929;
    }
    .free-contact .row-input input {
        margin-left: 15px;
        width: 70%;
        height: 36px;
        outline: none;
        font-size: 12px;
        padding-left: 15px;
        border: 1px solid #cccccc;
    }
    .free-contact button {
        margin-top: 10px;
        color: white;
        width: 200px;
        height: 34px;
        background-image: url(/images/homepage/free_submit.png);
        border: none;
        outline:none;
    }
    .footer-container {
        padding: 0px;
        margin: 0px 0px 0px 0px;
        background: #32404b;
    }
    .company-container {
        font-size: 12px;
        color: white;
        margin-left: -20px;
        padding-top: 20px;
        width: 280px;
    }
    .company-container .info {
        margin-top: 5px;
    }
    .company-wechat {
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 0px;
        width: 100px;
    }
    .company-wechat-icon {
        margin-left: 10px;
        width: 60px;
        height: 60px;
    }
    .company-wechat .wechat {
        font-size: 12px;
        text-align: center;
        color: white;
        margin-top: 10px;
    }
    .copy-right {
        height: 50px;
        padding-top: 8px;
        background: black;
        text-align: center;
        font-size: 12px;
        color: #dbdbdb;
    }
    .copy-right p {
        margin-bottom: 0px;
    }
</style>

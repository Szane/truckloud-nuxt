<template>
<div>
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade in"><span class="spinner"></span></div>
    <!-- end #page-loader -->

    <!-- begin #page-container -->
    <div id="page-container" class="fade">
        <!-- begin error -->
        <div class="error">
            <div class="error-code m-b-10">401 <i class="fa fa-warning"></i></div>
            <div class="error-content">
                <div class="error-message">未经授权：访问由于凭据无效被拒绝</div>
                <div class="error-desc m-b-20">
                </div>
                <div>
                    <a href="/" class="btn btn-success">返回首页</a>
                </div>
            </div>
        </div>
        <!-- end error -->
    </div>
    <!-- end page container -->
</div>
</template>
<script>
export default {
    name: 'error404',
    mounted: function() {
        App.init()
    }
}
</script>
<style scoped>
.yellow-background {
    background: #fee100;
    border-color: #fee100
}
</style>

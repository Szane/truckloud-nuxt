<template>
    <div>
        <!-- begin #page-container -->
        <div id="page-container" class="page-container fade page-sidebar-fixed page-header-fixed">
            <main-header></main-header>
            <main-sidebar></main-sidebar>
            <!-- begin #content -->
            <div id="content" class="content">
                <router-view></router-view>
            </div>
        </div>
        <!-- end page container -->
    </div>
</template>
<script>
    const common = require('commonFunc')
    import mainHeader from './main/mainHeader'
    import mainSidebar from './main/mainSidebar'
    export default {
        name: 'mainSystem',
        components: {
            mainHeader,
            mainSidebar
        },
        mounted: function () {
            App.init()
        }
    }
</script>
<style scoped>
</style>

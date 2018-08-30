<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in images">
            <img class="imgWidth" :src="image">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>
<script>
export default {
    data: function() {
        return {
            images: [
                '/static/images/testImage/blog1.jpg',
                '/static/images/testImage/blog2.jpg',
                '/static/images/testImage/blog3.jpg'
            ]
        }
    },
    mounted: function() {
        this.initBanner()
    },
    methods: {
        initBanner: function() {
            let swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            })
        }
    }
}
</script>
<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.imgWidth {
    width: 100%;
    height: 100%;
}
</style>

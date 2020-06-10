<template>
    <swiper class="header-slider" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="slider-item" v-if="loading && !error"><LoadingBar class="slider-loading-bar"/></swiper-slide>
        <swiper-slide class="slider-item" v-for="(item, index) in items">
            <SliderItem
                    v-if="!loading && !error"
                    v-bind:title="item.title"
                    v-bind:preTitle="item.preTitle"
                    v-bind:image="item.image"
                    v-bind:href="item.href"
                    v-bind:button-text="item.buttonText"
            >{{item.desc}}</SliderItem>
        </swiper-slide>
        <div class="swiper-pagination" v-show="!loading && !error" slot="pagination"></div>
        <div class="swiper-button-prev" v-show="!loading && !error" slot="button-prev"></div>
        <div class="swiper-button-next" v-show="!loading && !error" slot="button-next"></div>
    </swiper>
</template>

<script>
import SliderItem from "./SliderItem";
import LoadingBar from "../LoadingBar";
export default {
    name: 'Slider',
    props: [],
    data() {
        return {
            items: [],
            loading: true,
            error: false,
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                grabCursor: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination'
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        }
    },
    mounted() {
        setTimeout(() => {
            this.items = [
                {
                    href: "#",
                    buttonText: "Shop Now",
                    preTitle: "Next April",
                    title: "Fresh Summer Collection",
                    image: require("../../assets/girls/pretty-girls01.png"),
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem illum laudantium rerum voluptates. Autem dicta et expedita nulla pariatur praesentium. Aspernatur eius et qui, quidem quos voluptatibus? Dicta, nemo?",
                },
                {
                    href: "#",
                    buttonText: "Shop Now",
                    preTitle: "Wow! What is that?",
                    title: "This is a cool slider",
                    desc: "This is beautiful, isn't it?",
                },
                {
                    href: "#",
                    buttonText: "Shop Now",
                    preTitle: "",
                    title: "Oh, shit. Here we go again",
                    desc: "Wtf?!",
                },
            ];
            this.loading = false;
        }, 2000 * Math.random());
    },
    components: {
        SliderItem,
        LoadingBar,
    },
}
</script>

<style>
    .header-slider {
        height: 520px;
        background-color: #d2fbfb;
    }
    .slider-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slider-loading-bar {

    }
    .swiper-pagination-bullets {
        margin-right: 40px;
    }
    .swiper-button-prev {
        left: 0 !important;
        padding: 20px 25px 20px 25px;
        background-color: #fffa;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 30px !important;
        color: #000 !important;
    }
    .swiper-button-next {
        right: 0 !important;
        padding: 20px 25px 20px 25px;
        background-color: #fffa;
    }
    .swiper-pagination-bullet {
        background: #000 !important;
    }
    @media (max-width: 700px) {
        .swiper-button-next, .swiper-button-prev {
            display: none !important;
        }
    }
</style>
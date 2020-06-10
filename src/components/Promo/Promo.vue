<template>
    <div class="promo-container">
        <div class="promo-left">
            <h2>{{preTitle}}</h2>
            <h1>{{title}}</h1>
            <p><slot /></p>
            <Button
                    v-if="button"
                    :type="button.type"
                    :title="button.title"
                    :to="button.to"
                    :href="button.href"
            >{{button.title}}</Button>
        </div>
        <div class="promo-right" v-if="image">
            <div class="promo-image">
                <img :src="image">
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../Button";

export default {
    name: "Promo",
    props: [
        "title",
        "preTitle",
        "button",
        "image",
    ],
    components: {
        Button,
    },
};
</script>

<style scoped>
    .promo-container {
        display: flex;
        align-items: flex-end;
        flex-direction: column-reverse;
        padding: 50px 0 50px 0;
    }
    .promo-left {
        max-width: 580px;
    }
    .promo-right {
        display: flex;
        align-items: center;
    }
    h1 {
        margin: 30px 0 30px;
    }
    p {
        margin: 0 0 30px;
    }
    img {
        transform: scaleX(-1);
    }
    .promo-image {
        display: flex;
        position: relative;
    }
    .promo-image::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: -50%;
        border: 2px solid #000;
        width: 100%;
        height: 100%;
        z-index: -1;
        box-sizing: border-box;
    }
    @media (min-width: 1080px) {
        .promo-container {
            flex-direction: row;
            align-items: center;
        }
        img {
            transform: scaleX(1);
        }
        .promo-image::after {
            left: 50%;
        }
    }
</style>
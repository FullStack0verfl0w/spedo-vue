<template>
    <div style="position: relative;">
        <div class="slider-item-description">
            <h2>{{preTitle}}</h2>
            <h1>{{title}}</h1>
            <p><slot></slot></p>
            <Button v-if="href">{{buttonText}}</Button>
        </div>
        <div class="slider-item-image"><img v-bind:src="image" alt=""></div>
    </div>
</template>

<script>
import Button from "../Button";
export default {
    name: "SliderItem",
    props: [
        "title",
        "preTitle",
        "image",
        "href",
        "buttonText",
    ],
    components: {
        Button,
    },
}
</script>

<style scoped>
    .slider-item-description {
        max-width: 520px;
        margin: 0 8px 0 8px;
    }
    .slider-item-image {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    h2 {
        font-family: 'Cairo', sans-serif;
        color: #333333;
    }
    p {
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        color: #6e6e6e;
        margin: 40px 0 40px;
    }
    @media (max-width: 700px) {
        .slider-item-image {
            display: none;
        }
    }
</style>
<template>
    <li class="product-item" v-bind:style="image ? {backgroundImage: `url(${image})`} : {}">
        <div class="item-hover">
            <div class="item-hover-background">
                <div class="item-hover-buttons">
                    <Button class="anim" type="button" :on-click="onClick">Add To Cart</Button>
                    <Button class="transparent anim" type="router" to="#">Show Gallery</Button>
                </div>
            </div>
        </div>
        <div class="item-info">
            <ul>
                <li class="info-main">
                    <div class="info-name">
                        <h1>{{name}}</h1>
                        <h2>{{category}}</h2>
                    </div>
                    <div class="item-price">
                        <h1>{{price}}&dollar;</h1>
                    </div>
                </li>
                <li v-if="sizes" class="info-sizes">
                    <h1>Sizes</h1>
                    <Picker type="text" v-bind:items="sizes" />
                </li>
                <li v-if="colors" class="info-colors">
                    <h1>Colors</h1>
                    <Picker type="color" v-bind:items="colors" />
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
import Button from "../Button";
import Picker from "../Picker/Picker";

export default {
    name: 'ProductItem',
    props: [
        "name",
        "image",
        "category",
        "price",
        "sizes",
        "colors",
    ],
    methods: {
        onClick() {
            this.$store.commit("AddToCart", {name: this.name, count: 1, price: this.price});
        },
    },
    components: {
        Button,
        Picker,
    },
};
</script>

<style scoped>
    .product-item {
        width: 100%;
        max-width: 360px;
        height: 450px;

        background-repeat: no-repeat;
        background-position-x: center;
        background-color: #e6eef0;

        position: relative;
        overflow: hidden;
        margin: 15px 0 15px 0;
        transition: transform .4s, box-shadow .4s;
    }

    .product-item:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 10px #0002;
    }
    .product-item:hover .item-info {
        max-height: 100%;
    }
    .product-item:hover .item-hover {
        opacity: 1;
    }
    .item-hover {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition-duration: .2s;
        background-color: #ccffffbf;
    }
    .item-hover-background {
        height: 246px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-hover-buttons {
        display: flex;
        flex-direction: column;
    }
    .item-hover-buttons a, .item-hover-buttons button {
        margin: 5px 0 5px 0;
    }
    .item-info {
        width: 100%;
        max-height: 56px;
        position: absolute;
        bottom: 0;
        background-color: #fff;
        transition: max-height 0.4s ease-in-out;
    }
    .item-info > ul {
        display: flex;
        flex-direction: column;
        padding: 0 30px 0 30px;
    }
    .info-main, .info-sizes, .info-colors {
        margin: 10px 0 10px 0;
        display: flex;
    }
    .info-main {
        align-items: center;
        justify-content: space-between;
    }
    .info-sizes, .info-colors {
        flex-direction: column;
    }
    .info-sizes ul, .info-colors ul {
        display: flex;
        flex-direction: row;
    }
    .info-sizes li, .info-colors li {
        margin: 10px 0 10px 0;
    }
    h1 {
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
        line-height: 18px;
    }
    h2 {
        font-family: 'Cairo', sans-serif;
        font-size: 15px;
        line-height: 18px;
        color: #6e6e6e;
    }
    .item-price h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #00cccc;
    }
    .color-item {
        width: 15px;
        height: 15px;
        margin: 0 4px 0 4px;
        border-radius: 50%;
        background-color: #000;
    }
    .info-colors ul:first-child {
        margin: 0 4px 0 0;
    }
    img {
        position: absolute;
    }
</style>

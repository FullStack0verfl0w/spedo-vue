<template>
    <div style="position: relative;">
        <section class="products-title">
            <h1>Our Products</h1>
            <h2>New Products Every Fucken Day.</h2>
        </section>

        <transition name="fade">
        <div v-bind:key="'ProductList-Transition1'" class="product-list" v-if="!loading && !error && items.length > 0">
            <ul>
                <ProductItem
                        v-for="(item, index) in items"
                        v-bind:key="index"
                        v-bind:name="item.name"
                        v-bind:image="item.image"
                        v-bind:category="item.category"
                        v-bind:price="item.price"
                        v-bind:sizes="item.sizes"
                        v-bind:colors="item.colors"
                />
            </ul>
        </div>
        <div v-bind:key="'ProductList-Transition2'" class="product-list empty" v-else-if="!loading && !error && items.length <= 0">
            <font-awesome-icon class="sad-icon" v-bind:icon="['far', 'sad-tear']"/>
            <h1>There's no products here. So sad.</h1>
        </div>
        <div v-bind:key="'ProductList-Transition3'" class="loading-bar" v-else-if="loading && !error" > <LoadingBar /></div>
        <div v-bind:key="'ProductList-Transition4'" class="product-list empty" v-else-if="error">
            <h1>Shit happened<span v-if="typeof(error) === 'string'"> ({{error}})</span>.</h1>
            <Button :on-click="reload">Reload</Button>
        </div>
        </transition>
    </div>
</template>

<script>
import ProductItem from "./ProductItem";
import LoadingBar from "../LoadingBar";
import Button from "../Button";

export default {
    name: 'ProductList',
    data() {
        return {
            loading: true,
            error: false,
            items: [],
        };
    },
    props: [],
    mounted() {
        this.mounted();
    },
    methods: {
        reload() {
            this.loading = true;
            this.error = false;
            this.items = [];

            this.mounted();
        },
    mounted() {
        setTimeout(() => {
            this.items = [
                {
                    link: "#",
                    name: "Fantastic Black Dress",
                    image: require("../../assets/girls/pretty-girls06.png"),
                    category: "Party Dress",
                    price: 65,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
                {
                    link: "#",
                    name: "Fantastic Jeans",
                    image: require("../../assets/girls/pretty-girls07.png"),
                    category: "Summer Dress",
                    price: 89,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
                {
                    link: "#",
                    name: "Fantastic Beat",
                    image: require("../../assets/girls/pretty-girls08.png"),
                    category: "Wintwe Dress",
                    price: 45,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
                {
                    link: "#",
                    name: "Fantastic Black Dress",
                    image: require("../../assets/girls/pretty-girls09.png"),
                    category: "Party Dress",
                    price: 119,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
                {
                    link: "#",
                    name: "Fantastic Jeans",
                    image: require("../../assets/girls/pretty-girls010.png"),
                    category: "Summer Dress",
                    price: 49,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
                {
                    link: "#",
                    name: "Fantastic Beat",
                    image: require("../../assets/girls/pretty-girls011.png"),
                    category: "Wintwe Dress",
                    price: 65,
                    sizes: [
                        {value: "S"},
                        {value: "M"},
                        {value: "L"},
                        {value: "X"},
                    ],
                    colors: [
                        {name: "Red", value: "#ff0033"},
                        {name: "Yellow", value: "#ff4200"},
                        {name: "Light Blue", value: "#33cccc"},
                        {name: "Black", value: "#6666cc"},
                    ],
                },
            ];
            this.loading = false;
        }, 2000 * Math.random());
    }
    },
    components: {
        ProductItem,
        LoadingBar,
        Button,
    },
};
</script>

<style scoped>
    .product-list {
        min-height: 960px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px 0 15px;
    }
    .sad-icon {
        font-size: 64px;
        color: #696969;
    }
    .empty h1 {
        text-align: center;
    }
    .products-title {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 100px;
    }
    .products-title h1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 25px;;
        text-align: center;
    }
    .products-title h2 {
        width: 210px;
        text-align: center;
        line-height: 18px;
        font-family: 'Cairo', sans-serif;
        font-size: 14px;
        color: #6e6e6e;
    }
    .product-list ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        max-width: 390px;
    }
    @media (min-width: 1170px) {
        .product-list ul {
            flex-direction: row;
            max-width: 1170px;
        }
        .product-list ul li {
            margin: 15px;
        }
        .product-list ul li:first-child {
            margin-left: 0;
        }
        .product-list ul li:nth-child(3n) {
            margin-right: 0;
        }
        .product-list ul li:nth-child(3n+1) {
            margin-left: 0;
        }
    }
    @media (min-width: 780px) and (max-width: 1169px) {
        .product-list ul {
            flex-direction: row;
            max-width: 780px;
        }
        .product-list ul li:first-child {
            margin-right: 15px;
        }
        .product-list ul li:nth-child(2n+1) {
            margin-left: 15px;
            margin-right: 15px;
        }
        .product-list ul li:nth-child(2n) {
            margin-left: 15px;
        }
    }
    .loading-bar {
        display: flex;
        justify-content: center;
        padding: 120px 0 120px 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
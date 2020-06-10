<template>
    <section>
        <transition name="fade">
        <div class="category-list" v-bind:key="'Category-Transition1'" v-if="!loading && !error">
            <ul>
                <CategoryItem
                        v-for="(item, index) in items"
                        v-bind:key="index"
                        v-bind:title="item.title"
                        v-bind:link="item.link"
                        v-bind:image="item.image" />
            </ul>
        </div>

        <div v-bind:key="'Category-Transition2'" class="loading-bar" v-else-if="loading && !error">
            <LoadingBar />
        </div>
        <div v-bind:key="'Category-Transition3'" class="error" v-else-if="!loading && error">
            <h1>Shit happened<span v-if="typeof(error) === 'string'"> ({{error}})</span>.</h1>
        </div>
        </transition>
    </section>
</template>

<script>
import CategoryItem from "./CategoryItem";
import LoadingBar from "../LoadingBar";

export default {
    name: 'CategoryList',
    data() {
        return {
            loading: true,
            error: false,
            items: [],
        };
    },
    props: [],
    mounted() {
        setTimeout(() => {
            this.items = [
                { link: "#", title: "Best Of Whites", image: require("../../assets/girls/pretty-girls02.png") },
                { link: "#", title: "Best Of Red", image: require("../../assets/girls/pretty-girls03.png") },
                { link: "#", title: "Best Of BLANK", image: require("../../assets/girls/pretty-girls04.png") },
                { link: "#", title: "Best Of Black", image: require("../../assets/girls/pretty-girls05.png") },
            ];
            this.loading = false;
        }, 2000 * Math.random());
    },
    components: {
        CategoryItem,
        LoadingBar,
    },
};
</script>

<style scoped>
    section {
        min-height: 760px;
        padding: 100px 0 100px 0;
        position: relative;
    }
    .category-list {
        display: flex;
        justify-content: center;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15px 0 15px;
        max-width: 1200px;
        flex: 1;
    }
    .error {
        display: flex;
        justify-content: center;
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

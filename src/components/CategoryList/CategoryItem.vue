<template>
    <li>
        <a v-bind:href="link">
            <div v-if="image" class="category-image"><img v-bind:src="image" alt="" /></div>
            <div class="category-desc">
                <h1>{{title}}</h1>
                <h2>View Products<font-awesome-icon class="desc-icon" icon="chevron-right"/></h2>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: 'Home',
    props: [
        "title",
        "link",
        "image",
    ],
    components: {},
};
</script>

<style scoped>
    li {
        display: flex;
        flex-direction: column !important;
        width: 100%;
        max-width: 650px;
        height: 280px;
        margin: 15px;
        background-color: #e6eef0;
        transition-duration: .2s;
        overflow: hidden;
    }
    li:hover {
        transform: scale(1.05);
    }
    li:active {
        transform: scale(0.99);
    }
    a {
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        padding-left: 30px;
        position: relative;
        z-index: 1;
    }
    h1 {
        font-size: 18px;
        color: #000;
        margin: 15px 0 15px 0;
    }
    h2 {
        font-size: 14px;
        color: #696969;
    }
    .category-image {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .desc-icon {
        margin-left: 8px;
    }
    @media (max-width: 500px) {
        h1 {
            text-shadow: 1px 1px 3px #fff;
        }
        h2 {
            text-shadow: 0 0 3px #fff;
        }
    }
    @media (min-width: 800px) {

    }
</style>
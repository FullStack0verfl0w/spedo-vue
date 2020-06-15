<template>
    <li class="blog-card-container">
        <a href="#" class="blog-card--link"></a>
        <div class="blog-title"><h1>{{title}}</h1></div>
        <div class="blog-description"><p><slot></slot></p></div>
    </li>
</template>

<script>

    export default {
        name: "BlogCard",
        props: [
            "title",
            "desc",
            "image",
            "loading",
        ],
        components: {},
    };
</script>

<style scoped>
    .blog-card-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 800px;
        min-height: 200px;

        margin: 25px 0 25px 0;
        background-color: #e6eef0;
        transition: transform .4s, box-shadow .4s;
        cursor: pointer;

        position: relative;
    }
    .blog-card-container:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 10px #0002;
    }
    .blog-card-container:hover .blog-description {
        transition: max-height 0.4s ease-in-out;
        max-height: 100%;
    }
    .blog-card--link {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .blog-title {
        padding: 8px;
    }
    .blog-title h1 {
        color: #000d;
        font-family: 'Cairo', sans-serif;
    }

    .blog-description {
        background-color: #fff;
        padding: 8px;
        max-height: 18px;
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
    }
</style>
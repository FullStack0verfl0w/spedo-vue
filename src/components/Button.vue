<template>
    <a v-if="type == 'link'" v-bind:href="href"><slot></slot></a>
    <router-link v-else-if="type == 'router'" v-bind:to="to"><slot></slot></router-link>
    <button v-else-if="!type || type == 'button'" @click.prevent="onClick()"><slot></slot></button>
</template>

<script>
export default {
    name: "Button",
    props: [
        "type",
        "href",
        "to",
        "onClick",
    ],
    methods: {
    }
};
</script>

<style scoped>
    * {
        display: inline-block;
        font-family: "Georgia", sans-serif;
        font-size: 14px;
        font-weight: normal;

        text-transform: uppercase;
        letter-spacing: .1em;

        border: none;
        padding: 20px 25px 20px 25px;

        background-color: #000;
        color: #fff;
        outline: none;
    }
    *:hover {
        background-color: #000d;
    }
    *:active {
        color: #aaa;
        background-color: #000d;
    }

    * .transparent {
        border: 1px solid #000;
        background-color: #0000;
        color: #000;
    }
    * .transparent:hover {
        border-color: #666;
        color: #666;
    }
    * .transparent:active {
        border-color: #888;
        color: #888;
    }
    * .anim {
        transition-duration: .2s;
    }
    * .anim:hover {
        transform: scale(1.05);
    }
    * .anim:active {
        transform: scale(0.99);
    }
</style>
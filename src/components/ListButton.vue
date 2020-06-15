<template>
    <li @mouseover="hover=true" @mouseleave="hover=false">
        <div class="list-button">
            <div class="list-button-icon">
                <img :src="selected.icon.url" v-if="selected.icon && selected.icon.url">
                <font-awesome-icon :icon="selected.icon.name" v-else-if="selected.icon && selected.icon.name" />
            </div>
            <span>{{selected.title}}</span>
            <font-awesome-icon class="arrow-icon" :class="{'icon-hover': hover}" icon="chevron-down"/>
        </div>
        <transition name="slide">
            <ul v-show="hover">
                <li class="list-button-child" v-for="(item, index) in items" :key="index" @click="onClick(item)">
                    <div class="list-button">
                        <div class="list-button-icon">
                            <img :src="item.icon.url" v-if="item.icon && item.icon.url">
                            <font-awesome-icon :icon="item.icon.name" v-else-if="item.icon && item.icon.name" />
                        </div>
                        <span>{{item.title}}</span>
                    </div>
                </li>
            </ul>
        </transition>
    </li>
</template>

<script>
import Button from "./Button";

export default {
    name: "ListButton",
    data() {
        return {
            hover: false,
            selected: this.items[0] || { title: "", name: "" },
        };
    },
    methods: {
        onClick(item) {
            this.selected = item;
            this.onChange(item);
            this.hover = false;
        },
    },
    mounted() {
        this.onChange(this.selected);
    },
    props: [
        "type",
        "items",
        "icon",
        "onChange",
    ],
    components: {
        Button,
    },
};
</script>

<style scoped>
    div {
        position: relative;
    }
    .list-button {
        display: flex;
    }
    .list-button-icon {
        display: flex;
        justify-content: center;
        width: 32px;
        margin-right: .5em;
    }
    ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #000;
        min-width: 150px;
        z-index: 2;
    }
    li {
        cursor: pointer;
    }
    .list-button-child {
        padding: 6px 6px 6px 0;
        border-bottom: 1px solid #aeaeae22;
    }
    .arrow-icon {
        margin-left: .5em;
        font-size: 16px;
        color: #fff;
        transition-duration: .2s;
    }
    .icon-hover {
        transform: rotateX(180deg);
    }
</style>
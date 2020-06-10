<template>
    <li @click="$emit('click', data)">
        <h2 v-if="type == 'text'"
            class="picker-text-item"
            v-bind:class="{selected}">{{data.value}}</h2>
        <div v-else-if="type == 'color'"
             class="picker-color-item"
             v-bind:class="{selected}"
             v-bind:style="{backgroundColor: data.value, borderColor: data.value}"></div>
    </li>
</template>

<script>
export default {
    name: "PickerItem",
    props: {
        type: {
            type: String,
            default: "text",
        },
        data: {
            type: Object,
            required: true,
        },
        selected: {
            type: Boolean,
            default: false,
        }
    },
    components: {},
}
</script>

<style scoped>
    li {
        margin: 0 4px 0 4px;
    }
    li:first-child {
        margin-left: 0;
    }
    .picker-text-item {
        font-size: 15px;
        font-weight: normal;
        line-height: 18px;
        color: #6e6e6e;
        transition-duration: 50ms;
        cursor: pointer;
    }
    .picker-text-item.selected {
        cursor: default;
        font-weight: bold;
        color: #5d5d5d;
    }
    .picker-color-item {
        width: 15px;
        height: 15px;
        margin: 4px 4px 0 4px;
        border-radius: 50%;
        background-color: #000;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .picker-color-item.selected {
        cursor: default;
    }
    .picker-color-item.selected::after {
        display: block;
    }
    .picker-color-item::after {
        content: "";
        display: none;
        height: calc(100% + 2px);
        width: calc(100% + 2px);
        position: absolute;

        border-width: 1px;
        border-style: solid;
        border-color: inherit;
        border-radius: 50%;
    }
</style>
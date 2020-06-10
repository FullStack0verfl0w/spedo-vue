<template>
    <ul class="picker">
        <PickerItem v-for="(item, index) in items"
                    v-bind:type="type"
                    v-bind:data="item"
                    v-bind:selected="item === selectedItem"
                    @click="onClick"
                    v-bind:key="index" />
    </ul>
</template>

<script>
import PickerItem from "./PickerItem";

export default {
    name: "Picker",
    props: {
        type: {
            type: String,
            default: "text",
        },
        items: {
            type: Array,
            default: [],
        },
        onSelect: {
            type: Function,
            default: () => {} ,
        },
    },
    methods: {
        onClick(data) {
            this.selectedItem = data;
            this.onSelect(data);
        },
    },
    data() {
        return {
            selectedItem: this.items[0],
        };
    },
    components: {
        PickerItem,
    },
}
</script>

<style scoped>
    .picker {
        display: flex;
        flex-direction: row;
    }
</style>
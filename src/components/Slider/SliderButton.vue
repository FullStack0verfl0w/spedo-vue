<template>
    <button @click.prevent="onClick()">
        <font-awesome-icon v-bind:icon="icon" />
    </button>
</template>

<script>

export default {
    name: "SliderButton",
    props: [
        "icon",
        "onClick",
    ],
}
</script>

<style scoped>
    button {
        width: 78px;
        height: 78px;
        border: none;
        background-color: #ffffffbf;
        transition-duration: .1s;
    }
    button:hover {
        background-color: #ddddddbf;
    }
    button:active {
        background-color: #aaaaaabf;
    }
</style>
<template>
    <div :style="{
        '--size': (size || 80) + 'px',
        '--thickness': (thickness || 6) + 'px',
        '--color': (color || '#000'),
    }"></div>
</template>

<script>
export default {
    name: "LoadingBar",
    props: [
        "type",
        "size",
        "thickness",
        "color",
    ],
}
</script>

<style scoped>
    div {
        display: inline-block;
        width: var(--size) !important;
        height: var(--size) !important;
    }
    div:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: var(--thickness) solid var(--color);
        border-color: var(--color) transparent var(--color) transparent;
        box-sizing: border-box;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
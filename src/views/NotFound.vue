<template>
    <div>
        <font-awesome-icon class="icon" :icon="['far', 'sad-tear']"/>
        <h1>Sorry, zat page doesn't exist.</h1>
        <Button :onClick="() => $router.go(-1)">Return back</Button>
    </div>
</template>

<script>
import Button from "../components/Button";

export default {
    name: "NotFound",
    components: {
        Button,
    }
};
</script>

<style scoped>
    .icon {
        font-size: 64px;
        color: #000a;
    }
    h1 {
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: "Montserrat", sans-serif;
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px 0 100px;
    }
</style>
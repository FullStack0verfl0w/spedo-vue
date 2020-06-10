<template>
    <router-link to="/cart" class="cart-icon">
        <div class="cart-badge" v-show="this.$store.getters.Cart.length">{{this.$store.getters.Cart.length}}</div>
        <font-awesome-icon icon="shopping-cart"/>
    </router-link>
</template>

<script>
export default {
    name: "CartBadge",
    components: {

    },
};
</script>

<style>
    .cart-icon {
        position: relative;
    }
    .cart-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 16px;
        height: 16px;
        top: -8px;
        right: -8px;
        border-radius: 50%;
        background-color: #fd3131;
        font-size: 11px;
        text-shadow: 0 1px #222;
    }
</style>
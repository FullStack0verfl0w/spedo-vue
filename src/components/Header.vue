<template>
    <header>
        <div class="header-top">
            <div class="header-top-container">
                <nav class="header-top-nav">
                    <ul>
                        <ListButton :items="[
                            {title: 'English', name: 'en', icon: {url: require('../assets/lang/en.png')}},
                            {title: 'Russian', name: 'ru', icon: {url: require('../assets/lang/ru.png')}},
                        ]" />
                        <ListButton :items="[
                            {title: 'USD', name: 'usd', icon: {name: 'dollar-sign'}},
                            {title: 'RUB', name: 'rub', icon: {name: 'ruble-sign'}},
                        ]" />
                        <li class="nav-item">
                            <div class="nav-item-icon">
                                <font-awesome-icon icon="truck"/>
                            </div>
                            <router-link to="/tracking">Track Your Order</router-link>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-icon">
                                <font-awesome-icon icon="map-marker-alt"/>
                            </div>
                            <router-link to="/map">Store Locator</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="header-top-user">
                    <nav class="user-nav">
                        <ul>
                            <li class="nav-item">
                                <router-link to="/login">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/login">Sign up</router-link>
                            </li>
                            <li class="nav-item">
                                <CartBadge />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="header-main">
            <div class="header-main-container">
                <h1 class="header-main-title">Spedo</h1>
                <div class="header-main-nav">
                    <Navigation :items="this.$store.getters.HeaderNavigation" />
                    <SearchForm class="nav-search" placeholder="Search..."/>
                </div>
            </div>
        </div>

        <Slider/>
    </header>
</template>

<script>
import SearchForm from "./SearchForm.vue";
import Slider from "./Slider/Slider";
import Navigation from "./Navigation/Navigation";
import NavigationItem from "./Navigation/NavigationItem";
import ListButton from "./ListButton";
import CartBadge from "./CartBadge";

export default {
    name: "Header",
    components: {
        CartBadge,
        ListButton,
        NavigationItem,
        SearchForm,
        Slider,
        Navigation,
    },
};
</script>

<style scoped>
    .header-top {
        background-color: #000;
    }
    .header-top * {
        font-family: "Montserrat", sans-serif;
        font-weight: bolder;
        text-transform: uppercase;
        color: #fff;
    }
    .header-top-container {
        min-height: 90px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    li {
        margin: 15px 5px 15px 5px;
    }
    .nav-item {
        display: flex;
    }
    nav ul {
        display: flex;
        flex-direction: column;
    }
    .user-nav .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nav-item-icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 32px;
        margin-right: .5em;
    }
    .header-top-nav li {
        margin: 16px 0 16px 0;
    }
    .header-main * {
        color: #000;
    }
    .header-main-container h1 {
        font-size: 36px;
        margin-top: 100px;
        color: #313131;
    }
    .header-main-container {
        min-height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .header-main-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
    .icon {
        margin-right: .5em;
    }
@media (min-width: 800px) {
    .header-main-nav {
        flex-direction: row;
    }
    .nav-search {
        margin-left: 30px;
    }
    span {
        content: "";
    }
    nav ul {
        flex-direction: row;
    }
    .header-top-nav li {
        margin-left: 1em;
    }
    .user-nav li {
        margin-right: 1em;
    }
}
</style>
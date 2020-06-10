<template>
    <div id="app">
        <Header />
        <main>
            <transition name="slide">
                <router-view/>
            </transition>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cairo:400,700|Montserrat:400,400i,700|Raleway:500,500i&display=swap');
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border-radius: 0;
}
#app {
    overflow: hidden;
}
h1 {
    font-family: "Georgia", sans-serif;
    font-size: 36px;
    text-transform: uppercase;
}
h2 {
    font-family: 'Cairo', sans-serif;
    font-size: 24px;
    text-transform: uppercase;
}
p {
    font-family: 'Raleway', sans-serif;
}

.slide-enter-active, .slide-leave-active {
    transition-property: transform, opacity;
    transition-duration: .25s;
}

.slide-enter-active {
    transition-delay: .25s;
}

.slide-enter, .slide-leave-active {
    transform: translateX(100%);
    opacity: 0;
}
</style>

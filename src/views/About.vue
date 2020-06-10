<template>
    <div class="about">
        <h1>About us</h1>

        <section>
            <Promo title="We're the best shop ever!" :image="require('../assets/girls/pretty-girls09.png')">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque culpa earum hic obcaecati porro, quam reiciendis repellat voluptates. Ab ad, aliquid amet architecto consequuntur delectus eligendi harum itaque magnam necessitatibus neque nisi nulla quam quasi qui quo, repellat unde voluptatum? Iste obcaecati quam recusandae sit soluta. Alias aut consequatur, culpa delectus dolore error eveniet facilis illo nostrum odit quidem quis quos voluptate!</Promo>
            <Promo title="Huge choice of clothes" :image="require('../assets/girls/pretty-girls03.png')">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur assumenda delectus dolore exercitationem illo in natus numquam odio officiis, perferendis quae quaerat quas quo saepe ullam ut vitae! Aliquam cumque laboriosam qui sed.</Promo>
        </section>
    </div>
</template>

<script>
    import Promo from "../components/Promo/Promo";

    export default {
        name: "About",
        components: {
            Promo,
        }
    };
</script>

<style scoped>
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
    section {
        padding: 0 15px 0 15px;
    }
</style>
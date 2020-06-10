<template>
    <div>
        <CategoryList />

        <ProductList />

        <section class="promo">
            <div>
                <Promo title="Design your product now." pre-title="Only 20$" :button="{type: 'router', to: '/blog', title: 'Shop now'}" :image="require('../assets/girls/pretty-girls07.png')"/>
                <Promo title="Wait for red friday in few weeks.." :button="{type: 'router', to: '/blog', title: 'Shop now'}" :image="require('../assets/girls/pretty-girls010.png')">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum earum magnam necessitatibus, odit optio pariatur possimus totam voluptate voluptates. Architecto asperiores deserunt distinctio ducimus eos in, libero quis? Deserunt?</Promo>
            </div>
        </section>
        <section class="subscribe">
            <div class="subscribe-content">
                <h1>Stay updated on latest products releases and promotions</h1>
                <SubscribeForm />
            </div>
        </section>
    </div>
</template>

<script>
import CategoryList from "../components/CategoryList/CategoryList";
import ProductList from "../components/ProductList/ProductList";
import SubscribeForm from "../components/SubscribeForm";
import Promo from "../components/Promo/Promo";

export default {
    name: 'Home',

    mounted() {

    },
    components: {
        CategoryList,
        ProductList,
        Promo,
        SubscribeForm,
    },
};
</script>

<style scoped>
    .subscribe {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    .subscribe-content {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0 100px 0;
    }
    .subscribe-content h1 {
         font-family: 'Cairo', sans-serif;
         font-size: 16px;
         text-align: center;
         margin-bottom: 15px;
    }
    .promo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 15px 50px 15px;
    }
    @media (min-width: 1175px) {
        .subscribe-content {
            min-width: 1172px;
            flex-direction: row;
            justify-content: space-between;
        }
        .subscribe-content h1 {
            margin-bottom: 0;
        }
    }
</style>

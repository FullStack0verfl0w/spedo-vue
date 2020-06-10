import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: "",
        currency: "",
        cart: [],
        headerNav: [
            {
                title: "Home",
                to: "/",
                type: "router",
            },
            {
                title: "Catalog",
                to: "/catalog",
                type: "router",
                children: [
                    ...( () => {
                        return [
                            {
                                title: "Best of Whites",
                                to: "/category/?id=1",
                                type: "router",
                            },
                            {
                                title: "Best of Summer",
                                to: "/category/?id=2",
                                type: "router",
                            },
                            {
                                title: "Best of Red",
                                to: "/category/?id=3",
                                type: "router",
                            },
                            {
                                title: "Best of Black",
                                to: "/category/?id=4",
                                type: "router",
                            },
                        ];
                    } )()
                ],
            },
            {
                title: "About",
                to: "/about",
                type: "router",
            },
            {
                title: "Prices",
                to: "/prices",
                type: "router",
            },
            {
                title: "Blog",
                to: "/blog",
                type: "router",
            },
            {
                title: "Contact",
                to: "/contact",
                type: "router",
            },
        ],
        footerNav: [
            {
                title: "Search",
                to: "/search",
                type: "router",
            },
            {
                title: "About Us",
                to: "/about",
                type: "router",
            },
            {
                title: "F&Q",
                to: "/faq",
                type: "router",
            },
            {
                title: "Terms",
                to: "/terms",
                type: "router",
            },
            {
                title: "Return Policy",
                to: "/return-policy",
                type: "router",
            },
        ],
    },
    getters: {
        HeaderNavigation: state => {
            return state.headerNav;
        },
        FooterNavigation: state => {
            return state.footerNav;
        },
        Cart: state => {
            return state.cart;
        },
    },
    mutations: {
        AddToCart(state, payload) {
                state.cart.push(payload);
        },
    },
    actions: {
    },
    modules: {
    }
})

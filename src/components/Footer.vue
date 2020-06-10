<template>
    <footer>
        <div class="footer-border"></div>

        <div class="footer-content">
            <div class="footer-logo">
                <h1>Spedo</h1>
            </div>
            <Navigation :items="this.$store.getters.FooterNavigation" :centered="true"/>
            <div class="footer-socials">
                <h1>Follow Us On</h1>
                <ul>
                    <li><a href="#" class="social-button">
                        <font-awesome-icon class="social-icon fb" :icon="['fab', 'facebook-square']" />
                    </a></li>
                    <li><a href="#" class="social-button">
                        <font-awesome-icon class="social-icon tw" :icon="['fab', 'twitter-square']" />
                    </a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>


import Navigation from "./Navigation/Navigation";
export default {
    name: "Footer",
    components: {
        Navigation

    },
}
</script>

<style scoped>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer-content {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0 100px 0;
    }
    .footer-border {
        width: 90%;
        height: 1px;
        background-color: #cbcbcb;
    }
    .footer-logo {
        margin-bottom: 16px;
    }
    .footer-nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
    }
    .footer-nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer-nav li {
        margin: 4px;
    }
    .footer-nav a {
        font-family: 'Georgia', sans-serif;
        text-transform: uppercase;
        color: #000;
    }
    a:hover .social-icon {
        color: #222;
    }
    a:hover .fb {
        color: #3b5998;
    }
    a:hover .tw {
        color: #1da1f2;
    }
    a:active .social-icon {
        transform: scale(0.95);
    }
    .footer-socials {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footer-socials h1 {
        font-size: 24px;
        margin: 16px 0 8px 0;
        text-align: right;
    }
    .footer-socials a {
        color: #6e6e6e;
    }
    .footer-socials ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .footer-socials li {
        margin: 4px;
    }
    .social-icon {
        font-size: 24px;
        transition-duration: .2s;
    }
    @media (min-width: 800px) {
        .footer-content {
            flex-direction: row;
            justify-content: space-between;
        }
        .footer-logo {
            margin-left: 25px;
            margin-bottom: 0;
        }
        .footer-nav {
            flex-grow: 2;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .footer-socials {
            margin-right: 25px;
            flex-direction: row;
        }
        .footer-socials h1 {
            font-size: 16px;
            margin: 0 1em 0 0;
        }
    }
</style>
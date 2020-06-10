<template>
    <div>
        <form
                action=""
                @animationend="isNotValid=false"
                v-bind:class="{'submitted': isSubmitted,
                    'error': isNotValid,
                    'error-border': isNotValidBorder,
                    reloaded,
                }"
                v-if="!isSubmitted && !isLoading && !isError">
            <input @input="onChange" type="email" v-model="email" placeholder="You EMail Address...">
            <Button class="subscribe-submit" type="button" v-bind:on-click="onClick">Submit</Button>
        </form>
        <div class="subscribe-loading" v-else-if="isLoading">
            <LoadingBar size="54" thickness="4"/>
        </div>
        <div class="subscribe-error" v-else-if="isError">
            <h1>Something went wrong.<br />Wanna repeat?</h1>
            <button @click="reloadComponent"><font-awesome-icon icon="redo" /></button>
        </div>
        <div class="subscribe-submitted" v-else-if="isSubmitted">
            <h1>You successfully subscribed to our updates!</h1>
        </div>
    </div>
</template>

<script>
import Button from "./Button";
import LoadingBar from "./LoadingBar";
export default {
    name: "SubscribeForm",
    props: [],
    data() {
        return {
            email: "",
            isSubmitted: false,
            isLoading: false,
            isError: false,
            isNotValid: false,
            isNotValidBorder: false,
            reloaded: false,
            timer: null,
        };
    },
    methods: {
        onClick: function() {
            const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if ( this.email.trim() === "" || !this.email.toLowerCase().match(EMAIL_PATTERN) ) {
                this.isNotValid = true;
                this.isNotValidBorder = true;
                return;
            }
            this.isNotValidBorder = false;
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.isError = false;
                this.isNotValid = false;
                this.isNotValidBorder = false;
                this.isSubmitted = true;

                console.log("Subscription submitted!");
            }, 2000 * Math.random());
        },
        onChange: function () {
            const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            this.isNotValidBorder = false;
            if ( this.timer )
                clearTimeout(this.timer);

            this.timer = setTimeout(() => {
                this.isNotValidBorder = this.email.trim() !== "" && !this.email.toLowerCase().match(EMAIL_PATTERN);
            }, 1000);
        },
        reloadComponent: function() {
            this.email = this.email.trim();
            this.isError = false;
            this.isSubmitted = false;
            this.isLoading = false;
            this.isNotValid = false;
            this.isNotValidBorder = false;
            this.reloaded = true;

            if ( this.timer )
                clearTimeout(this.timer);
        },
    },
    components: {
        LoadingBar,
        Button,
    },
}
</script>

<style scoped>
    div {
        max-width: 325px;
        display: flex;
        justify-content: center;
    }
    form {
        max-width: 325px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .error {
        animation: bounce .5s 1 linear;
    }
    .error-border {
        box-shadow: 0 0 4px #f00;
    }
    .reloaded {
        animation: fade .1s 1 linear;
    }
    input[type=email] {
        width: 160px;
        border: 1px solid #000;

        font-family: 'Cairo', sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        line-height: 1em;
        color: #6e6e6e;
        padding: 19px 25px 19px 25px;
        outline: none;
        box-shadow: none;
    }
    input[type=email]:disabled {
         background-color: #dedede;
     }
    .subscribe-submit {
        line-height: 1em;
    }
    .subscribe-submitted {
        max-width: 325px;
        height: 54px;
        animation: submit-text .8s 1 cubic-bezier(0.760, -0.100, 0.000, 1.2);
    }
    .subscribe-submitted h1 {
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
        color: #6e6e6e;
        text-align: center;
    }
    .subscribe-loading {
        width: 325px;
        height: 54px;
    }
    .subscribe-error {
        max-width: 325px;
        height: 54px;
        animation: fade .3s 1 linear;
    }
    .subscribe-error h1 {
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
        text-align: center;
        color: #6e6e6e;
        margin-right: 15px;
    }
    .subscribe-error button {
        width: 54px;
        height: 54px;
        font-size: 18px;
        color: #7f7f7f;
        border: none;
        background: none;
        outline: none;

        transition-duration: .1s;
    }
    .subscribe-error button:hover {
        color: #4c4c4c;
    }
    .subscribe-error button:active {
        transform: scale(0.95);
    }
    @keyframes submit-text {
        from {transform: translateX(1024px); opacity: 0;}
        to {transform: translateX(0%); opacity: 1;}
    }
    @keyframes fade {
        from {opacity: 0}
        to {opacity: 1}
    }
    @keyframes bounce {
        from, 20%, 53%, 80%, to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
        }
        40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(-5px, 0, 0);
        }
        70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(5px, 0, 0);
        }
        90% {
            transform: translate3d(-5px, 0, 0);
        }
    }
</style>
<template>
    <form @focusin="onFocusIn" @focusout="onFocusOut">
        <input type="text" v-model="toSearch" v-bind:placeholder="placeholder">
        <button @click.prevent="onSubmit()"><font-awesome-icon class="search-icon" icon="search"/></button>
        <div class="form-background" :class="{focused}"></div>
    </form>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                toSearch: "",
                focused: false,
                timer: null,
            }
        },
        props: [
            "placeholder",
        ],
        methods: {
            onSubmit() {
                if ( this.toSearch.trim() === "" ) return;
                console.log(`Searching for ${this.toSearch}`);
            },
            onFocusIn() {
                if ( this.timer )
                    clearTimeout(this.timer);

                this.focused = true;
            },
            onFocusOut() {
                if ( this.timer )
                    clearTimeout(this.timer);

                this.timer = setTimeout(() => {
                    this.focused = false;
                });
            },
        },
    }
</script>

<style scoped>
    form {
        height: 32px;
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 25px;
        overflow: hidden;
    }
    input[type="text"] {
        height: 32px;
        border: none;
        background: none;
        font-family: "Georgia", sans-serif;
        text-transform: uppercase;
        font-size: 16px;
        color: #6e6e6e;
        padding: 0 8px 0 16px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        outline: none;
    }
    .form-background {
        position: absolute;
        background-color: #fafafa;
        width: 100%;
        height: 100%;
        z-index: -1;
        transform-origin: right;
        transform: scaleX(0);
        animation: form-compress .3s 1 ease-out;
    }
    .focused {
        animation: form-expand .3s 1 ease-out;
        transform: scaleX(1);
    }
    @keyframes form-expand {
        from {transform: scaleX(0);}
        to {transform: scaleX(1);}
    }
    @keyframes form-compress {
        from {transform: scaleX(1);}
        to {transform: scaleX(0);}
    }
    button {
        width: 32px;
        height: 32px;
        cursor: pointer;
        font-size: 18px;
        color: #6e6e6e;
        background-color: #fafafa;
        border: none;
        outline: none;
        transition-duration: .1s;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    button:hover {
        color: #222222;
    }
    button:active .search-icon {
        transform: scale(0.95);
    }
</style>
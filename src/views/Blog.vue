<template>
    <div class="blog">
        <ul>
            <BlogCard v-for="(item, index) in items"
                      :title="item.title">{{item.desc}}</BlogCard>
        </ul>
    </div>
</template>

<script>
    import BlogCard from "../components/BlogCard";

    export default {
        name: "Blog",
        data() {
            return {
                items: [],
                loading: true,
            };
        },
        mounted() {
            setTimeout(() => {
                this.items = [
                    {title: "Hello, world!", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur dolore eaque eveniet hic iure nam possimus quas reiciendis, sed sit tenetur, ut vero voluptate."},
                    {title: "Lorem ipsum!", desc:"dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis natus reprehenderit!"},
                    {title: "Cool Blog", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque beatae blanditiis consequatur corporis, debitis ea et facere incidunt iste, libero necessitatibus nobis obcaecati perspiciatis unde, vitae? Hic, molestias?"},
                ];
                this.loading = false;
            }, 3000 * Math.random());
        },
        components: {
            BlogCard,
        },
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
        padding: 100px 25px 100px 25px;
    }
    section {
        padding: 0 15px 0 15px;
    }
</style>
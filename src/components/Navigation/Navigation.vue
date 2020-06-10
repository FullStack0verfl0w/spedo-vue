<template>
    <nav>
        <ul>
            <NavigationItem
                v-for="(item, index) in items"
                :key="index"
                :title="item.title"
                :children="item.children"
                :onClick="item.onClick"
                :type="item.type"
                :to="item.to"
                :centered="centered"
            />
        </ul>
    </nav>
</template>

<script>
import NavigationItem from "./NavigationItem";
export default {
    name: "Navigation",
    props: [
        "items",
        "centered",
    ],
    components: {
        NavigationItem,
    },
};
</script>

<style scoped>
    @media (min-width: 800px) {
        ul {
            display: flex;
        }
    }
</style>
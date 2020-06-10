<template>
    <li @mouseover="hover=true" @mouseleave="hover=false">
        <div class="nav-item" :class="{hover, centered}">
            <div>
                <font-awesome-icon v-if="icon" :icon="icon"/>
            </div>
            <a v-if="type === 'link'" :href="to">{{title}}</a>
            <router-link v-else-if="type === 'router'" :to="to">{{title}}</router-link>
            <div class="info-item" v-else>{{title}}</div>
            <font-awesome-icon class="arrow-icon" :class="{'icon-hover': hover}" icon="chevron-down" v-if="children"/>
        </div>
        <transition name="slide">
        <div class="nav-item-children" v-if="children" v-show="hover">
            <ul>
                <NavigationItem
                        v-for="(item, index) in children"
                        :key="index"
                        :title="item.title"
                        :type="item.type"
                        :children="item.children"
                        :onClick="item.onClick"
                        :centered="item.centered"
                        :icon="item.icon"
                        :to="item.to"
                />
            </ul>
        </div>
        </transition>
    </li>
</template>

<script>
export default {
    name: "NavigationItem",
    data() {
        return {
            hover: false,
        };
    },
    props: [
        "title",
        "type",
        "to",
        "onClick",
        "icon",
        "children",
        "centered",
    ],
    components: {
    },
};
</script>

<style scoped>
li {
    position: relative;
    padding: 6px;
    cursor: pointer;
}
a, .info-item {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    color: #6e6e6e;
    padding: 6px;
    transition-duration: .2s;
}
a:hover {
    color: #000;
}
.hover a {
    color: #000;
}
.nav-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.centered {
    justify-content: center;
}
.centered * {
    text-align: center;
}
.nav-item-children {
    display: flex;
    position: absolute;
    overflow: hidden;

    background-color: #fff;
    z-index: 2;
}
.nav-item-children li {
    padding: 10px 0 10px 0;
    width: 320px;
    border-bottom: 1px solid #6e6e6e22;
}
.arrow-icon {
    font-size: 16px;
    color: #6e6e6e;
    transition-duration: .2s;
}
.icon-hover {
    transform: rotateX(180deg);
    color: #000;
}

@media (min-width: 800px) {
    li {
        margin: 0 10px 0 10px;
    }
}
</style>
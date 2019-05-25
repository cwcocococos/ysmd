<template>
    <div class="home">
        <Header></Header>
        <div>
            <router-view></router-view>
        </div>
        <!--<Select></Select>-->
    </div>
</template>

<script>
    import Header from "@/components/Home/Header.vue"
    // import Select from "@/components/Home/Select.vue"
    export default {
        name: "Main",
        components: {
            Header,
            // Select
        }
    }
</script>

<style scoped>
    .home{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        padding-top:0.725rem;
    }
</style>
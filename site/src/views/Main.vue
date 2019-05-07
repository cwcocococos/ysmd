<template>
    <div class="home">
        <div>
            <Home></Home>
        </div>
        <div>
            <Select></Select>
        </div>

    </div>
</template>

<script>
    import Home from "@/components/Home.vue"
    import Select from "@/components/Select.vue"
    export default {
        name: "Main",
        components: {
            Home,
            Select
        }
    }
</script>

<style scoped>
    .home{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
    div:nth-child(2){
        overflow: auto;
    }
</style>
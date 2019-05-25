<template>
    <div></div>
</template>

<script>
    export default {
        name: "is-register",
        mounted(){
            this.$store.commit("OUT_REGISTER");
            this.$router.push("/");
        }
    }
</script>

<style scoped>

</style>
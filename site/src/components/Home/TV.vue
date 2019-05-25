<template>
    <div class="TV">
        <div id="main">
            <section>
                <article>
                    <div class="TV-banner">
                        <img src="@/assets/images/TV-banner.webp" alt="">
                    </div>
                    <div class="sj-tab">
                        <img src="@/assets/images/TV-tab.webp" alt="">
                    </div>
                    <ds></ds>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
    import ds from "@/components/Home/ds"
    export default {
        name: "TV",
        components:{
           ds
        }
    }
</script>

<style scoped>
    .TV{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
    #main{overflow: auto;height: 100%}
    section{
        flex:1;
        background:#efefef;
        overflow:auto;
        padding-bottom:0.5rem;
    }
    .sj-tab img{
        height:0.52rem;
    }

</style>
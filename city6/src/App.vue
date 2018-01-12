<template>
    <div class="wrap">
        <div id="app">
            <my-header></my-header>
            <router-view/>
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
    import Header from '@/header/header'
    import Footer from '@/footer/footer'

    export default {
        name: 'app',
        data(){
            return{

            }
        },
        components: {
            myHeader: Header,
            myFooter: Footer
        }

    }
</script>

<style type="text/scss" lang="scss">
    @import "./style/main";
</style>

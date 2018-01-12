<template>
    <div>

        <div class="banner">
            <img src="../assets/banner10086.jpg" alt="">
        </div>
        <div class="banner-b-txt">DUEABC &nbsp;&nbsp;&nbsp;&nbsp; 解决您在美国留学学习的一切问题</div>
    </div>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .banner{
        position: relative;
        > img{
            width: 100%;
            display: block;
        }
    }
    .banner-b-txt {
        width: 100%;
        height: 80px;
        background-color: #6c7462;
        text-align: center;
        font-size: 30px;
        color: #fff;
        line-height: 2.6em;
    }
</style>

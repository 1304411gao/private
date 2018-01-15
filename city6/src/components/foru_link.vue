<template>
    <li class="li1">
        <a :href="obj.href">
            <img :src="bol? obj.img : obj.hoverImg" :class="{'hoverStyle': !bol}" @mouseover="bol=false" @mouseout="bol=true" alt=""/>
        </a>
    </li>
</template>

<script>
    export default {
        name: "",
        props: ['obj'],
        data(){
            return {
                bol: true,
                reProps: this.obj,
                hoverStyle: {
                    transform: "scale(1.1)"
                }
            }
        }
    }
</script>

<style type="text/scss" lang="scss" scope>
    @import "../style/helpers/mixin";
    .li1{
        width: 25%;
        a{
            display: block;

            > img{
                display: block;
                width: 100%;
                //visibility: hidden;
                @include tsn;
            }

            .hoverStyle{
                @include tsm(scale(1.1));
            }
        }
    }

</style>

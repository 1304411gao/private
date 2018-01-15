<!-- 下拉选框 -->
<template>
    <div class="drop_down" @click.stop="">
        <p @click="isDown = !isDown">{{bindTxt}}<i class="fa fa-sort-desc fa-1x fa-fw"></i></p>
        <ul :class="{'ul-show': isDown}">
            <li @click="selected(n)" :key="n.id" v-for="n of arr">{{n}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["arr"],
        name: "drop_down",
        data(){
            return{
                isDown: false,
                bindTxt: '请选择一个内容'
            }
        },
        methods: {
            selected(_n){
                this.bindTxt = _n;
                this.isDown = false;
            }
        },
        created: function(){

            document.addEventListener("click", ()=>{
                this.isDown = false;
            });
        }

    }
</script>

<style type="text/scss" lang="scss" scope>
    @import "../style/helpers/mixin";
    $border-color: #ccc;
    $txt-color: #797979;
    .drop_down{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 20;
        @include userSelect;

        > p{
            width: 100%;
            height: 100%;
            text-align: center;
            cursor: pointer;
            border: 1px solid $border-color;
            line-height: 3em;
            vertical-align: middle;
            position: relative;
            color: $txt-color;
            > i{
               position: relative;
                top: -3px;
                left: -2px;
            }
        }

        > ul{
            position: absolute;
            left: 0;
            top: 100%;
            width: 100%;
            max-height: 400px;
            background-color: #fff;
            border: 1px solid $border-color;
            @include tsn;
            @include tsm(translateY(30px));
            opacity: 0;
            visibility: hidden;

            > li{
                padding: 3px 0;
                cursor: pointer;
                text-align: center;

                &:hover{
                    color: #fff;
                    background-color: rgba($themeColor, .7);
                }
            }
        }
        > .ul-show{
            @include tsm(translateY(0));
            opacity: 1;
            visibility: visible;
        }
    }
</style>

<template>
    <div class="search-box">
        <div class="input-parent">
            <input @focus="isFocus = true" @blur="isFocus = false" class="text-ip" v-model.trim="k" type="text" placeholder="查找学习资料、习题答案、 教授评价"/>
            <div class="associated" :class="{'associated-show': isFocus}">
                <div v-show="k != ''">
                    <p class="title">选择类型</p>
                    <ul>
                        <li><a href="">在资料中搜索 <strong>{{ k }}</strong> </a></li>
                        <li><a href="">在教授中搜索 <strong>{{ k }}</strong> </a></li>
                        <li><a href="">在课程中搜索 <strong>{{ k }}</strong> </a></li>
                        <li><a href="">在问答中搜索 <strong>{{ k }}</strong> </a></li>
                    </ul>
                </div>
                <div v-show="recommendedArr.length > 0">
                    <p class="title">推荐结果</p>
                    <ul>
                        <li v-for="n of 4"><a href="">推荐结果</a></li>
                    </ul>
                </div>
                <div v-show="historyArr.length > 0">
                    <p class="title">历史记录</p>
                    <ul>
                        <li v-for="n of 4"><a href="">21321</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-p animated overbtn">
            <input @click="" class="btn-ip" type="button" value="搜索"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                //判断是否选中input
                isFocus: false,
                k: '',
                //历史记录数组
                historyArr: [],
                //推荐结果数组
                recommendedArr: [],
            }
        }
    }
</script>

<style type="text/scss" lang="scss" scope>
    /*
        关联搜索框
        高正辉
        2017年09月26日15:54:07
    */
    @import "../style/helpers/mixin";
    .search-box {
        width: 1000px;
        margin: 0 auto;
        margin-top: 70px;
        position: relative;
        z-index: 30;
        height: 80px;
        background-color: #fff;
        @include borderR(8px);
        > .input-parent{
            width: calc(98% - 125px);
            position: relative;

            >.text-ip {
                width: 100%;
                height: 80px;
                line-height: 80px;
                margin: 0 auto;
                display: block;
                border: none;
                padding-left: 30px;
                padding-right: 14px;
                font-size: 16px;
                color: #398bee;
                box-shadow: none;
                @include boxSizing();

                &:focus{
                    @include boxShadow(none);
                    outline: none;
                }
            }
        }
        .btn-p {
            position: absolute;
            top: 11px;
            right: 1%;
            z-index: 3;
            width: 125px;
            height: 55px;
            @include borderR(4px);
            @extend %btnP;
            >.btn-ip {
                display: block;
                width: 125px;
                height: 55px;
                color: #fff;
                font-size: 20px;
                outline: none;
                @include borderR(4px);
                @extend %btn;

                &:hover{
                    background-color: #ff7366;
                }
            }
        }


        .associated{
            visibility: hidden;
            opacity: 0;
            @include tsn(.3s);
            position: absolute;
            top: calc(100% - 10px);
            left: 1%;
            z-index: 30;
            width: 98%;
            height: auto;
            background-color: rgba(#fff, .9);
            @include boxShadow(0 6px 10px rgba(#ccc, .5));

            > div{
                > .title{
                    width: 100%;
                    background-color: #d7d7d7;
                    @include boxSizing;
                    padding: 6px 15px;
                    @include font(16px, #333);
                }

                > ul{

                    li{

                        > a{
                            padding: 0 15px;
                            line-height: 1.7em;
                            display: block;
                            font-size: 14px;
                            color: #595959;
                            @include tsn(.08s);

                            > strong{
                                color: #333;
                            }
                            &:hover{
                                color: #fff;
                                background-color: $themeColor;

                                > strong{
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .associated-show{
            visibility: visible;
            opacity: 1;
        }
    }


    /* 大屏幕 */
    @media (min-width: 1200px){

    }
    @media (max-width: 1000px) {
        .search-box{
            width: 90%;
        }

    }
    /* 平板电脑和小屏电脑之间的分辨率 */
    @media (min-width: 768px) and (max-width: 979px) {

    }

    /* 横向放置的手机和竖向放置的平板之间的分辨率 */
    @media (max-width: 767px) {
        .search-box{
            height: 60px;

            > .input-parent{


                >.text-ip {
                    height: 60px;
                    font-size: 16px;
                }
            }
            .btn-p {
                top: 9px;
                width: 105px;
                height: 40px;

                >.btn-ip {

                    width: 105px;
                    height: 40px;
                    font-size: 16px;
                }
            }

        }
    }

    /* 横向放置的手机及分辨率更小的设备 */
    @media (max-width: 480px) {
        .search-box{
            height: 40px;
            margin-top: 8px;

            > .input-parent{


                >.text-ip {
                    height: 40px;
                    font-size: 12px;
                }
            }
            .btn-p {
                top: 5px;
                width: 80px;
                height: 30px;

                >.btn-ip {

                    width: 80px;
                    height: 30px;
                    font-size: 14px;
                }
            }

        }
        .search-box>.input-parent {
            width: calc(98% - 94px);
            position: relative;
        }
    }
</style>

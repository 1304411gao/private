<template>
    <div>
        <div class="banner">
            <img src="../assets/banner10086.jpg" alt="">
            <div class="banner-search index-load1 load-start">
                <p class="index-banner-tit">A Better Class A Better Choice</p>
                <associated></associated>
            </div>
        </div>
        <div class="banner-b-txt">DUEABC &nbsp;&nbsp;&nbsp;&nbsp; 解决您在美国留学学习的一切问题</div>

        <div class="index-line1 index-line clear">
            <div class="index-line-c clear index-load2 load-start">
                <div class="line1-left">
                    <div class="index-title-style2">
                        提问助教
                        <div class="solid"></div>
                    </div>
                    <div class="left-main">
                        <ul class="line1-left-ul">
                            <li class="clear">
                                <div class="num">
                                    <div>1</div>
                                </div>
                                <div class="pic">
                                    <img src="../assets/ss1.png" alt="">
                                </div>
                                <div class="txt">
                                    <p>提交问题</p>
                                    <span>随时随地获得作业帮助</span>
                                </div>
                            </li>
                            <li class="clear">
                                <div class="num num2">
                                    <div class="">2</div>
                                </div>
                                <div class="pic">
                                    <img src="../assets/ss2.png" alt="">
                                </div>
                                <div class="txt">
                                    <p>获取答复</p>
                                    <span>Tutor时刻准备着为您及时提供解答</span>
                                </div>
                            </li>
                            <li class="clear">
                                <div class="num num3">
                                    <div class="">3</div>
                                </div>
                                <div class="pic">
                                    <img src="../assets/ss3.png" alt="">
                                </div>
                                <div class="txt">
                                    <p>赞一下满意答案</p>
                                    <span>答案满意记得赞一下</span>
                                </div>
                            </li>
                        </ul>
                        <p class="text-center">
                            <a href="filed.html">我要提问></a>
                        </p>
                    </div>
                </div>
                <div class="line1-right">
                    <div class="title">
                        热门问题……
                    </div>
                    <p class="pull-right"><a style="color: #ff8a65">更多问题</a></p>
                </div>
            </div>
        </div>
        <div class="index-line2 index-line clear">
            <div class="index-line-c clear index-load3 load-start">
                <div class="line2-left">
                    <div class="index-title-style2">
                        选课参考
                        <div class="solid"></div>
                        <p>轻松拿A</p>
                    </div>
                    <ul>
                        <li class="clear">
                            <div class="clear">
                                <div class="dian"><div></div></div>
                                <p>评估课程难易度</p>
                            </div>
                        </li>
                        <li class="clear">
                            <div class="clear">
                                <div class="dian"><div></div></div>
                                <p>了解教授偏好</p>
                            </div>
                        </li>
                        <li class="clear">
                            <div class="clear">
                                <div class="dian"><div></div></div>
                                <p>吐槽奇葩课程&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </li>
                        <li class="clear">
                            <div class="clear">
                                <div class="dian"><div></div></div>
                                <p>交换学习资料</p>
                            </div>
                        </li>
                    </ul>
                    <p class="text-center">
                        <a href="professor.html">进入评价></a>
                    </p>
                </div>
                <div class="line2-right">
                    <div class="r-title">
                        <span>课程评价</span>
                        <template v-for="n of 5">
                            <img src="../assets/star1.png" alt="">
                        </template>
                        <strong class="white"></strong>
                        <span class="txt2">教授评价</span>
                        <template v-for="n of 4">
                            <img src="../assets/star1.png" alt="">
                        </template>
                        <img src="../assets/star2.png" alt="">
                    </div>
                    <div class="professor-list" id="index-professor-list" v-cloak>

                        <!--<hot-professor></hot-professor>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="index-line3 index-line clear">
            <div class="index-line-c clear index-load4 load-start">
                <h4 class="index-title-style1">四大模块检索</h4>
                <div class="index-split-style1"></div>
                <div class="index-link4">
                    <ul class="float-tag">
                        <four-link :obj="n" :key="n.id" v-for="n of fourLinkArr"></four-link>
                    </ul>
                </div>
                <p class="text-right">
                    <a href="searchAll.html">进入检索></a>
                </p>
            </div>
        </div>
        <div class="index-line4 index-line clear">
            <div class="index-line-c clear index-load4 load-start">
                <!--第三部分：用户评价-->
                <div class="user-assess index-load4 load-start">
                    <div class="user-assess-main">
                        <h4 class="index-title-style1">用户都是怎么评价DUEABC的？</h4>
                        <div class="index-split-style1"></div>
                        <ul class="index-users clear float-tag">
                            <li>
                                <a href=""><img src="../assets/user1.png"></a>
                                <a href=""><strong>Wang </strong></a>
                                <p>University of Washington</p>
                                <div class="index-user-txt">
                                    终于能看中国学生对美国教授的评价了，选课之前来这里查看一下教授评价和课程评价真的是太需要了，之前看美国人对老师的评价选课，简直不能更坑
                                    <div class="txt-mask"></div>
                                </div>
                                <span>READ MORE</span>
                            </li>
                            <li>
                                <a href=""><img src="../assets/index-usert1.jpg"></a>
                                <a href=""><strong>tianz </strong></a>
                                <p>Georaia State University</p>
                                <div class="index-user-txt">
                                    同班同学功能好赞，再也不用愁找不到一起上课的同学了
                                    <div class="txt-mask"></div>
                                </div>
                                <span>READ MORE</span>
                            </li>
                            <li>
                                <a href=""><img src="../assets/index-usert3.jpg"></a>
                                <a href=""><strong>Victor </strong></a>
                                <p>University of Oregon</p>
                                <div class="index-user-txt">
                                    不会的题目能直接提问，给出回答特别快，不满意还能继续提问，做Quiz再也不用愁了Tutor还给我完整的辅导，真的赞
                                    <div class="txt-mask"></div>
                                </div>
                                <span>READ MORE</span>
                            </li>
                            <li>
                                <a href=""><img src="../assets/index-usert4.jpg"></a>
                                <a href=""><strong>Zheng</strong></a>
                                <p>University of Washington</p>
                                <div class="index-user-txt">
                                    感谢网站整理收集其他用户上传的资料，真是能帮我提前了解下学期的课程，让我上课前有了充分的准备
                                    <div class="txt-mask"></div>
                                </div>
                                <span>READ MORE</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Associated from '@/components/associated'
    import FourLink from '@/components/foru_link'
    export default {
        name: "index",
        data(){
            return{
                /* 首页的四大模块组件props */
                fourLinkArr: [
                    {
                        href: "course.html?page=1&k=",
                        img: "static/img/line3-img_01.png",
                        hoverImg: "static/img/line3-img_01a.png"
                    },
                    {
                        href: "professor.html?page=1&k=",
                        img: "static/img/line3-img_02.png",
                        hoverImg: "static/img/line3-img_02a.png"
                    },
                    {
                        href: "searchResults.html?page=1&k=",
                        img: "static/img/line3-img_03.png",
                        hoverImg: "static/img/line3-img_03a.png"
                    },
                    {
                        href: "question.html?page=1&k=",
                        img: "static/img/line3-img_04.png",
                        hoverImg: "static/img/line3-img_04a.png"
                    },
                ]
            }
        },
        components: {
            associated: Associated,
            fourLink: FourLink
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>
    @import "../style/helpers/mixin";
    .banner {
        position: relative;
        > img {
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

    //搜索
    .banner-search {
        position: absolute;
        top: calc(50% + 70px);
        left: 50%;
        width: 100%;

        @include tsm(translate(-50%, calc(-50% - 35px)));

        .index-banner-tit {
            text-align: center;
            color: #191919;
            font-size: 50px;
            text-shadow: 0 1px 6px rgba(102, 102, 102, 0.7);
            //margin-top: 50px;
        }
    }



    /* 复制一箩筐 */

    .index-line{
        .index-title-style1 {
            font-size: 36px;
            color: #000;
            text-align: center;
            line-height: 40px;
            font-weight: normal;
        }
        .index-split-style1 {
            width: 80px;
            height: 5px;
            background-color: #ff8a65;
            margin: 20px auto 48px;
        }

        > .index-line-c{
            width: 1100px;
            margin: 0 auto;
            height: 600px;
            @include boxSizing;

            > .pic{
                width: 43%;
                float: left;

                > .img1{
                    width: 100%;
                    margin-top: 83px;
                }
                > .img2{
                    width: 40%;
                    margin: 10px auto;
                    display: block;
                }
            }

            > .txt{
                width: 57%;
                float: left;
                margin-top: 220px;
                p{
                    color: #333333;
                    font-size: 24px;
                    width: 87%;
                    margin: 0 auto;
                }

                a{
                    float: right;
                    color: $themeColor;
                    margin-right: 10%;
                    margin-top: 80px;
                }
            }
        }
    }
    .index-line1{
        background-color: #fff;

        .line1-left{
            float: left;
            width: 40%;
            padding-top: 65px;

            .left-main{
                display: block;
                width: 100%;
                min-height: 200px;

                > p{
                    margin-top: 30px;
                    padding-right: 20px;
                }
                > p > a{
                    font-size: 20px;
                    text-align: left;
                    color: #ff8a65;
                }
            }


        }
        .line1-left-ul{
            margin-top: 40px;
            > li{
                margin-bottom: 35px;
                > .num, .pic, .txt{
                    float: left;
                }
                > .num{
                    width: 44px;
                    height: 44px;
                    @include borderR(50%);
                    border: 1px solid #cccccc;
                    text-align: center;
                    padding: 8px;
                    @include boxSizing;
                    margin-top: 5px;
                    position: relative;

                    &:after{
                        content: "";
                        display: block;
                        height: 32px;
                        width: 2px;
                        background-color: #b3b3b3;
                        position: absolute;
                        bottom: -40px;
                        left: 50%;
                        margin-left: -1px;
                    }
                    > div{
                        width: 100%;
                        height: 100%;
                        background-color: #00b9e7;
                        @include borderR(50%);
                        color: #fff;
                        line-height: 1.8em;
                    }

                }
                > .num2 > div{
                    background-color: #e5009c;
                }
                > .num3 > div{
                    background-color: #00ba33;
                    &:after{
                        display: none;
                    }
                }
                > .num3{
                    &:after{
                        display: none;
                    }
                }
                > .pic{
                    width: 52px;
                    margin-left: 30px;
                    margin-top: 4px;
                    text-align: center;

                    > img{
                        height: 44px;
                    }
                }
                > .txt{
                    margin-left: 20px;
                    text-align: left;
                    > p{
                        color: #333333;
                        font-size: 24px;
                        line-height: 1em;
                        padding-bottom: 10px;
                    }
                    > span{
                        color: #737373;
                        line-height: 1em;
                    }
                }
            }

            > li:last-child{
                margin-bottom: 0;
            }
        }
        .line1-right{
            float: left;
            width: 57%;
            padding-left: 3%;
            padding-top: 127px;

            > .title{
                font-size: 26px;
                line-height: 1.08em;
                color: #05356c;
            }

            > ul{
                margin-top: 30px;
                li{
                    margin-bottom: 15px;
                    > p{
                        color: #05356c;
                        @include textOver;
                        font-size: 16px;
                        line-height: 1.56em;
                        padding-bottom: 3px;

                        > a{
                            color: #05356c;
                        }
                    }
                    > .renshu{
                        text-align: right;
                        font-size: 13px;
                        color: #666666;
                    }
                }
            }
        }

    }

    .index-title-style2{
        font-size: 36px;
        line-height: 1.11;
        text-align: left;
        color: #000000;
        display: inline-block;

        > p{
            font-size: 20px;
            line-height: 1em;
            color: #000000;
            text-align: center;
            margin-top: 12px;
        }

        > .solid{
            width: 80px;
            height: 5px;
            background-color: #ff8a65;
            margin: 20px auto 0 auto;
        }
    }
    .index-line2{
        background-color: #e8e8e4;

        > .index-line-c{
            height: 640px;
            .line2-left{
                float: left;
                width: 40%;
                padding-top: 65px;


                > ul{
                    margin-top: 60px;
                    padding-left: 60px;
                    > li{
                        margin-bottom: 15px;

                        > div{

                            > *{
                                float: left;
                                vertical-align: middle;
                            }
                            > .dian{
                                width: 13px;
                                height: 13px;
                                @include borderR(50%);
                                padding: 2px;
                                @include boxSizing;
                                border: 1px solid #ccc;
                                position: relative;
                                top: 7px;
                                > div{
                                    width: 100%;
                                    height: 100%;
                                    @include borderR(50%);
                                    background-color: $themeColor;
                                }
                            }
                            > p{
                                font-size: 24px;
                                line-height: 1em;
                                color: #333333;
                                padding-left: 10px;
                            }
                        }
                    }
                }

                > p{
                    margin-top: 30px;
                    padding-right: 20px;
                }
                > p > a{
                    font-size: 20px;
                    text-align: left;
                    color: #ff8a65;
                }
            }

            .line2-right{
                float: left;
                width: 60%;
                padding-top: 50px;
                text-align: center;

                > .r-title{
                    font-size: 28px;
                    line-height: 1em;
                    color: #333333;

                    >img{
                        width: 25px;
                        margin-right: 5px;
                    }

                    > .txt2{
                        margin-left: 15px;
                    }
                }

                #index-professor-list{
                    margin-top: 50px;
                    >ul>li{
                        width: 50%;
                    }
                    >ul .actual-area{
                        width: 70%;
                    }
                    >ul .actual-area .bottom{
                        background-color: #fff;
                    }

                    >ul .actual-area .bottom>a:after{
                        display: none;

                    }
                    >ul .actual-area>.top .tou{
                        width: 26%;
                    }
                    >ul .actual-area>.top .info{
                        width: 69%;
                    }
                }
            }
        }
    }
    .index-line3{
        background-color: #fff;
        > .index-line-c{
            padding-top: 60px;
            height: 650px;



            > p{
                margin-top: 20px;
            }

            > p > a{
                font-size: 20px;
                text-align: left;
                color: #ff8a65;
            }

            .index-link4{
                width: 90%;
                margin: 0 auto;
                position: relative;


                ul{
                    li{
                        width: 25%;
                    }
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

            }
        }

    }
    .index-line4{
        //第三部分：用户评价
        background-color: #f5ede7;
        > .index-line-c{
            padding-top: 20px;
        }
        .user-assess {
            margin-top: 60px;
            .user-assess-main {
                width: 1100px;
                margin: auto;
                .index-users {
                    >li {
                        width: 203px;
                        //height: 272px;
                        @include borderR(4px);
                        background-color: #ffffff;
                        border: solid 1px #d9d9d9;
                        border-top: 4px #29b6f6 solid;
                        text-align: center;
                        margin-left: 15px;
                        margin-right: 15px;
                        padding: 20px;
                        >a {
                            display: block;
                        }
                        img {
                            width: 60px;
                            height: 60px;
                            margin-bottom: 10px;
                            @include borderR(50%);
                        }
                        strong {
                            font-size: 15px;
                            color: #000;
                            margin-bottom: 6px;
                        }
                        p {
                            font-size: 13px;
                            color: #999;
                            margin-bottom: 20px;
                        }
                        .index-user-txt {
                            width: 100%;
                            height: 122px;
                            overflow: hidden;
                            font-size: 13px;
                            line-height: 22px;
                            color: #999;
                            text-align: left;
                            position: relative;
                            margin-bottom: 17px;
                            .txt-mask {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                z-index: 1;
                                background: -webkit-linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
                                background: -o-linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
                                background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
                            }
                            .txt-mask-hide{
                                opacity: 0;
                            }
                        }
                        .read-more {
                            font-size: 13px;
                            color: #ff8a65;
                            cursor: pointer;
                        }
                        .read-more-hide {
                            visibility: hidden;
                        }
                    }
                    >li:nth-child(2) {
                        border-top: 4px #f04d4e solid;
                    }
                    >li:nth-child(3) {
                        border-top: 4px #ccdb38 solid;
                    }
                    >li:nth-child(4) {
                        border-top: 4px #fecc17 solid;
                    }
                }
            }
        }
    }
    @media (max-width: 1100px) {
        .index-line{


            > .index-line-c{
                width: 100%;
                margin: 0 auto;
                height: auto;
                padding: 30px;


            }
        }

        .banner-b-txt{
            height: 60px;
            font-size: 24px;
        }


        .index-line4 {
            .user-assess {
                .user-assess-main {
                    width: 100%;
                    >h4 {
                        font-size: 34px;
                    }
                    .index-users {
                        width: 100%;
                        >li {
                            width: calc(23% - 42px);
                            margin-left: 1%;
                            margin-right: 1%;
                        }
                    }
                }
            }
        }
        .index-line1 .line1-left{
            padding-top: 25px;
            width: 50%;
        }

        .index-line1 .line1-right{
            padding-top: 35px;
            width: 50%;
            padding-left: 0;
        }
    }
    @media (max-width: 979px) {
        .index-line4 {
            .user-assess {
                .user-assess-main {
                    > h4 {
                        font-size: 28px;
                        line-height: 30px;
                    }
                    .index-users {
                        width: 100%;
                        > li {
                            width: calc(48% - 42px);
                            margin: 0 1% 20px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 880px) {
        .banner-b-txt {
            height: 50px;
            font-size: 19px;
        }
        .index-line1 .line1-left{
            //float: right;
            width: 100%;
        }
        .index-line1 .line1-right{
            width: 100%;
            //float: right;
        }
        .index-title-style2{
            display: block;
            text-align: center;
        }
        .index-line1 .line1-left .left-main{
            text-align: center;

            > ul{
                display: inline-block;
            }
        }
        .index-line2>.index-line-c{
            .line2-left{
                width: 100%;
                padding-top: 15px;

                > ul{
                    overflow: hidden;
                    padding-left: 0;
                    > li{
                        float: left;
                        width: 50%;
                        text-align: center;

                        > div{
                            display: inline-block;
                        }
                    }
                }
            }
            .line2-right{
                width: 100%;

                >.r-title>.txt2{
                    margin-left: 50px;
                }
            }
        }
    }

    @media (max-width: 740px) {

        .index-line2>.index-line-c .line2-right>.r-title{
            font-size: 23px;
        }
        .index-line2>.index-line-c .line2-right>.r-title>img{
            width: 19px;
        }
        .index-line2>.index-line-c .line2-right #index-professor-list>ul .actual-area{
            width: 90%;
        }
        .index-line2>.index-line-c .line2-right>.r-title>.txt2{
            margin-left: 25px;
        }

    }
    @media (max-width: 600px) {
        .banner-b-txt {
            height: 35px;
            font-size: 14px;
        }
        .index-line1 .line1-left{
            padding-top: 0;
        }
        .index-line2>.index-line-c .line2-left{
            padding-top: 0;
        }
        .index-line1 .line1-right>ul li>p{
            font-size: 14px;
        }
        .index-line1 .line1-right>ul li>.renshu{
            font-size: 12px;
        }
        .index-line1 .line1-left-ul>li>.pic{
            margin-left: 10px;
        }
        .index-line1 .line1-left-ul>li>.txt{
            margin-left: 10px;
        }
        .professor-list>ul .actual-area .bottom>a>p{
            font-size: 12px;
        }
        .index-line2>.index-line-c .line2-right>.r-title{
            font-size: 18px;
        }
        .banner-video {
            //margin-top: 59px;
            .banner-search {
                .index-banner-tit {
                    font-size: 18px;
                }

            }
        }
        .index-title-style2{
            font-size: 30px;
        }
        .index-title-style1{
            font-size: 30px;
        }
        .index-line2>.index-line-c .line2-left>ul{
            margin-top: 20px;
        }
        .index-line2>.index-line-c .line2-left>ul>li>div>p{
            font-size: 18px;
        }
        .index-line2>.index-line-c .line2-left>p{
            margin-top: 0;
        }
        .index-line2>.index-line-c .line2-right{
            padding-top: 20px;
        }
        .index-line2>.index-line-c .line2-right #index-professor-list{
            margin-top: 15px;
        }
        .r-title > .white{
            display: block;
            width: 100%;
            height: 10px;
        }
        .index-line2>.index-line-c .line2-right>.r-title>.txt2{
            margin-left: 0;
        }
    }
    @media (max-width: 480px) {
        //banner
        .banner-video {
            //margin-top: 59px;
            .banner-search {
                .index-banner-tit {
                    font-size: 18px;
                }

            }
        }

        .index-title-style2, .index-title-style1{
            font-size: 24px;
        }
        .index-line1 .line1-left-ul>li>.txt>p{
            font-size: 19px;
        }
        .index-line1 .line1-left-ul>li>.txt>span{
            font-size: 14px;
        }
        .index-line1 .line1-left-ul>li>.pic>img{
            height: 35px;
        }
        .index-line1 .line1-left-ul>li>.pic{
            display: none;
        }
        .index-line1 .line1-left-ul>li{
            margin-bottom: 10px;
        }
        .index-line1 .line1-left-ul>li>.num:after{
            display: none;
        }
        .index-line1 .line1-left-ul>li>.num{
            width: 40px;
            height: 40px;
            font-size: 12px;
        }
        .index-line1 .line1-right>.title{
            font-size: 18px;
        }
        .index-line1 .line1-right>ul{
            margin-top: 15px;
        }
        .index-line1 .line1-right>ul li{
            margin-bottom: 6px;
        }
        .index-line1 .line1-left .left-main>ul{
            margin-top: 20px;
        }
        .banner-b-txt {
            height: 30px;
            font-size: 12px;
        }
        .index-line .index-title-style1{
            font-size: 24px;
        }
        .index-line2>.index-line-c .line2-right #index-professor-list>ul>li {
            width: 100%;
        }
        .index-line2>.index-line-c .line2-right #index-professor-list>ul .actual-area{
            width: 77%;
        }
        .index-line2>.index-line-c .line2-left>ul>li>div>p {
            font-size: 14px;
            padding-left: 2px;
        }
        .index-line2>.index-line-c .line2-left>ul>li>div>.dian{
            top: 0;
        }
        //第三部分：用户评价
        .index-line4 {
            .user-assess {
                .user-assess-main {
                    >h4 {
                        font-size: 24px;
                        line-height: 30px;
                    }
                    >.split {
                        margin: 10px auto 40px;
                    }
                    .index-users {
                        width: 90%;
                        margin: auto;
                        >li {
                            width: calc(100% - 42px);
                            float: none;
                            margin: auto;
                            margin-bottom: 15px;
                        }
                    }
                }
            }
        }

    }

    @media (max-width: 360px) {
        .index-line1 .line1-left-ul>li{
            text-align: center;

            >.txt {
                width: 100%;
                text-align: center;
            }

            >.num{
                float: none;
                margin: 0 auto;
                margin-bottom: 6px;
            }
        }
        .index-line2>.index-line-c .line2-right #index-professor-list>ul .actual-area{
            width: 85%;
        }
    }
</style>

<template>
    <div class="header">
        <div class="header-c">
            <div class="user-btn clear">
                <div class="login-btn"><router-link to="/">登录</router-link></div>
                <div class="reg-btn"><router-link to="/">注册</router-link></div>
            </div>
            <router-link to="/" class="logo">
                <img src="../assets/logo.png" alt="">
            </router-link>
            <div class="nav">
                <ul class="float-tag">
                    <li v-for="n of navData"
                        :class="$route.name == n.name? 'active':''"
                        :key="n.id"><router-link
                        :to="n.link">{{ n.title }}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Index",
        data(){
            return{
                navData: [
                    {link: '/', title: '首页', name: 'Index'},
                    {link: '/about', title: '上传资料', name: ''},
                    {link: '/about', title: '搜索资料', name: ''},
                    {link: '/filed', title: '提问助教', name: 'Filed'},
                    {link: '/about', title: '评价课程/教授', name: ''},
                    {link: '/about', title: '关于我们', name: 'About'},
                ]
            }
        },
        methods: {

        },
        created: function(){

        },
    }
</script>

<style type="text/scss" lang="scss" scoped>
    @import "../style/helpers/mixin";
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        background-color: rgba(#000, .7);


        .logo{
            display: block;
            width: 80px;
            float: left;
            margin: 15px;

        }
        > .header-c{
            width: 1080px;
            height: 70px;
            margin: 0 auto;
        }

        .nav{
            float: left;
            height: 100%;
            margin-bottom: 0;

            ul{
                padding-top: 30px;
            }

            li{
                height: 100%;
                > a{
                    width: 100%;
                    height: 100%;
                    display: block;
                    padding: 0 20px;
                    font-size: 16px;
                    color: #fff;
                    @include tsn(.3s);

                    &:hover{
                        color: $themeColor;
                    }
                }
            }
            .active > a{
                color: $themeColor;
            }
        }


        .user-btn{
            float: right;

            > div{
                float: left;
                margin-right: 15px;
                font-size: 16px;
                margin-top: 28px;

                a{
                    color: white;
                    line-height: 1em;
                    @include tsn;
                }
            }

            > .reg-btn > a{
                padding: 9px 21px;
                border: 1px solid #fff;
                @include borderR(100px);

                &:hover{
                    color: #ffffff;
                    background-color: $themeColor;
                    border-color: $themeColor;
                }
            }

            > .login-btn > a:hover{
                color: $themeColor;
            }
        }
    }
</style>

<template>
    <div class="footer">
        <div class="footer-main">
            <div class="footer-top clear">
                <div v-for="n of items">
                    <h4>{{ n.title }}</h4>
                    <ul>
                        <li v-for="i of n.arr"><a :href="i.href">{{ i.text }}</a> </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div>
                    <a href=""><img class="footer-img1" src="../assets/footer-1.png" alt=""></a>
                    <a href=""><img class="footer-img2" src="../assets/footer-2.png" alt=""></a>
                    <a href=""><img class="footer-img3" src="../assets/footer-3.png" alt=""></a>
                </div>
                <p>© 2003-2017 DUEABC Inc. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data: function () {
            return {
                items: [
                    {
                        title: "COMPANY",
                        arr: [
                            {
                                href: "about.html",
                                text: "About Us"
                            },
                            {
                                href: "",
                                text: "Terms of Use"
                            },
                            {
                                href: "",
                                text: "Privacy Policy"
                            },
                            {
                                href: "",
                                text: "Copyright Policy"
                            }
                        ]
                    },
                    {
                        title: "CAREERS",
                        arr: [
                            {
                                href: "",
                                text: "Our Values"
                            },
                            {
                                href: "",
                                text: "Jobs"
                            },
                            {
                                href: "",
                                text: "Internship"
                            }
                        ]
                    },
                    {
                        title: "HELP",
                        arr: [
                            {
                                href: "",
                                text: "Contact Us"
                            },
                            {
                                href: "",
                                text: "Give Us Feedback"
                            },
                            {
                                href: "",
                                text: "Become a Tutor"
                            }
                        ]
                    },
                    {
                        title: "LEAENING SERVICES",
                        arr: [
                            {
                                href: "",
                                text: "Find Your Resources"
                            },
                            {
                                href: "",
                                text: "Online Tutoring"
                            },
                            {
                                href: "",
                                text: "Course Reviewing"
                            },
                            {
                                href: "",
                                text: "Course Manager"
                            }
                        ]
                    },
                    {
                        title: "CONNECT WITH US",
                        arr: [
                            {
                                href: "",
                                text: "Wechat Official Account"
                            },
                            {
                                href: "",
                                text: "E-mail"
                            },
                            {
                                href: "",
                                text: "Weibo"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style type="text/scss" lang="scss" scope>
    .footer{
        width: 100%;
        //margin-top: 80px;
        background-color: rgba(#000, .65);
        .footer-main{
            width: 1000px;
            margin: auto;
            padding: 18px 50px 37px;
            .footer-top{
                >div{
                    //width: 20%;
                    float: left;
                    margin-right: 50px;
                    >h4{
                        font-size: 19px;
                        color: #ffffff;
                        line-height: 28px;
                    }
                    >ul{
                        >li{
                            >a{
                                font-size: 16px;
                                line-height: 28px;
                                color: #ccc;
                                font-weight: normal;
                            }
                        }
                    }
                }
                >div:last-child{
                    margin-right: 0;
                }
            }
            .footer-bottom{
                margin-top: 30px;
                >div{
                    >a{
                        display: inline-block;
                        margin-right: 30px;
                        >img{

                        }
                    }
                }
                >p{
                    font-size: 13px;
                    color: #ccc;
                    text-align: right;
                }

                .footer-img1{
                    width: 85px;
                }
                .footer-img2{
                    width: 69px;
                }
                .footer-img3{
                    width: 55px;
                }
            }
        }
    }

</style>

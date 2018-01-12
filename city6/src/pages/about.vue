<template>
    <div class="about-c">
        <div class="valid">
            <h2 class="title">Abuout Us</h2>
            <p class="txt">Dueabc是一家新兴的综合性教育系统平台，一站式解决留学生在学习过程中遇到各种问题，为海外学子提供学习资料检索、课程论文辅导、选课教授推荐等相关服务。Dueabc集合海外的学习资料，课程评价，教授评分等相关资源，提供最强大的检索功能，答疑功能，教授推荐以及模拟选课功能。作为第一家综合性学习教育网站，Dueabc不仅在您赶due时为您提供专业性的帮助，还充分利用大数据分析，为您提供最优化最合理并且最符合中国留学生需求的选课方案，同时为您显示来自本校同学的教授评价以及课程评价。除此之外，Dueabc还配备了强大专业的问答团队，及时高效的解决您在学习中碰到的各种问题，给您提供满意的解决方案。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style type="text/scss" lang="scss" scoped>
    @import "../style/helpers/mixin";

    .about-c{
        margin-top: 100px;

        > .valid{
            padding: 50px 0;
            @include boxShadow(0 0 40px rgba(54,67,77,0.2));
        }
        .title{
            font-size: 30px;
            line-height: 1em;
            margin-bottom: 50px;
            color: $themeColor;
            text-align: center;
        }
        .txt{
            width: 80%;
            margin: 0 auto;
            font-size: 18px;
            line-height: 40px;
        }
    }

</style>

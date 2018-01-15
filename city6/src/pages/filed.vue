<template>
    <div>
        <small-banner></small-banner>
        <div class="content">
            <h2 class="filed-tit">写下你的问题</h2>
            <div class="color-slide"></div>
            <p class="filed-tit2">描述精确的问题更易得到解答</p>

            <div class="title-edit clear">
                <div class="left">
                    <drop-down :arr="arr"></drop-down>
                </div>
                <div class="right">
                    <input type="text" placeholder="请输入标题">
                </div>
            </div>
            <vue-editor :formula="formula" :placeholder="'请输入问题描述'" v-model="content" :editorToolbar="customToolbar"></vue-editor>
            <div class="btns clear">
                <div>
                    <span class="btn-p">
                        <button><i aria-hidden="true" class="fa fa-paperclip fa-1x fa-fw"></i>上传附件</button>
                    </span>
                </div>
                <div>
                    <span class="btn-p">
                        <button><i aria-hidden="true" class="fa fa-floppy-o fa-1x fa-fw"></i>暂时保存</button>
                    </span>
                </div>
                <div>
                    <span class="btn-p">
                        <button><i aria-hidden="true" class="fa fa-pencil-square-o fa-1x fa-fw"></i>提交问题</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SmallBanner from '@/components/small_banner'
    import {VueEditor} from 'vue2-editor'
    /* 下拉框 */
    import DropDown from  '@/components/drop_down'

    export default {
        name: "",
        data() {
            return {
                content: '',
                formula: true,
                customToolbar: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                    ['formula'],
                    ['clean']                                         // remove formatting button
                ],
                /* 选项 */
                arr: [
                    "选项1",
                    "选项2",
                    "选项3",
                    "选项4",
                    "选项5"
                ]


            }
        },
        components: {
            smallBanner: SmallBanner,
            vueEditor: VueEditor,
            dropDown: DropDown
        }
    }
</script>

<style type="text/scss" lang="scss" scope>

    @import "../style/helpers/mixin";
    .filed-tit {
        line-height: 1em;
        font-size: 30px;
        padding-bottom: 14px;
        text-align: center;
        margin-top: 20px;
    }

    .color-slide {
        width: 60px;
        height: 5px;
        margin: 0 auto;
        background-color: #ff8a65;
    }

    .filed-tit2 {
        text-align: center;
        font-size: 18px;
        color: #666666;
        margin-top: 14px;
        margin-bottom: 35px;
    }

    .btn-p{
        @extend %btnP;
        width: 120px;
        height: 40px;
        display: block;

        > button{
            @extend %btn;
            width: 120px;
            height: 40px;
            font-size: 16px;
            color: #ffffff;
        }
    }

    .title-edit{
        margin-bottom: 20px;
        > .left{
            width: 235px;
            height:40px;
            float: left;
            @include boxSizing;
        }
        > .right{
            margin-left: 250px;
            height: 40px;

            > input{
                @include boxSizing;
                width: 100%;
                height: 100%;
                padding: 0 10px;
                margin-bottom: 0;
                outline: none;
                @include borderR(0);
                @include boxShadow(none);
                border: 1px solid #ccc;

                &:focus{
                    border-color: #ccc;
                }
            }
        }
    }

    .btns{
        margin-top: 25px;
        > div{
            float: left;
            width: 33.333333%
        }
        > div:nth-child(2){
            > span{
                margin: 0 auto;
            }
        }
        > div:nth-child(3){
            > span{
                margin: 0 0 0 auto;
            }
        }
    }
</style>

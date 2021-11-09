<script setup>
	import { ref } from 'vue'

	defineProps({
		msg: String,
		myName:String
	})

	const count = ref(0)
	import subTab from '../../components/subTab.vue'
</script>

<template>
    <div class="category-box">
        <div class="cate-contain">
            this is account page。...
        </div>
        <!--底部选项卡-->
        <subTab class="footer"></subTab>
    </div>
</template>

<style scoped lang="less">
    .category-box{
        display: flex;
        flex-direction: column;
        height: 100vh;
        .cate-contain{
            -webkit-box-flex: 1.0;
            -moz-flex-grow: 1;
            -webkit-flex-grow: 1;
            flex-grow: 1;/*子元素伸缩，柔性相对*/

            padding: 30px;
            box-sizing: border-box;
            color: #333333;
            background: yellow;
            a {
                color: #42b983;
            }
        }
        .footer{
            height: 150px;
            background: red;
        }
    }
</style>

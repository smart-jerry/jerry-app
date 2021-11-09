<script setup>
	import { ref, computed, reactive,watch } from 'vue'
	import subTab from '../../components/subTab.vue'
    let num = ref(1);// num从1开始
	const changeNum = ()=>{
		num.value ++;
		console.log('change num....' + num.value);

    }

    /*
    * computer的案例
    * */
    let myCount = ref(0);
	let myinput =ref(1);
	const countFun = computed({
		get:()=>{
			myCount.value;
        },
        set:(val)=>{
			myCount.value = val + 1;
        }
    })
	const changeFun = ()=>{
		console.log(myinput.value+'==============');
		countFun.value = parseInt(myinput.value);
    }


    /*
    * watch案例
    * 监听一个对象
    *
    * */
	let stateW = reactive({
		count : 0,
		person : {
			name : 'lily',
			age  : 3
		}
	});
	let hi = ref('this is hi');
	watch(
		() => stateW,
		(stateW, preStateW) => {
			console.log(88);
			// 监听值的变化做一些操作
			hi.value = stateW.person.age + '======' + preStateW.count
			console.log(hi.value);
		},
		{deep : true}/*设置深度监听*/
	)

	const changeStateW = () => {
		stateW.person.age++;
		console.log(stateW);
	}
</script>

<template>
    <div class="index-box">
        <div class="index-contain">
            <div>这里是setup标签的script</div>
            <div>底部选项卡组件里有生命周期引用</div>
            <div style="padding: 20px; background: #f2f2f2; color: #333333">
                {{num}}<br>
                <button @click="changeNum()">我是button，点我</button>
            </div>
            <div class="computed-box">
                这里是computed例子,根据输入修改值
                <div>myCount：{{myCount}}</div>
                <input type="number" v-model="myinput" />
                <button @click="changeFun()">修改countFun的值</button>
            </div>
            <div class="watch-box">
                监听一个getter或者ref
                <div>{{hi}}</div>
                <button @click="changeStateW()">改变stateW的值</button>
            </div>
        </div>
        <!--底部选项卡-->
        <subTab class="footer"></subTab>
    </div>

</template>

<style scoped lang="less">
    .index-box{
        display: flex;
        flex-direction: column;
        height: 100vh;
        .index-contain{
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
            button{
                border: 1px solid #d5d5d5;
                padding: 30px;
                font-size: 2.4rem;
                background: #ffffff;
            }
            .computed-box{
                background: #f2f2f2;
                padding: 30px;
                box-sizing: border-box;
                border-top: 1px solid #d5d5d5;
            }
            .watch-box{

            }
        }
        .footer{
            height: 150px;
            background: lightgoldenrodyellow;
        }
    }

</style>

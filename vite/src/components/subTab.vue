<script setup>
    import { defineProps,onBeforeMount,onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,onRenderTracked,onRenderTriggered} from 'vue';
    // 1，数据申明，即data
	let tabList = [
		{'icon'    : '../assets/logo.png',
			'name' : 'home',
			'id'   : 0
		},
		{'icon'    : '../assets/logo.png',
			'name' : 'category',
			'id'   : 1
		},
		{'icon'    : '../assets/logo.png',
			'name' : 'carts',
			'id'   : 2
		},
		{'icon'    : '../assets/logo.png',
			'name' : 'account',
			'id'   : 5
		}
	];
	// 2, defineProps 和 defineEmits API 来声明 props 和 emits
	defineProps({
		tabList  : Array
	})


    // 3， 生命周期钩子函数，不需要import
    onMounted(()=>{
	    console.log('钩子函数--onMounted执行了');
    })
    onBeforeMount(()=>{
	    console.log('钩子函数--beforeMount');
    })
    onBeforeUpdate(()=>{
	    console.log('钩子函数--beforeUpdate');
    })
    onUpdated(()=>{
	    console.log('钩子函数-- updated');
    })
    onBeforeUnmount(()=>{
	    console.log('钩子函数-- beforeUnmount');
    })
    onUnmounted(()=>{
	    console.log('钩子函数-- unmounted');
    })
    onRenderTracked(()=>{
	    console.log('钩子函数-- renderTracked');
    })
    onRenderTriggered(()=>{
	    console.log('钩子函数-- renderTriggered');
    })
</script>
<template>
    <div class="tab-box">
        <div>
            <router-link :to="{ name: item.name}" v-for="item in tabList" :key="item.id">
                <div><img alt="Vue logo" :src="item.icon"/></div>
                <p>{{item.name}}</p>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="less">
    .router-link-active {
        color: #ffffff;
        background: #333333;
    }

    .tab-box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
        div {
            width: 100%;
        }
        a {
            width: 25%;
            height: 100%;
            box-sizing: border-box;
            text-align: center;
            display: inline-block;
            align-self: baseline;
            padding: 10px 0;
            div {
                max-height: 50px;
                margin-bottom: 10px;
            }
            p {
                text-align: center;
            }
        }
    }
</style>
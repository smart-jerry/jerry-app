# jerry-app
研究vite， ssr， quasar，tailwind，fastify，puppeteer



# vite
https://cn.vitejs.dev/guide/#browser-support


## 配置
####环境要求：
node：12.18.0\
yarn：1.15.2

#### 安装、构建、运行
```
nvm install v12.18.0

yarn install

yarn dev
yarn build

http://127.0.0.1:3000

```

#### 项目集成

vue3

vite

typescript

## 旅途
#### 1， 引入less
```
yarn add less -D
yarn add less-loader -D

// 页面中：
import './assets/styles/base.less'
<style scoped lang="less"></style>
```

#### 2, 引入路由
引入路由4.0.11
```
yarn add vue-router@4.0.11

// 引用
createApp(App)
	.use(Router)
.mount('#app')
```

#### 3， 引入store


#### 4， 引入国际化

#### 5，





#### 遇到的问题
#####1， 在vite-ts项目中引入less后页面报错：\
错误： [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.\
查：\
(1,)less 和 less-loader要在devDependencies里面\
(2,) less 和 less-loader版本匹配问题，less 4.1.1对应less-loader 10.XX 会报错\
yarn remove less-loader\
yarn add less-loader@7.3.0 -D

注意：\
在vite项目中引入less页面正常显示

##### 2, 引入路由报错
错误：\
events.js:292\
 throw er; // Unhandled 'error' event\
.....\
Emitted 'error' event on ChildProcess instance at:\

解决方案：
```
在当前项目目录下运行下面的命令：
node node_modules/esbuild/install.js
```


#####3, setup函数中num无法自增，且显示有问题？
解决：自增应该是num.value++;而不是num++\
console.log(num.value)\
页面引用：{{num}}\
因为：通过ref包裹的数据需要使用.value来取得相应的值


##### 4， 自定义响应式变量
ref：num = 1; // 报错。
let num = ref(1);// 正常

##### 5, setup应用相关
定义的生命周期created:{}放在其他生命周期后面，就在后面执行，生命周期的钩子函数没有用。\
######5.1, setup的理解
setup在created和beforecreated之前，常常用来代替created和beforeCreated。
但在setup函数中无法访问this，setup里可以通过以下hook操作组件的整个生命周期。
onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTracked,onRenderTriggered\
https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90

###### 5.2 setup使用
生命周期调用：
```
// 带有setup的script
<script setup>
import {onMounted} from 'vue'

onMounted(()=>{
	console.log('生命周期onMounted');
})
</script>
```
```
// 普通script
<script>
import {onMounted} from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('Component is mounted!')
    })
  }
}
</script>
```

组件引用：

```
// setup函数中可以通过import导入后可直接使用，普通script标签，需要写入components:{subTab}中
// 例子：首页，category页面
<script setup>
import subTab from '../../components/subTab.vue'
</script>
```
声明响应式变量<--->方法调用
```
// 见index/index.vue页面
import {ref} from 'vue';
let num = ref(1);// num从1开始
	const changeNum = ()=>{
		num.value ++;
		console.log('change num....' + num.value);

    }

```

computer和watch应用
```
// computed
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

```
https://v3.cn.vuejs.org/api/computed-watch-api.html#%E4%BE%A6%E5%90%AC%E5%8D%95%E4%B8%80%E6%BA%90

```
// watch


```

###### 5.3 watch监听深度对象，未起效果。
问题描述：监听变化后做的操作和打印没有反应。
原因：
```
watch(
// stateW外面不要加{}
		() => {stateW},
```

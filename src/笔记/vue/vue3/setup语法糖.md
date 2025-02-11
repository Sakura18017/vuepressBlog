---
icon: edit
date: 2023-05-05
category:
  - VUE
tag:
  - VUE
  - VUE3
---

# Vue3-Setup语法糖

## 导入组件
```js
// 在script中导入即可直接在template中使用
import Comp from './comp.vue'
```

## 声明参数/方法

vue3新增ref与reactive声明动态变量，声明即可直接使用

```js
import { ref, reactive } from 'vue'

const refData = ref()
// 使用参数名.value进行修改，例如：
refData.value = 0

--------------------------------

const reactiveData = reactive({
    name: '张三',
    sex: '男',
    obj: {
        key: 1
    }
})

// 不可直接赋值，正确使用方法👇
reactiveData.name = '李四'
reactiveData.obj = {
        key: 2
    }

// 错误用法👇
reactiveData = { name: '李四' }

------------------------------

// 声明方法
const fun1 = () => {}

function fun2 () {}
```




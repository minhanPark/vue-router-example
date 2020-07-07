# vue-router-example

> vue router example 

## 설치하기

```
npm install vue-router
```

해당 명령어를 통해서 뷰 라우터를 설치할 수 있다.

## 라우터 장착하기

```js
// routes/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

 라우터를 관리할 routes 폴더에 라우터를 연결시켜준다. 위의 코드처럼 작성하면 된다.

 ```js
 import LatestNews from "../components/LatestNews.vue";
 import SearchNews from "../components/SearchNews.vue";

 export const router = new VueRouter({
     routes: [
         {path: '/', component: LatestNews},
         {path:'/search', component: SearchNews}
     ]
 })
 ```

 위와 같이 router를 작성한다. 그리고 main에 해당 라우터를 전달해주면 연결이 된다.

 ```js
import Vue from 'vue'
import App from './App.vue'
import {router} from "./routes";

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
 ```

위와 같이 연결이 가능하다.

마지막으로는 App.vue에 router-link태그와 router-view태그를 사용하면 연결한 라우터가 나타난다.


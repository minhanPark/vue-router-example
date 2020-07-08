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

## 완성된 예제 모습

![최신뉴스 보기](https://user-images.githubusercontent.com/29043491/86934733-035e4480-c177-11ea-96e9-fef6aa41e5ac.PNG)  
![뉴스 검색](https://user-images.githubusercontent.com/29043491/86934738-048f7180-c177-11ea-85ad-8d870bfa7877.PNG)  

> [뉴스api](https://newsapi.org/)를 axios를 이용해서 불러온 후 vue를 통해서 보여줍니다. 가져온 데이터 중에 이미지가 없는 것들은 대체 이미지를 넣어서 보여주고 있습니다.  
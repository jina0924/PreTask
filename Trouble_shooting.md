# Trouble Shooting

[toc]

## [Python] JSON 파일 생성하기

```python
import json

all_data = {}

price = [19900, 15900, 19000, 29000, 39000]
discount = [3000, 3000, 5000, 10000, 2000]
comment_set = [41, 2, 785, 761, 36]
like_set = [161, 54, 38, 92, 21]

category = ['healthy', 'summer_fruit', 'peacock', 'fresh']

healty_name = ['[피코크] 아삭하고 시원한 포기김치 3.3kg', '[피코크] 부채살찹스테이크', '피코크 조선호텔특제육수 총각김치 1.5kg', '[수린] 한우 국수전골 1,788g (총 2인분)', '피코크 조선호텔특제육수 포기김치 4kg']
fruit_name = ['대부도/송산 캠벨포도', '항공직송 블랙 사파이어 포도', '미국산 체리', '샤인머스캣', '애플망고']
peacock_name = ['[피코크XR고기] 한우차돌된장찌개 620g', '밀푀유나베', '티라미수 케이크(대용량) 680g', '피코크 진한 육개장 리뉴얼 세트 500g*5봉', '고창태양초고춧가루']
fresh_name = ['오이맛고추 2kg(박스)', '흙당근 3kg(박스)', '의성통마늘 20개입 특,650g이상', '파프리카 색상혼합/10입/1.3kg이상(박스)', '먹기좋은 깐마늘 3kg/대 사이즈(봉)']

pk = 31
page = 4
idx = 3
all_data['page'] = page
all_data['previous'] = page - 1
all_data['result'] = []
for i in range(10):
    item_data = {}
    item_data['pk'] = pk
    if idx == 0:
        item_data['name'] = healty_name[i % 5]
        item_data['category'] = 'healthy'
    if idx == 1:
        item_data['name'] = fruit_name[i % 5]
        item_data['category'] = 'summer_fruit'
    if idx == 2:
        item_data['name'] = peacock_name[i % 5]
        item_data['category'] = 'peacock'
    if idx == 3:
        item_data['name'] = fresh_name[i % 5]
        item_data['category'] = 'fresh'
    item_data['price'] = price[i % 5]
    item_data['discount'] = discount[i % 5]
    item_data['comment_set'] = comment_set[i % 5]
    item_data['like_set'] = like_set[i % 5]
    all_data['result'].append(item_data)
    pk += 1

with open('all_list_4.json', 'w', encoding="utf-8") as make_file:
    json.dump(all_data, make_file, ensure_ascii=False, indent="\t")
```

- 기능
  - 파이썬으로 json 더미 데이터 생성
- 포인트
  1. `import json`
     - `JSON`파일을 만들기 위해 라이브러리 호출
  2. `all_data = {}`
     - 전체 리스트를 감싸 객체 형태로 만듦
  3. `with open('all_list_4.json', 'w', encoding="utf-8")`
     - `with`문으로 적는 이유 : `open`과 `close`를 자동으로 처리하기 위해
     - `utf-8` 인코딩으로 저장
     - `all_list_4.json`이란 파일이 존재하지 않을 경우 해당 이름으로 새 파일 생성
  4. `json.dump(all_data, make_file, ensure_ascii=False, indent="\t")`
     - `ensure_ascii=False` : 이스케이프 문자로 표시하지 않고 한글로 출력함
     - `indent="\t"` : json 데이터를 눈으로 보기 쉽게 만들어줌



## 무한 스크롤

```vue
<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list='all_list' :page_info='all_page'></item-list>
  </div>
</template>
```

```js
<script>
import { mapActions, mapGetters } from  'vuex'
import ItemList from '@/components/ItemList.vue'

export default {
  ...
  methods: {
    ...mapActions(['fetchAllList', 'fetchCategoryActive']),
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      ...
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      if (this.all_page.next) {
        this.fetchAllList(this.all_page.page + 1)
      }
    }
  },
  ...
</script>
```

```css
.item-list {
  height: calc(100vh - 30px);
  overflow: auto;
}
```

- 기능
  - 스크롤이 바닥에 닿았을 때 데이터를 추가적으로 받아옴
- 포인트
  1. `scrollHeight` : 요소에 들어있는 컨텐츠의 전체 높이
     - padding, border 포함
     - margin은 제외
  2. `scrollTop` : 요소의 맨 처음부터 현재 화면에 보이는 부분까지의 길이 = 현재 스크롤 위치
  3. `clientHeight` : 요소의 내부 높이
     - padding 포함
     - scrollbar, border, margin 제외
  4. `offsetHeight` : 요소의 높이(눈에 보이는 부분)
     - padding, scrollbar, border 포함
     - margin 제외
  5. `const isBottom = scrollHeight === scrollTop + clientHeight`
     - 컨텐츠 전체 높이가 현재 스크롤 위치와 눈에 보이는 부분의 합과 같다면 밑바닥이므로 `true` 반환
  6. `isBottom`이 `true`라면 새 데이터 불러옴
     - 부드러운 효과를 위해 `setTimeout` 으로 1초 딜레이 걸어줌
  7. `if (this.all_page.next)`
     - `next`값이 있다 = 더 불러올 데이터가 있다 => 추가적으로 데이터 요청해서 불러옴
  8. `height: calc(100vh - 30px);`
     - 아주 밑바닥보다는 그 직전에서 데이터를 불러오기 위해 높이값을 약간 위쪽으로 조정함
- 아쉬운 점
  1. 페이지 전체 스크롤바와 데이터 리스트 부분의 스크롤바가 두 개 생김
     - 커스텀해서 안보이게 처리할 수도 있지만 좀 더 효과적으로 보이기 위한 방법 생각해볼 필요 있음
  2. `Height`값을 임의로 약간 적게 설정한 게 부자연스러워 보이기도 함



## [Vue] 로컬 JSON파일 불러오기

```js
export default createStore({
  ...
  actions: {
    fetchAllList({ commit }, page) {
      axios({
        url: `/all_list_${page}.json`,
        method: 'get',
      })
      ...
    }
})
```

- 기능
  - 로컬 파일에 저장한 `json`파일 읽어오기
- 포인트
  1. `public/`아래에 `json`파일 위치시키기
  2. `axios` 요청 시 url을 파일 경로로 작성



## [Vue] 이미지 삽입 시 변수를 사용한 절대경로 사용

```vue
<template>
  ...
    <div v-for="item in item_list" :key="item.pk" class="card">
      <div class="row card-inside">
        <div class="item-img col-4">
          <img :src="require(`@/assets/${item.pk % 5}.jpg`)" :alt="`${item.name} 사진`" class="img-fluid">
        ...
    </div>
  ...
</template>
```

- 기능
  - 이미지 경로가 `src/assets/`일 때 변수를 사용하여 경로 작성
- 포인트
  1. `item_list`를 `v-for`로 돌면서 `item` 하나하나를 조회함
  2. `item`의 `pk`값을 이용하여 이미지 제목에 접근함
  3. `require`을 추가해 변수명을 사용하여 경로 작성



## 메뉴 가로 스크롤

```vue
<template>
  <div class="wrap">
    <ul>
      <li :class="[isAll ? 'active' : 'non-active']"><router-link :to="{ name: 'home' }" class="category-tab">전체</router-link></li>
      <li :class="[isHealthy ? 'active' : 'non-active']"><router-link :to="{ name: 'healthy' }" class="category-tab">든든하고 건강하게</router-link></li>
      <li :class="[isSummerFruit ? 'active' : 'non-active']"><router-link :to="{ name: 'summerFruit' }" class="category-tab">여름과일</router-link></li>
      <li :class="[isPeacock ? 'active' : 'non-active']"><router-link :to="{ name: 'peacock' }" class="category-tab">피코크</router-link></li>
      <li :class="[isFresh ? 'active' : 'non-active']"><router-link :to="{ name: 'fresh' }" class="category-tab">신선식품</router-link></li>
    </ul>
  </div>
</template>
```

```css
<style scoped>

ul {
  padding-left: 1rem;
  display: flex;
  width: 98%;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */ 
  scrollbar-width: none; /* Firefox */
  margin-top: 1rem;
}
ul::-webkit-scrollbar {
  display: none;
}

li {
  margin-right: 1.5rem;
  flex-grow: 1;
  text-align: center;
  list-style: none;
}

...
</style>
```

- 기능
  - 메뉴가 화면 가로 길이보다 길 때 가로 스크롤 적용
- 포인트
  1. `overflow-x: auto`
     - 데스크톱 브라우저의 경우 콘텐츠가 넘칠 때 스크롤바를 노출함
  2. `white-space: nowrap`
     - 요소가 공백 문자를 처리하는 법
     - 연속 공백을 하나로 합침
  3. 스크롤 기능은 유지하고 스크롤바는 숨기기
     - `-ms-overflow-style: none` : IE 대응
     - `scrollbar-width: none` : Firefox 대응
     - `ul::-webkit-scrollbar` : Chrome 대응
  4. 패드 혹은 데스크탑 화면에서는 메뉴가 가로에 꽉 차게 배치하기
     - `flex-grow` : 플렉스 박스 아이템의 기본 너비를 자동으로 늘어나도록함
     - 모든 `<li>` 태그가 `flex-grow: 1`이므로 같은 너비를 가지게 됨



## [js] 객체 합치기

```js
  mutations: {
    SET_ALL_LIST: (state, all_object) => {
      state.all_page = {
        page: all_object.page,
        previous: all_object.previous,
        next: all_object.next,
      }
      if (state.all_page.page > 1) {
        for (const result of all_object.result) {
          state.all_list.push(result)
        }
      } else {
        state.all_list = all_object.result
      }
    },
  }
```

- 기능
  - 객체 형태의 데이터를 서로 합치는 방법
- 포인트
  - 반복문 사용
  - `push(result)`를 이용해 객체 안에 데이터 삽입



## 데이터 추가적으로 불러오기

```js
  updated() {
    const element = document.querySelector('.list-section')
    if (element.clientHeight < window.innerHeight) {
      if (this.$route.name === 'home') {
        this.fetchAllList(2)
      } else if (this.$route.name ==='healthy') {
      ...
    }
  }
}
```

- 기능
  - 불러와서 배치한 요소의 개수가 적어 화면이 비어보일 때 추가적으로 데이터 불러오기 위한 방법
- 포인트
  1. `window.innerHeight`
     - 창 틀을 뺀 내용과 스크롤을 포함한 크기
  2. `updated()` hook 사용
     - 데이터를 불러와서 DOM에 배치해보고 데이터가 부착된 요소의 길이를 측정 (`element.clientHeight`)
     - 창의 길이와 비교하여 요소의 길이가 더 적다면 추가적으로 데이터 요청을 보냄



## 스크롤 방향 감지하기

```vue
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="info-message">금주의 전단 상품을 만나보세요</div>
    <category-bar v-if="is_category_active"></category-bar>
    <div v-if="!is_category_active" class="scroll-down"></div>
    <router-view></router-view>
  </div>
</template>
```

```js
<script>
...

export default {
  ...
  data() {
    return {
      preScroll: 0
    }
  },
 ...
  methods: {
    ...
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      if (this.preScroll < scrollTop) {
        this.fetchCategoryActive(false)
        this.preScroll = scrollTop
      } else if (this.preScroll > scrollTop) {
        this.fetchCategoryActive(true)
        this.preScroll = scrollTop
      }
  ...
}
</script>
```

- 기능
  - 스크롤 다운 : 메뉴 사라짐
  - 스크롤 업 : 메뉴 나타남
- 포인트
  1. 변화를 감지할 컨텐츠에 `v-if` 걸기
  2. `data`에 `preScroll` 변수를 선언하여 스크롤할 때마다 이전 스크롤 위치를 저장해둠
  3. 스크롤 이벤트 발생 시 현재 스크롤 위치와 이전 스크롤 위치를 비교하여 스크롤 업인지 다운인지 판단함



## S3 서버리스 배포 방법

https://preiner.tistory.com/12

https://labs.brandi.co.kr/2019/02/08/janghj.html

https://coconutstd.github.io/posts/s3-hosting/

https://zzang9ha.tistory.com/358
# ⭐️ React ⭐️

> 공부하면서 모르는 것 정리!

## react-query

> react-query는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용된다.

### useMutation ❗️

> useMutation은 <span style="color:#6699FF">React Query를 이용해 서버에 데이터 변경 작업을
> 요청할 때 사용 </span>한다. <br/>
> 데이터 조회를 할 때는 <span style="color:yellowgreen"> useQuery</span> 를 사용한다.

- mutationFn은 mutation Function으로<span style="color:#6699FF"> promise 처리가 이루어지는 함수 </span>이다.
  다른 말로는 axios를 이용해 서버에 API를 요청하는 부분이라고 생각할 수 있다.

- mutate는 <span style="color:#6699FF"> useMutataion을 이용해 작성한 내용들이 실핼될 수 있도록 도와주는 trigger 역할 </span>을 한다. 즉, useMutation을 정의 해둔 뒤 이벤트가 발생되었을 대 mutate를 사용해주면 된다.

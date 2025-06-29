# RESTful demo with fetch API

- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Example 1 - GET/POST/DELETE/PUT

- [UsersView.tsx](./src/restful-api/example1/UsersView.tsx)
- http://localhost:3000/users-view
-

### Example 2 - GET with useFetch hook

- [PostsView.tsx](./src/restful-api/example2/PostsView.tsx)
- [useFetch.ts](./src/restful-api/example2/useFetch.ts)
- http://localhost:3000/posts-view

#### Syntax Summary

```js
#1
useEffect(()=>{}, [])
fetch(url, option).then(response=>{response.ok / return response.json()}).then(data=>{}).catch(e=>{})
<--REQUEST--------><-----RESPONSE---------------------------------------->

#2
useEffect(()=>{}, [])
const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    setUsers(data);
  } catch (e) {
    console.error(e);
  }
};
try{}catch(e){}
const getData = async() => {}
const resonse = await fetch(url)
resonse.ok
const data = await resonse.json()

#3
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
}).then((val) => console.log('asynchronous logging has val:', val));
console.log('immediate logging');
//immediate logging
//asynchronous logging has val: 777

#4. option
const response = await fetch(url, {method: GET, headers:{"Content-Type":"", "Authorization": `Bearer $token`}, body:{}})
```

## References:

- https://dev.to/collegewap/react-fetch-example-getpostputdelete-with-api-3l00
- https://stackoverflow.com/questions/62613709/implement-usefetch-react-hook-to-work-inside-submit-function
- [MDN fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

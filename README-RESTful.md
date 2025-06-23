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
useEffect(()=>{}, [])
// Method #1 - Use .then
fetch(url).then(response=>{}).then(data=>{}).catch(error=>{})
======
fetch(url) -> response
!response.ok -> new Error()
response.json() -> data
=====
// Method #2 - Use async/await
const getData = async() =>{try().catch().finally()}
const response = await fetch(url)
const data = await response.json()
```

```js
//GET
fetch(url).then().then().catch()
response.ok
response.json -> data
setUsers(data)
//POST
fetch(url).then.then.catch
options:{
  method:post,
  headers: content-type:app/json},
  body: {name, email}
}
response.ok
response.json -> data -> setUsers({...users, data})
//DELETE(id)
fetch(url).then.then.catch
options:{method: DELETE, headers: content-type: app/json, body:{name:xxx} }
response.ok
response.json -> data -> setUsers(users => users.filter(user.id!==data.id)
//PUT (id)
fetch(url).then.then.catch
options: method: PUT, headers: content-type:app/json, body:{name: "xxx}
response.ok true
response.json -> data
setUsers(users => users.map(item => item.id === data.id ? data : item))
```

## References:

- https://dev.to/collegewap/react-fetch-example-getpostputdelete-with-api-3l00
- https://stackoverflow.com/questions/62613709/implement-usefetch-react-hook-to-work-inside-submit-function

```

```

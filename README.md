# React Hooks demo

- [useCallback](./README-useCallback.md)
- [useMemo](./README-useMemo.md)
- [useEffect](./README-useEffect.md)
- [useState](./README-useState.md)
- [useDeferredValue](./README-useDeferredValue.md)
- [useTransition](./README-useTransition.md)
- [useId](./README-useId.md)
- [Custom Hooks](./README-customHooks.md)

<hr />

**Redux with TypeScript**

- [Counter demo](./README-redux.md#example-1---counter)
- [Todo demo](./README-redux.md#example-2---todo)

**RESTful API**

- [Example1: GET/POST/PUT/DELETE](https://github.com/hirokoymj/react-hooks-demo/blob/main/README-RESTful.md#example-1---getpostdeleteput)

- [Example 2: GET with useFetch custom hook](https://github.com/hirokoymj/react-hooks-demo/blob/main/README-RESTful.md#example-2---get-with-usefetch-hook)

**Miscellaneous**

- [Composition Pattern](./README-misc.md#composition-pattern)
- [Event bubbling](./README-misc.md#event-bubbling)
- [Render nested array of object](./README_nested.md)

**React Hook Form**

- [React Hook Form demo](./README_ReactHookForm.md)

#### Run demo

```js
npm run start
```

## Memory note

- useCallback
- useMemo
- useEffect - mount, unmount, guarantee to call at least once.
- useState
- useForm

```js
const { register, handleSubmit } = useForm<IFormInput>()
const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register("firstName")} />
<select {...register("gender")}>
<input type="submit" />
```

- https://react-hook-form.com/get-started#Registerfields
- useParams()

```js
<Route path=":userId" element={<ProfilePage />} />;
const { userId } = useParams();
```

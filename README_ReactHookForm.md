# React Hook Form

- https://react-hook-form.com/
- [SignUpForm.tsx](./src/react-hook-form/SignUpForm.tsx)
- [FormTypes.ts](./src/react-hook-form/types/FormTypes.ts)
- http://localhost:3000/sign-up-form

```js
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
```

```js
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm <
SignUpFormValues >
{
  resolver: yupResolver(signUpSchema),
};
```

```js
const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {};
```

```js
<form id="signin-form" onSubmit={handleSubmit(onSubmit)}>
  <input id="firstName" {...register('firstName')} />
  {errors.firstName && <span>{errors.firstName.message}</span>}
</form>
```

## References:

- [yup](https://github.com/jquense/yup)

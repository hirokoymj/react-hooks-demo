# React Hook Form

- https://react-hook-form.com/
- [SignUpForm.tsx](./src/react-hook-form/SignUpForm.tsx)
- [FormTypes.ts](./src/react-hook-form/types/FormTypes.ts)
- http://localhost:3000/sign-up-form

```js
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormValues, signUpSchema } from './types/FormTypes';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpSchema),
  });
  const [formValues, setFormValues] = useState<SignUpFormValues>({} as SignUpFormValues);

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
    setFormValues(data);
  };

  return (
    <>
      <form id="signin-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input id="firstName" {...register('firstName')} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
```

```js
export interface SignUpFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  interests: string[];
  memo?: string;
  favoriteColor: string;
}
```

## References:

- [yup](https://github.com/jquense/yup)

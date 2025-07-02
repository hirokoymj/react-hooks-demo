import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormValues, signUpSchema } from './types/FormTypes';
import './form.css';

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

  useEffect(() => {
    reset();
  }, []);

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
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" {...register('lastName')} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="confirmedPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" {...register('confirmPassword')} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <div>
          <input type="checkbox" id="agreeToTerms" {...register('agreeToTerms')} />
          <label htmlFor="agreeToTerms">I accept the terms and conditions</label>
          {errors.agreeToTerms && <span>{errors.agreeToTerms.message}</span>}
        </div>
        <div>
          <label htmlFor="interests">Interests:</label>
          <input type="checkbox" value="sports" {...register('interests')} /> Sports
          <input type="checkbox" value="music" {...register('interests')} /> Music
          <input type="checkbox" value="art" {...register('interests')} /> Art
          {errors.interests && <span>{errors.interests.message}</span>}
        </div>
        <div>
          <label htmlFor="memo">memo:</label>
          <br />
          <textarea {...register('memo')} rows={5} cols={33} placeholder="Enter your comment here..." />
        </div>
        <div>
          <label htmlFor="favoriteColor">Choose an option:</label>
          <select id="favoriteColor" {...register('favoriteColor')}>
            <option value="">--Please choose a color--</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </select>
          {errors.favoriteColor && <span>{errors.favoriteColor.message}</span>}
        </div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </form>
      <hr />
      {formValues && (
        <table style={{ border: '1px solid green' }}>
          <tbody>
            {Object.keys(formValues).map((key, index) => (
              <tr key={index}>
                <td>{key.toString()}</td>
                <td>{formValues[key as keyof SignUpFormValues]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

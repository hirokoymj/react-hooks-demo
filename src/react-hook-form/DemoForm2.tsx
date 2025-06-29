//import { useState } from 'react';
import { useForm } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}
type FormData = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
};

//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function DemoForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // const { data, setData } = useState<FormData>();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  console.log(errors);

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register('firstName')} />
      <label>Last Name</label>
      <input {...register('lastName')} />
      <label>Gender Selection</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
      {Object.keys(errors).length > 0 && <span style={{ color: 'red' }}>{JSON.stringify(errors)}</span>}
    </form>
  );
}

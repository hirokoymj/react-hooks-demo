import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  example: string;
  exampleRequired: string;
};

export default function DemoForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(watch('example'));
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input defaultValue="test" {...register('example')} />

      <label>Example required</label>
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span style={{ color: 'red' }}>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

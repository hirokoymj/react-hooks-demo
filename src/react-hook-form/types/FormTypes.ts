import * as yup from 'yup';

enum GenderEnum {
  female = 'female',
  male = 'male',
}

export interface MyFormValues {
  name: string;
  email: string;
  age: number;
  gender: GenderEnum;
  selectedOption: string;
  acceptTerms: boolean;
}

export const myFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  age: yup.number().min(18, 'Must be at least 18').required('Age is required'),
  gender: yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required(),
  selectedOption: yup.string().required('please select option'),
  acceptTerms: yup.boolean().required().oneOf([true]),
});

// enum FavoriteColor {
//   red = 'red',
//   green = 'green',
//   blue = 'blue',
// }

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

const onlyLetters = /^[a-zA-Z]+$/;

export const signUpSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  firstName: yup.string().required().matches(onlyLetters, 'Only accept letters').max(30),
  lastName: yup
    .string()
    .required()
    .matches(onlyLetters)
    .max(30, ({ max }) => `Only accept ${max} values`),
  password: yup.string().required().min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')]),
  agreeToTerms: yup.boolean().required().oneOf([true]),
  interests: yup
    .array()
    .min(1, 'Please select at least one interest')
    .of(yup.string().required())
    .required('Interests are required'),
  favoriteColor: yup.string().required('Color is required'),
});

//https://stackoverflow.com/questions/59836052/how-to-validate-enums-in-yup
//https://www.youtube.com/watch?v=IbSN0pNqrZs

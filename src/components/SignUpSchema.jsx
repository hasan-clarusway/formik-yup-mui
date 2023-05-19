import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please fill in the email.'),

  fullName: Yup.string()
    .max(20, 'fullName must be 20 characters or less.')
    .required('Please fill in the fullName.'),    

  address: Yup.string()
    .min(15,' address must contain at least 15 characters.')
    .required('Please fill in the fullName.')
    .matches(/\d+/, 'address must contain numbers.'),  

  city: Yup.string()
    .required('Please fill in the City name.'),     
                
  country: Yup.string()
    .required('Please fill in the Country name.'), 
});
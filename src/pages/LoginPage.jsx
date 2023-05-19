// import TextField from "@mui/material/TextField";
// import Container from "@mui/material/Container";
// import Box from '@mui/material/Box';
// import Button from "@mui/material/Button";
// import React from "react";
// import InputAdornment from '@mui/material/InputAdornment';
// import HomeIcon from '@mui/icons-material/Home';
// import CallIcon from '@mui/icons-material/Call';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import PublicIcon from '@mui/icons-material/Public';
// import { Formik, Form } from "formik";
// import * as Yup from 'yup';

// const LoginPage = () => {
//   return (
//     <Container maxWidth = "xl" sx={{mt: '5rem', textAlign: 'center'}}>
//       <Formik
//         initialValues={{ email: '', fullName: '', address: '', city: '', country: '' }}
//         validationSchema={Yup.object().shape({          
//           email: Yup.string()
//                 .email('Please enter a valid email address.')
//                 .required('Please fill in the email.'),
//           fullName: Yup.string()
//                 .max(20, 'fullName must be 20 characters or less.')
//                 .required('Please fill in the fullName.'),        
//           address: Yup.string()
//                 .min(15,' address must contain at least 15 characters.')
//                 .required('Please fill in the fullName.')
//                 .matches(/\d+/, 'address must contain numbers.'),  
//           city: Yup.string()
//                 .required('Please fill in the City name.'),     
//           country: Yup.string()
//                 .required('Please fill in the Country name.'),     

//         })}
//         onSubmit={(values, actions) => {
//           alert(`            
//              email: ${values.email}
//              fullName: ${values.fullName}
//              adress: ${values.address}
//              city: ${values.city}
//              country: ${values.country}
//           `);
//           actions.resetForm();
//           actions.setSubmitting(false);
//         }}
//       >
        
//         {({ values, handleChange, handleBlur, errors, touched }) => (          
//           <Form>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flexWrap: 'wrap'}} >
//             <h2 style= {{textAlign:'left', fontFamily: 'sans-serif', fontWeight: '200'}}>Contact Information</h2>
//               <TextField             
//                 label="Enter your email"
//                 name="email"
//                 id="email"  
//                 type="email"
//                 variant= "outlined" 
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.email && errors.email}
//                 error={touched.email && Boolean(errors.email)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <EmailIcon /> </InputAdornment>
//                   ),                                            
//                 }} />            
//               <TextField 
//                 label= 'Enter your phone'
//                 name= 'phone'
//                 id= 'phone'
//                 type= "number"
//                 variant= "outlined"  
//                   InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <CallIcon /> </InputAdornment>
//                   ),                                            
//                 }}/>           
//                <h2 style= {{textAlign:'left', fontFamily: 'sans-serif', fontWeight: '200'}}>Shipping Address</h2>
//               <TextField 
//                 label= 'Enter your Full Name'
//                 name= 'fullName'
//                 id= 'fullName'
//                 type= "text"
//                 variant= "outlined"
//                 value={values.fullName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.fullName && errors.fullName}
//                 error={touched.fullName && Boolean(errors.fullName)} 
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <PersonIcon /> </InputAdornment>
//                   ),                                            
//                 }} /> 
//               <TextField 
//                 label= 'Enter your address'
//                 name= 'address'
//                 id= 'address'
//                 type= "text"
//                 variant= "outlined" 
//                 value={values.address}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.address && errors.address}
//                 error={touched.address && Boolean(errors.address)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <HomeIcon /> </InputAdornment>
//                   ),                                            
//                 }} />             
//             </Box>
//                 <Box
//                sx={{   
//                 display: 'flex',
//                 alignItems: 'center',
//                 m: 4
//               }}>          
//               <TextField 
//                 style={{ right:'30px', width: '55rem'}}
//                 label= 'Enter your city'
//                 name= 'city'
//                 id= 'city'
//                 type= "text"
//                 variant= "outlined"
//                 value={values.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.city && errors.city}
//                 error={touched.city && Boolean(errors.city)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <LocationCityIcon /> </InputAdornment>
//                     ),                                            
//                 }} />              
//                 <TextField 
//                 style={{ right: '0.5%', width: '55rem'}}
//                 label= 'Enter your Country'
//                 name= 'country'
//                 id= 'country'
//                 type= "text"
//                 variant= "outlined"
//                 value={values.country}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.country && errors.country}
//                 error={touched.country && Boolean(errors.country)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end"> <PublicIcon /> </InputAdornment>
//                   ),                                            
//                 }} />                                                  
//               <Button 
//                type="submit" 
//                variant="contained" 
//                size="large"
//                style={{ width: '20rem', height: '3.4rem', left:'30px'}}
//                >
//                 SUBMİT
//               </Button> 
//             </Box> 
//           </Form>)}          
//       </Formik>         
//     </Container>
//   )
// };

// export default LoginPage;
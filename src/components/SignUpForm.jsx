import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from 'formik';
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';

const SignUpForm = ({values, handleChange, handleBlur, errors, touched}) => {
  return (
    <div>
      <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flexWrap: 'wrap'}} >
            <h2 style= {{textAlign:'left', fontFamily: 'sans-serif', fontWeight: '200'}}>Contact Information</h2>
              <TextField             
                label="Enter your email"
                name="email"
                id="email"  
                type="email"
                variant= "outlined" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <EmailIcon /> </InputAdornment>
                  ),                                            
                }} />            
              <TextField 
                label= 'Enter your phone'
                name= 'phone'
                id= 'phone'
                type= "number"
                variant= "outlined"
                value={values.phone}
                onChange={handleChange} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <CallIcon /> </InputAdornment>
                  ),                                            
                }}/>           
               <h2 style= {{textAlign:'left', fontFamily: 'sans-serif', fontWeight: '200'}}>Shipping Address</h2>
              <TextField 
                label= 'Enter your Full Name'
                name= 'fullName'
                id= 'fullName'
                type= "text"
                variant= "outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <PersonIcon /> </InputAdornment>
                  ),                                            
                }} /> 
              <TextField 
                label= 'Enter your address'
                name= 'address'
                id= 'address'
                type= "text"
                variant= "outlined" 
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.address && errors.address}
                error={touched.address && Boolean(errors.address)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <HomeIcon /> </InputAdornment>
                  ),                                            
                }} />             
            </Box>
                <Box
               sx={{   
                display: 'flex',
                alignItems: 'center',
                m: 4
              }}>          
              <TextField 
                style={{ right:'30px', width: '55rem'}}
                label= 'Enter your city'
                name= 'city'
                id= 'city'
                type= "text"
                variant= "outlined"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.city && errors.city}
                error={touched.city && Boolean(errors.city)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <LocationCityIcon /> </InputAdornment>
                    ),                                            
                }} />              
                <TextField 
                style={{ right: '0.5%', width: '55rem'}}
                label= 'Enter your Country'
                name= 'country'
                id= 'country'
                type= "text"
                variant= "outlined"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.country && errors.country}
                error={touched.country && Boolean(errors.country)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"> <PublicIcon /> </InputAdornment>
                  ),                                            
                }} />                                                  
              <Button 
               type="submit" 
               variant="contained" 
               size="large"
               style={{ width: '20rem', height: '3.5rem', right:'-2%'}}
               >
                SUBMİT
              </Button> 
            </Box> 
          </Form>  
    </div>
  )
};

export default SignUpForm;
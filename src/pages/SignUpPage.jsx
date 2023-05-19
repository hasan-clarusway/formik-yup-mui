import Container from "@mui/material/Container";
import { Formik } from "formik";
import { signUpSchema } from "../components/SignUpSchema";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <Container maxWidth = "xl" sx={{mt: '5rem', textAlign: 'center'}}>
      <Formik
        initialValues={{ email: '', fullName: '', address: '', city: '', country: '' }}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          alert(`            
             email: ${values.email}
             phone: ${values.phone}
             fullName: ${values.fullName}
             adress: ${values.address}
             city: ${values.city}
             country: ${values.country}
          `);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <SignUpForm {...props} />}
      ></Formik>
    </Container>
  )
};

export default SignUpPage;
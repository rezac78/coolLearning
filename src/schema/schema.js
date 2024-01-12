import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    familyName: Yup.string().required('Family name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default registrationSchema;

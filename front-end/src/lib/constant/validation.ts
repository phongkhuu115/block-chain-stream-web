import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    user_password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    user_email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    user_fullname: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    user_agree: Yup.boolean()
        .required('Required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('user_password')], 'Passwords must match')
        .required('Required'),
});

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    user_password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});
import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    eamil: yup.string().max(30).required(),
    password: yup.string().required(),
    fistName: yup.string().max(20).required(),
    lastName: yup.string().max(20).required(),
    password: yup.string().min(8).required(),

})
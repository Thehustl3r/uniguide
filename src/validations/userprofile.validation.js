import * as yup from 'yup';

export const userProfileSchema = yup.object().shape({
    eamil: yup.string().max(30).required(),
    password: yup.string().required(),
    fistName: yup.string().max(20).required(),
    middleName: yup.string().max(20),
    lastName: yup.string().max(20).required(),
    password: yup.string().min(8).required(),
    phone: yup.number().max(13),
})
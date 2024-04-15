// validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  id: Yup.number().required('La identificación es obligatoria'),
  name: Yup.string().required('El nombre es obligatorio'),
  lastname: Yup.string().required('El apellido es obligatorio'),
  age: Yup.number()
    .required('La edad es obligatoria')
    .positive('La edad debe ser un número positivo')
    .integer('La edad debe ser un número entero')
});

export default validationSchema;

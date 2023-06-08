import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  preferences: yup.string(),
  reservation_time: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});

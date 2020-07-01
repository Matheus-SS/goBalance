import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { formatText, formatPriceField } from '../../utils/formatValue';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Header from '../../components/Header';
import MobileNavBar from '../../components/MobileNavBar';

import { FormContainer, Form, RadioButtonGroup, Error } from './styles';

interface MyFormValues {
  name: string;
  price: number;
  type: string;
  category: string;
}

const initialValues: MyFormValues = {
  name: '',
  price: 0,
  type: '',
  category: '',
};

const maxValue = 999999999;

const registerTransactionSchema = Yup.object().shape({
  name: Yup.string()
    .required('Obrigatório')
    .min(5, 'Digite no mínimo 5 caracteres')
    .max(40, 'Permitido no máximo 40 caracteres'),
  price: Yup.number()
    .positive('Valor dever ser positivo')
    .typeError('Campo dever ser neste formato: 1499.99')
    .max(maxValue, `Valor deve igual ou menor que ${maxValue}`),
  type: Yup.string().required('Obrigatório'),
  category: Yup.string()
    .required('Obrigatório')
    .min(5, 'Digite no mínimo 5 caracteres')
    .max(30, 'Permitido no máximo 15 caracteres'),
});

const Register: React.FC = () => {
  // Style the input when gets a error
  function getStylesError(
    errors: string | undefined,
    isTouched: boolean | undefined,
  ): { border: string } | undefined {
    if (errors && isTouched) {
      return {
        border: '1px solid red',
      };
    }
    return undefined;
  }

  //  SUBMIT FORM
  const sendForm = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>,
  ): void => {
    actions.setSubmitting(true);
    // make async call

    api
      .post('/transactions', {
        title: values.name,
        value: Number(values.price),
        type: values.type,
        category: values.category,
      })
      .then(function (response) {
        toast.success('✔ Salvo');

        actions.setSubmitting(false);
        actions.resetForm();
      })
      .catch(function (error) {
        const { message } = error.response.data;
        toast.error(`🔥 ${message}`);
        actions.setSubmitting(false);
      });
  };

  return (
    <>
      <Header />
      <MobileNavBar />

      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={registerTransactionSchema}
          onSubmit={sendForm}
        >
          {({
            values,
            isSubmitting,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <h3>Cadastro</h3>
              <Field
                style={getStylesError(errors.name, touched.name)}
                placeholder="Nome"
                name="name"
                value={formatText(values.name)}
                onChange={handleChange}
                required
                maxLength="40"
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}

              <Field
                style={getStylesError(errors.price, touched.price)}
                placeholder="Preço"
                name="price"
                value={formatPriceField(values.price)}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                maxLength="12"
              />
              {touched.price && errors.price && <Error>{errors.price}</Error>}

              <RadioButtonGroup>
                <Field type="radio" name="type" id="income" value="income" />
                <label htmlFor="income">
                  <img src={income} alt="income" />
                  <span>Income</span>
                </label>

                <Field type="radio" name="type" id="outcome" value="outcome" />
                <label htmlFor="outcome">
                  <img src={outcome} alt="outcome" />
                  <span>Outcome</span>
                </label>
              </RadioButtonGroup>
              {touched.type && errors.type && <Error>{errors.type}</Error>}

              <Field
                style={getStylesError(errors.category, touched.category)}
                placeholder="Categoria"
                name="category"
                value={formatText(values.category)}
                onChange={handleChange}
                required
                maxLength="35"
              />
              {touched.category && errors.category && (
                <Error>{errors.category}</Error>
              )}

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default Register;

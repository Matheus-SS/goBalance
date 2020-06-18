import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Header from '../../components/Header';

import { FormContainer, Form, RadioButtonGroup } from './styles';

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

const registerTransactionSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  type: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

const Register: React.FC = () => {
  function getStylesError(
    errors: string | undefined,
    fieldName: string,
  ): { border: string } | undefined {
    if (errors && fieldName) {
      return {
        border: '1px solid red',
      };
    }
    return undefined;
  }

  const sendForm = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>,
  ): void => {
    actions.setSubmitting(true);
    // make async call
    console.log(values);

    actions.setSubmitting(false);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={registerTransactionSchema}
          onSubmit={sendForm}
        >
          {({ values, isSubmitting, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <h3>Cadastro</h3>
              <Field
                style={getStylesError(errors.name, 'name')}
                placeholder="Nome"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <span>{errors.name}</span>
              <Field
                placeholder="Preço"
                name="price"
                value={values.price}
                onChange={handleChange}
              />
              <span>{errors.price}</span>
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
              <span>{errors.type}</span>

              <Field
                placeholder="Categoria"
                name="category"
                value={values.category}
                onChange={handleChange}
              />
              <span>{errors.category}</span>

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

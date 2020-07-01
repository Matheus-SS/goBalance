import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #e5e5e5;
  max-width: 400px;
  margin: -110px auto 0;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 1px 2px 5px -2px #000;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    padding: 10px;
  }

  button {
    border: 0;
    background: #ff872c;
    padding: 10px;
    border-radius: 4px;
    color: #fff;
    margin-top: 10px;
  }
`;

export const RadioButtonGroup = styled.div`
  margin-top: 10px;

  display: flex;

  input {
    display: none;

    &:checked + label {
      background: #ff872c;
    }
  }

  label {
    margin: 2px;
    border: 1.5px solid #d0d1d6;
    border-radius: 4px;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    cursor: pointer;

    img {
      margin-right: 10px;
    }
  }
`;

export const Error = styled.span`
  color: #dc2b33;
  font-weight: bold;
`;

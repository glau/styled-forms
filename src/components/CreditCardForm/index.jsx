import LabeledInput from '../LabeledInput/LabeledInput';
import FormControl from '../FormControl';
import Button from '../Button/Button';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  padding: 8px;
  max-width: 16em;

  background-color: #FCFCFC;
  border: 1px solid #F5F5F5;
`

function CreditCardForm() {
  return (
    <FormWrapper>
      <LabeledInput label='Nome' inputId='fieldName' />
      <LabeledInput label='Número do Cartão' inputId='fieldCreditCardNumber' />
      <LabeledInput label='Data de Validade' inputId='fieldExpirationDate' />
      <LabeledInput label='Código de Segurança' inputId='fieldSecurityCode' />
      
      <FormControl>
        <Button label='Cancelar' />
        <Button label='Enviar' />
      </FormControl>
    </FormWrapper>
  )
}

export default CreditCardForm;
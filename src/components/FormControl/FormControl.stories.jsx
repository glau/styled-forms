import FormControl from '.';
import Button from '../Button/Button';

export default {
  title: 'Molecules/FormControl',
  component: FormControl,
}

export const Default = {
  render: () => <FormControl children={[
    <Button label='Cancelar' />, <Button label='Enviar' />
  ]} />
}
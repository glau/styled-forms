import Button from '../Button/Button'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  margin-block-start: 8px;
  display: flex;
  gap: 16px;
`

function FormControl({ children }) {
  return (
    <ButtonGroup>
      { children }
    </ButtonGroup>
  )
}

export default FormControl
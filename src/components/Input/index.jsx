import styled from 'styled-components'

const InputStyled = styled.input`
  align-self: stretch;
`

function Input({ inputId }) {
  return (
    <InputStyled type="text" id={inputId} />
  )
}

export default Input
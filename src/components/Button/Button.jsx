import styled from 'styled-components'

const ButtonStyled = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1em;
`

function Button({ label }) {
  return (
    <ButtonStyled type="button">{label}</ButtonStyled>
  )
}

export default Button;
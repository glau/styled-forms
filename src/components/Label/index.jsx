import styled from 'styled-components'

const StyledLabel = styled.label`
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
` 

function Label({ inputId, label }) {
  return (
    <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
  )
}

export default Label
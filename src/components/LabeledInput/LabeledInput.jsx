import Input from '../Input'
import Label from '../Label'
import styled from 'styled-components'

const LabeledInputWrapper = styled.div`
  margin-block-end: 8px;
  display: flex;
  flex-direction: column;
`

function LabeledInput({ label, inputId}) {
  return (
    <LabeledInputWrapper>
      <Label label={label} inputId={inputId} />
      <Input inputId={inputId} />
    </LabeledInputWrapper>
  )
}

export default LabeledInput
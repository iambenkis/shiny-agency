import { styled } from 'styled-components'
import error from '../../assets/error.png'

const ErrorContainer = styled.div`
  margin: 0 3rem;
  background-color: #f9f9fc;
  height: 86.5vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled.img`
  width: 30%;
`

const Error = () => {
  return (
    <ErrorContainer>
      <h1>Oups 🐒</h1>
      <StyledImage src={error} alt="error" />
      <h3>Il semble qu'il ya un probleme</h3>
    </ErrorContainer>
  )
}

export default Error

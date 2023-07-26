import { useParams, Link } from 'react-router-dom'
import { styled } from 'styled-components'
import colors from '../../colors'

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestion = questionNumberInt + 1

  const StyledLink = styled(Link)`
    color: #8186a0;
    padding: 15px;
    text-decoration: none;
    font-zise: 18px;
    ${(props) =>
      props.$isResult &&
      `
        color: #5843e4;
        font-weight: bold;
        background-color: ${colors.primary};
        border-radius: 30px;
      `}
  `
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <div>
        <StyledLink to={`/survey/${prevQuestion}`}>prev</StyledLink>
        {questionNumberInt === 10 ? (
          <StyledLink to="/results" $isResult>
            Résultats
          </StyledLink>
        ) : (
          <StyledLink to={`/survey/${nextQuestion}`}>Suivant</StyledLink>
        )}
      </div>
    </div>
  )
}

export default Survey

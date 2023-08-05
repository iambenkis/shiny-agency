import { useParams, Link } from 'react-router-dom'
import { styled } from 'styled-components'
import colors from '../../colors'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { Loader } from '../../utils/Atoms'
import { useFetch } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
`

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 56.5vh;
  justify-content: center;
  align-items: center;
`

const WrapperLinks = styled.div`
  padding-top: 20px;
`

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestion = questionNumberInt + 1
  const { answers, saveAnswers } = useContext(SurveyContext)
  const { data, isLoading, error } = useFetch(
    'https://itchy-tan-dalmatian.cyclic.app/survey',
  )
  const { surveyData } = data
  const { theme } = useTheme()
  // saveAnswers([1, 2, 3, 4, 5])

  // console.log(answers)

  const saveReply = (reply) => {
    saveAnswers({ [questionNumber]: reply })
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await fetch('http://localhost:8000/survey')
  //       const { surveyData } = await response.json()
  //       setSurveyData(surveyData)
  //     } catch (error) {
  //       setError(true)
  //       console.log(error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  const StyledLink = styled(Link)`
    color: #8186a0;
    padding: 15px;
    text-decoration: none;
    font-zise: 18px;
    ${(props) =>
      props.$isResult &&
      `
        color: #fff;
        font-weight: bold;
        background-color: ${colors.primary};
        border-radius: 30px;
      `}
  `

  const StyleQuestion = styled.h2`
    color: ${theme === 'light' ? '#000' : '#fff'};
  `

  const StyleQuestionTitle = styled.h1`
    color: ${theme === 'light' ? '#000' : '#fff'};
  `

  if (error) {
    return <div>Something went wrong...</div>
  }
  // console.log(surveyData, 'data')
  return (
    <SurveyContainer>
      <StyleQuestionTitle>Question {questionNumber}</StyleQuestionTitle>

      {isLoading ? (
        <Loader />
      ) : (
        <StyleQuestion>
          {' '}
          {surveyData && surveyData[questionNumber]}
        </StyleQuestion>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
          >
            Yes
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
          >
            No
          </ReplyBox>
        </ReplyWrapper>
      )}
      <WrapperLinks>
        <StyledLink to={`/survey/${prevQuestion}`}>prev</StyledLink>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <StyledLink to={`/survey/${nextQuestion}`}>next</StyledLink>
        ) : (
          <StyledLink to="/results" $isResult>
            Resultats
          </StyledLink>
        )}
      </WrapperLinks>
    </SurveyContainer>
  )
}

export default Survey

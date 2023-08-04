import PropTypes from 'prop-types'
import picture from '../../assets/profile.png'
import { styled } from 'styled-components'
import colors from '../../colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 18px;
  font-weight: bold;
  text-align: justify;
  padding: 5px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.backgroundLight};
  border-radius: 20px;
  width: 200px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CardImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  height: 55%;
`

const StyleSpan = styled.span`
  color: '#000000' !important;
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardDescription>
        <CardImage src={picture} alt="freelance" />
        <StyleSpan>{title}</StyleSpan>
      </CardDescription>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Benjamin',
  picture: picture,
  label: 'Frontend developer',
}

export default Card

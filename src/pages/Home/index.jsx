// import { useState } from 'react'
import styled from 'styled-components'
import { StyledLink } from '../../components/Header'
import homeImg from '../../assets/undraw_Resume_re_hkth 1.png'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9fc;
  margin: 0 6rem;
  height: 70vh;
`

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  aign-items: center;
`

const HomeText = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  line-height: 1.5;
  marginleft: 5rem;
`

const StyleHomeImg = styled.img`
  width: 30%;
`

const Home = () => {
  // const [size, setSize] = useState(1)

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeText>
          <h1>
            Identify your needs, we take care of the rest, with our best talent
          </h1>
          <StyledLink to="/survey/1" $isRounded>
            Take the test
          </StyledLink>
        </HomeText>
        <StyleHomeImg src={homeImg} alt="home-img"></StyleHomeImg>
      </HomeWrapper>
    </HomeContainer>
  )
}

export default Home

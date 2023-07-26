import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import logo from '../../assets/logo.png'

export const StyledLink = styled(Link)`
  color: #8186a0;
  padding: 15px;
  text-decoration: none;
  font-zise: 18px;
  ${({ $isRounded }) =>
    $isRounded &&
    `
    background-color: #5843e4;
    color: #fff;
    border-radius: 30px;  
    `}
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
`

const StyledLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

const LinkContainer = styled.div`
  display: flex;
  aign-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const Header = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <StyledLogo src={logo} alt="logo" />
        <h1>Shiny</h1>
      </StyledDiv>
      <LinkContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelances">Profiles</StyledLink>
        <StyledLink to="/survey/1" $isRounded>
          Faire le test
        </StyledLink>
      </LinkContainer>
    </StyledNav>
  )
}

export default Header

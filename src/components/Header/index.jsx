import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import logo from '../../assets/logo.png'
import { useTheme } from '../../utils/hooks'

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
  const { theme } = useTheme()

  const StyleLogo = styled.h1`
    color: ${theme === 'dark' ? '#fff' : '#000'};
  `
  return (
    <StyledNav>
      <StyledDiv>
        <StyledLogo src={logo} alt="logo" />
        <StyleLogo>Shiny</StyleLogo>
      </StyledDiv>
      <LinkContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelances">Profiles</StyledLink>
        <StyledLink to="/survey/1" $isRounded>
          Take the test
        </StyledLink>
      </LinkContainer>
    </StyledNav>
  )
}

export default Header

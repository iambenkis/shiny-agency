import styled from 'styled-components'
import colors from '../../colors'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  margin-bottom: 1rem;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Change mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer

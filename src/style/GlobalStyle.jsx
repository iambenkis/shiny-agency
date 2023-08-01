import { useContext } from 'react'
import { ThemeContext } from '../utils/context/index'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body { 
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
    }
`

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle

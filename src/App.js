import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import colors from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results/" element={<Results />} />
          <Route path="/freelances/" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

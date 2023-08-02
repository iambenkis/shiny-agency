// import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
// import colors from './colors'
// import { createGlobalStyle } from 'styled-components'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './style/GlobalStyle'

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <SurveyProvider>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} />
              <Route path="/results/" element={<Results />} />
              <Route path="/freelances/" element={<Freelances />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </SurveyProvider>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App

import { useState } from 'react'
import { ThemeContext, themes } from './themeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'

function App() {
  const theme = useState(themes.light);
  return (
    <ErrorBoundary>
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
      <div className='content' style={{background: theme[0].background}}>
        <Header />
        <main>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='aboutme' element={<AboutMe />}/>
            <Route path='/' element={<Main />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </ThemeContext.Provider>
    </ErrorBoundary>
  )
}

export default App

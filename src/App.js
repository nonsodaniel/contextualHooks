import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import BookLists from './components/layouts/BookLists'
import ThemeContextProvider from './contexts/ThemeContexts'
import ThemeToggle from './components/layouts/ThemeToggle'
import AuthContextProvider from './contexts/AuthContexts'

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <div className='app wrapper' id='wrapper'>
          <ThemeContextProvider>
            <AuthContextProvider>
              <ThemeToggle />
              <Navbar />
              <BookLists />
            </AuthContextProvider>
          </ThemeContextProvider>
          {/* <Footer /> */}
        </div>

      </BrowserRouter>
    )
  }
}

export default App

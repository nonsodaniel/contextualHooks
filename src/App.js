import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <div className='app wrapper' id='wrapper'>
          <Navbar />
          <Footer />
        </div>

      </BrowserRouter>
    )
  }
}

export default App

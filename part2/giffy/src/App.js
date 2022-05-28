import React, { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  //const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/soccer">Soccer</Link>
        <Link to="/gif/cats">Cats</Link>
        <Link to="/gif/dogs">Dogs</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  )
}

export default App

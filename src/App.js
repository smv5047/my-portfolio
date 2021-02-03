import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Nav from "./components/Nav"
import { Route } from "react-router-dom"

import Blog from "./components/Blog"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Nav /> */}
      <header className="App-header">
        <h2>Welcome to Steve V's Site</h2>
      </header>
      <Route path="/blog">
        <Blog />
      </Route>
    </div>
  )
}

export default App

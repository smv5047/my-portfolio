import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router-dom"

import Blog from "./components/Blog"
import Home from "./components/Home"
import MyStory from "./components/MyStory"
import Contact from "./components/Contact"
import Newsletter from "./components/NewsLetter"
import SecurityAudit from "./components/SecurityAudit"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/SecurityAudit" component={SecurityAudit} />
        <Route exact path="/newsletter" component={Newsletter} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/mystory" component={MyStory} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App

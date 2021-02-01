import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import MailchimpSubscribe from "react-mailchimp-subscribe"

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Steven's Portfolio!!!!</h2>
        <h3>---CURRENTLY UNDER CONSTRUCTION---</h3>
        {/* Update to seperate component */}
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
      </header>
    </div>

    //Hello WORLD
    //
  )
}

export default App

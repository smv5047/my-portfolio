import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import ConvertKitForm from "convertkit-react"

function App() {
  const config = {
    formId: process.env.CONVERT_KIT_FORM_ID,
    // template: "mills",
    emailPlaceholder: "Enter an email address",
    submitText: "Sign up"
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Steven's Portfolio!!!!</h2>
        <h3>---CURRENTLY UNDER CONSTRUCTION---</h3>
        <ConvertKitForm {...config} />
      </header>
    </div>
  )
}

export default App

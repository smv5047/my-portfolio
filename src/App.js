import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import ConvertKitForm from "convertkit-react"

function App() {
  const config = {
    formId: process.env.CONVERT_KIT_FORM_ID,
    // template: "mills",
    emailPlaceholder: "Enter Your email address",
    submitText: "Sign up!"
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Steve V's Site</h2>

        <ConvertKitForm {...config}>
          <h1>test</h1>
          <p>Subscribe to get the latest content</p>
        </ConvertKitForm>
      </header>
    </div>
  )
}

export default App

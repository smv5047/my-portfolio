import { TextField, Button } from "@material-ui/core"
import React from "react"
import "../App.css"

export default function Contact() {
  const handleSubmit = (e) => {
    alert("A name was submitted")
    e.preventDefault()
  }

  return (
    <header className="App-header">
      <h2>Contact Me</h2>
      {/* <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="filled-basic" label="First Name" variant="filled" />
        <TextField id="filled-basic" label="Last Name" variant="filled" />
        <TextField id="filled-basic" required label="Email" variant="filled" />
        <TextField
          id="filled-basic"
          required
          label="Email"
          multiline
          variant="filled"
        />
        <Button type="submit">Submit</Button>
      </form> */}
    </header>
  )
}

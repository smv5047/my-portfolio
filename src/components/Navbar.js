import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "react-router-dom"

function Navbar() {
  const handleChange = (event, newValue) => {
    console.log(event)
  }

  return (
    <>
      <div>
        <AppBar position="static">
          <Tabs
            onChange={handleChange}
            aria-label="simple tabs example"
            wrapped={true}
          >
            <Tab label="Home" to="/" component={Link} />
            <Tab label="My Story" to="/MyStory" component={Link} />
            <Tab
              label="Blog"
              to={{ pathname: "https://medium.com/@BTSSteve" }}
              target="_blank"
              component={Link}
            />
            <Tab label="Newsletter" to="/Newsletter" component={Link} />
            <Tab
              label="Portfolio"
              to={{ pathname: "https://www.stevenvandenburg.dev" }}
              target="_blank"
              component={Link}
            />
            <Tab
              label="DJ"
              to={{ pathname: "https://www.djgalavance.com" }}
              target="_blank"
              component={Link}
            />
            <Tab label="Security Audit" to="/SecurityAudit" component={Link} />

            <Tab label="Contact" to="/Contact" component={Link} />
          </Tabs>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar

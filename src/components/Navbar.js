import React from "react"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "react-router-dom"

function Navbar() {
  const handleChange = (event, newValue) => {
    // event.preventDefault()
    console.log(event)
  }

  return (
    <>
      <div>
        <AppBar position="static">
          <Tabs
            // value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            wrapped={true}
          >
            <Tab label="Home" to="/" component={Link} />
            <Tab label="My Story" to="/MyStory" component={Link} />
            <Tab label="Blog" to="/Blog" component={Link} />
            <Tab label="Newsletter" to="/Newsletter" component={Link} />
            <Tab label="Portfolio">
              <a href="www.stevenvandenburg.dev"></a>
            </Tab>
            <Tab label="DJ">
              <a href="www.djgalavance.com"></a>
            </Tab>
            <a target="_blank" href="www.djgalavance.com"></a>
            <Tab label="Contact" to="/Contact" component={Link} />
          </Tabs>
        </AppBar>

        {/* <TabPanel value={value} index={0}>
        Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
        Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
        Item Three
        </TabPanel> */}
      </div>
    </>
  )
}

export default Navbar

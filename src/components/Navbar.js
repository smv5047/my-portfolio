import React from "react"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import { Route, Link } from "react-router-dom"

function Navbar() {
  const handleChange = (event, newValue) => {
    console.log(event)
  }
  const preventDefault = (event) => event.preventDefault()

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
            <Tab label="Home" />
            {/* Model now page after https://www.anthonyjcampbell.com/now/ */}
            <Tab label="Now" />
            <Tab label="Blog" />
            <Tab label="My Story" />
            <Tab label="Developer Portfolio" />
            <Tab label="Contact" />
            DJ
            <a target="_blank" href="www.djgalavance.com"></a>
            <Tab label="Newsletter" />
            {/* <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} /> */}
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

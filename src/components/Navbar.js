import React from "react"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

function Navbar() {
  const handleChange = (event, newValue) => {
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
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
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
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Resume</h2>
        <h2>Now</h2>
        <h2>Blog</h2>
      </div>
    </>
  )
}

export default Navbar

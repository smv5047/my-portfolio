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
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Now" />
            <Tab label="Blog" />
            <Tab label="Contact" />
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

import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import Burger from "../MenuItem/Burger";
import FriedChicken from "../MenuItem/FriedChicken";
import Noodles from "../MenuItem/Noodles";
import Pizza from "../MenuItem/Pizza";
import Salad from "../MenuItem/Salads";
import Sandwiches from "../MenuItem/Sandwiches";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MenuTabs = ({ setCart, cart, products }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              hidden: true,
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                overflowX: "scroll",
              },
              "& button": {
                borderRadius: "5px 5px 0 0 ",
                color: "#000",
              },
              "& button.Mui-selected": {
                backgroundColor: "#FFC446",
                color: "#fff",
                fontWeight: 600,
              },
            }}
          >
            <Tab label="Pizza" {...a11yProps(0)} />
            <Tab label="Burgers" {...a11yProps(1)} />
            <Tab label="Sandwiches" {...a11yProps(2)} />
            <Tab label="Salads" {...a11yProps(3)} />
            <Tab label="Fried Chicken" {...a11yProps(4)} />
            <Tab label="Noodles" {...a11yProps(5)} />
            <Tab label="Noodles" {...a11yProps(6)} />
            <Tab label="Noodles" {...a11yProps(7)} />
            <Tab label="Noodles" {...a11yProps(8)} />
            <Tab label="Noodles" {...a11yProps(9)} />
            <Tab label="Noodles" {...a11yProps(10)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Pizza setCart={setCart} cart={cart} products={products} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Burger />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Sandwiches />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Salad />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FriedChicken />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Noodles />
        </TabPanel>
      </Box>
    </div>
  );
};

export default MenuTabs;

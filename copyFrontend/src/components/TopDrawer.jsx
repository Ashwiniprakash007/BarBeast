import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LiquorIcon from '@mui/icons-material/Liquor';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Collapse } from "@mui/material";
import {useNavigate} from "react-router-dom"

// list of Bar icons.
 import WineBarIcon from '@mui/icons-material/WineBar';
//import CocktailIcon from '@mui/icons-material/Cocktail';
 import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
// import SetMealIcon from '@mui/icons-material/SetMeal';
// import BeerIcon from '@mui/icons-material/Beer';

export const TopDrawer=({ open, onClose })=> {
      const [openDropdown, setOpenDropdown] = React.useState(null);
      const navigate = useNavigate();

      function handleClickforMixedDrink(){
        navigate("/mixed-drink-list")
      }
    
      const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
      };
  const list = () => (
    <Box
      sx={{ width: 'auto',
            color: "#333333",
            backgroundColor: "#FFB74D",
            cursor:"pointer"
         }}
      role="presentation"
      
    >
 <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
          borderBottom: "1px solid #444",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          <LocalBarIcon sx={{ color: "#333333" }} />
          <span>Mixed Drinks</span>
        </Box>
      </Box>
      <List>
        {/* Mixed Drink List */}
        <ListItem key="Mixed Drink List" disablePadding>
          <ListItemButton onClick={handleClickforMixedDrink}>
            <ListItemIcon sx={{ color: "#333333" }}>
              <LiquorIcon />
            </ListItemIcon>
            <ListItemText primary="Mixed Drink List" />
          </ListItemButton>
          
        </ListItem>
      

        {/* Filter By Mixed */}
        <ListItem key="Filter By Mixed" disablePadding>
          <ListItemButton >
            <ListItemIcon sx={{ color: "#333333" }}>
              <EmojiFoodBeverageIcon />
            </ListItemIcon>
            <ListItemText primary="Filter By Mixed" />
          </ListItemButton>
          
        </ListItem>
        {/*  */}
       

           {/* Mixed Drinks UI */}
        <ListItem key="Mixed Drinks UI" disablePadding>
          <ListItemButton onClick={() => handleDropdownToggle("mixedDrinksUi")} >
            <ListItemIcon sx={{ color: "#333333" }}>
              <WineBarIcon />
            </ListItemIcon>
            <ListItemText primary="Mixed Drinks UI" />
          </ListItemButton>
          
        </ListItem>
        {/*  */}
        <Collapse in={openDropdown === "mixedDrinksUi"} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                pl: 4, // Indent child options slightly
              }}
            >
              {["Error - Drink Ratio Under 100%",
                "Added Mixtures",
                "Mixed Drink UI With Added Mixture.",
                
            ].map((option, index) => (
                <ListItem key={option} disablePadding>
                  <ListItemButton>
                    <ListItemText  primary={option}
                  primaryTypographyProps={{
                  sx: { color: "#333333", fontSize: 14,  marginLeft:5  }, // Set font size and color
            }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      {list()}
    </Drawer>
  );
}

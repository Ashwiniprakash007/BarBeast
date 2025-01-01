import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import { Collapse } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import LiquorIcon from '@mui/icons-material/Liquor';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';


export const TemporaryDrawer = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        backgroundColor: "#FFB74D",
        color: "#333333",
        cursor:"pointer"
      }}
      role="presentation"
    >

         {/* Settings Icon and Label at the Top */}
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
          <SettingsIcon sx={{ color: "#333333" }} />
          <span>Settings</span>
        </Box>
      </Box>
      <List>
        {/* Replace Alcohol */}
        <ListItem key="Replace Alcohol" disablePadding>
          <ListItemButton onClick={() => handleDropdownToggle("replaceAlcohol")}>
            <ListItemIcon sx={{ color: "#333333" }}>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Replace Alcohol" />
          </ListItemButton>
          
        </ListItem>
        {/*  */}
        <Collapse in={openDropdown === "replaceAlcohol"} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                pl: 4, // Indent child options slightly
                fontWeight:"bold" 
              }}
            >
              {["Replace Alcohol",
               "Alcohol Index", 
               "Waiting Screen For Bottel Moving To Correct Spot",
               "Bottle Replacement Prompt",
               "Name Change Prompt",
               "Rename Alcohol",
               "Return Home"
            ].map((option, index) => (
                <ListItem key={option} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={option}
                  primaryTypographyProps={{
                  sx: { color: "#333333", fontSize: 14, marginLeft:5,  }, // Set font size and color
            }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

        {/* Replace Mixed */}
        <ListItem key="Replace Mixed" disablePadding>
          <ListItemButton onClick={() => handleDropdownToggle("replaceMixed")}>
            <ListItemIcon sx={{ color: "#333333" }}>
              <LiquorIcon />
            </ListItemIcon>
            <ListItemText primary="Replace Mixed" />
          </ListItemButton>
          
        </ListItem>
        {/*  */}
        <Collapse in={openDropdown === "replaceMixed"} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                pl: 4, // Indent child options slightly
              }}
            >
              {["Mixer Replace",
               "Same Mixer Prompt",
                "Removel Of Mixer Container",
                "Insert Of Cleaning Container",
                "Washing Waiting-Button",
                "Eject Cleaning Container",
                "Rename Mixer"
            ].map((option, index) => (
                <ListItem key={option} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={option}
                  primaryTypographyProps={{
                  sx: { color: "#333333", fontSize: 14,  marginLeft:5  }, // Set font size and color
            }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

           {/* Clean Mixed Drinks */}
        <ListItem key="Clean Mixed Drinks" disablePadding>
          <ListItemButton onClick={() => handleDropdownToggle("cleanMixedDrinks")}>
            <ListItemIcon sx={{ color: "#333333" }}>
              <EmojiFoodBeverageIcon />
            </ListItemIcon>
            <ListItemText primary="Clean Mixed Drinks" />
          </ListItemButton>
          
        </ListItem>
        {/*  */}
        <Collapse in={openDropdown === "cleanMixedDrinks"} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                pl: 4, // Indent child options slightly
              }}
            >
              {["Clean of All Mixer Prompt",
                "Removel Of Mixer Container",
                "Insert Of Cleaning Container",
                "Washing Waiting-Button",
                "Eject Cleaning Container",
                "Rename Mixer"
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
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#FFB74D",
          color: "#333333",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
};

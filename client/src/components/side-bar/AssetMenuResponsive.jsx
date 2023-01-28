import { List, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { assetManagementMenuList } from "./menu-list";

export default function AssetMenuResponsive({ selectedMenu }) {
  //handle Selected Menu
  const [selectedIndex, setSelectedIndex] = useState(selectedMenu);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  //Map the All Menu
  const menuItems = assetManagementMenuList.map((menu, index) => {
    //Map the Main menu
    if (menu.type === "item") {
      return (
        <List component="div" disablePadding key={menu.id}>
          <ListItemButton
            selected={selectedIndex === menu.id}
            onClick={(event) => handleListItemClick(event, menu.id)}
            // href={menu.url}
            sx={{ color: "white", paddingLeft: "80px" }}
          >
            <Typography variant="body2">{menu.title}</Typography>
          </ListItemButton>
        </List>
      );
    }
    //Map the Main and Children menu
    if (menu.type === "collapse") {
      const childrenMenu = menu.children.map((children, index) => {
        return (
          // <ListItem component="div" disablePadding key={children.id}>
          <ListItemButton
            key={children.id}
            selected={selectedIndex === children.id}
            onClick={(event) => handleListItemClick(event, children.id)}
            // href={children.url}
            sx={{ color: "white", paddingLeft: "100px" }}
          >
            <Typography variant="body2">{children.title}</Typography>
          </ListItemButton>
          // </ListItem>
        );
      });

      return (
        <List key={menu.id} disablePadding>
          <Typography
            variant="body2"
            sx={{ color: "white", padding: "8px 16px 8px 80px" }}
          >
            {menu.title}
          </Typography>
          {childrenMenu}
        </List>
      );
    }
  });

  return <>{menuItems}</>;
}

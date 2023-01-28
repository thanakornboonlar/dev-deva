import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack, Typography } from "@mui/material";
import CropPortraitSharpIcon from "@mui/icons-material/CropPortraitSharp";
import AssetMenuResponsive from "../side-bar/AssetMenuResponsive";

export default function TemporaryDrawer({
  toggleDrawer,
  isHeaderBarOpen,
  setIsHeaderBarOpen,
  selectedMenu,
  setSelectedMenu,
}) {
  const menuList = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#319400",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* ----------------------- Side-Bar-Header ----------------------- */}
      <Stack
        id="Side-Bar-Header"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Stack id="Hospital-Logo" width={35} height="auto" marginLeft={2}>
          <img src="/images/logos/public-health.png" alt="public health" />
        </Stack>
        <Stack
          id="Hospital-Name"
          direction={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          padding={2}
          width="100%"
        >
          <Typography variant="body2" sx={{ color: "white" }}>
            โรงพยาบาลตัวอย่าง
          </Typography>
        </Stack>
      </Stack>
      {/* ----------------------- Side-Bar-Menu ----------------------- */}
      <Stack id="Side-bar-menu-list" width={"100%"}>
        <ListItemButton sx={{ color: "white" }}>
          <ListItemIcon sx={{ color: "white" }}>
            <CropPortraitSharpIcon />
          </ListItemIcon>
          <Typography>กลับหน้าหลัก</Typography>
        </ListItemButton>

        <Stack
          id="Side-bar-title"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          height={60}
          padding={"8px 16px 8px 10px"}
          sx={{
            backgroundColor: "primary.dark",
            borderLeft: "4px solid #FFFFFF",
          }}
        >
          <CropPortraitSharpIcon sx={{ color: "white", fontSize: 30 }} />
          <Typography sx={{ color: "white" }} marginLeft={4}>
            งานบริหาสินทรัพย์
          </Typography>
        </Stack>

        {/* ----------------------- Menu List ----------------------- */}
        <List>
          <AssetMenuResponsive selectedMenu={selectedMenu} />
        </List>
      </Stack>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={isHeaderBarOpen[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {menuList(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

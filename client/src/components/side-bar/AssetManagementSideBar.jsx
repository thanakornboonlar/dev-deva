import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import CropPortraitSharpIcon from "@mui/icons-material/CropPortraitSharp";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssetManagementMenu from "./AssetManagementMenu";

export default function AssetManagementSideBar({ selectedMenu }) {
  return (
    <Drawer
      id="Side-bar-container"
      flex={1}
      sx={{
        display: { xs: "none", lg: "block" },
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#319400",
          width: 300,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
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
          <AssetManagementMenu selectedMenu={selectedMenu} />
        </List>
      </Stack>
    </Drawer>
  );
}

import { Box, Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import AssetManagementSideBar from "../components/side-bar/AssetManagementSideBar";
import HeaderBar from "../components/header-bar/HeaderBar";
import RequisitionApproval from "../components/asset-management/asset-requisition/RequisitionApproval";
import HeaderBarDrawer from "../components/header-bar/HeaderBarDrawer";

export default function AssetManagementLayout() {
  const [selectedMenu, setSelectedMenu] = useState("requisition-approval");

  //handle HeaderBarDrawer
  const [isHeaderBarOpen, setIsHeaderBarOpen] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsHeaderBarOpen({ ...isHeaderBarOpen, [anchor]: open });
  };

  return (
    <Box>
      <Stack direction={"row"} justifyContent="space-between">
        {/* ------------------ Side Bar Layout (Left Layout) ------------------ */}

        <AssetManagementSideBar selectedMenu={"requisition-approval"} />

        {/* ---------- Head Bar & Content Layout (Right Layout) ---------- */}

        <Box flex={1}>
          {/* ------------------ Header Bar ------------------ */}
          <HeaderBar
            toggleDrawer={toggleDrawer}
            isHeaderBarOpen={isHeaderBarOpen}
            setIsHeaderBarOpen={setIsHeaderBarOpen}
          />
          <HeaderBarDrawer
            toggleDrawer={toggleDrawer}
            isHeaderBarOpen={isHeaderBarOpen}
            setIsHeaderBarOpen={setIsHeaderBarOpen}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* ------------------ Content ------------------ */}
          <RequisitionApproval setSelectedMenu={setSelectedMenu} />
        </Box>
      </Stack>
    </Box>
  );
}

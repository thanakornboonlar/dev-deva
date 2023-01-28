import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CropPortraitSharpIcon from "@mui/icons-material/CropPortraitSharp";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import React from "react";

export default function DailyStatus({ status, numberOfDocuments }) {
  return (
    <Stack
      width={"100%"}
      height={50}
      backgroundColor={"#F5F5F5"}
      borderRadius={2}
      border="1px solid #B5B5B5"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        {status === "ทั้งหมด" && (
          <DescriptionOutlinedIcon sx={{ color: "gray" }} />
        )}
        {status === "รออนุมัติ" && (
          <CropPortraitSharpIcon sx={{ color: "gray" }} />
        )}
        {status === "อนุมัติแล้ว" && (
          <CheckCircleOutlineOutlinedIcon sx={{ color: "gray" }} />
        )}
        {status === "Reject" && (
          <HighlightOffOutlinedIcon sx={{ color: "gray" }} />
        )}
        <Typography variant="body2" color={"gray"}>
          {status}
        </Typography>
      </Stack>
      <Typography variant="body1">{numberOfDocuments}</Typography>
    </Stack>
  );
}

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  OutlinedInput,
  Stack,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TextSeacrhInput } from "../InputStyles";
import MenuIcon from "@mui/icons-material/Menu";

import CropPortraitSharpIcon from "@mui/icons-material/CropPortraitSharp";
import { randomAvatar } from "../../utils/randomAvatar";
import React from "react";

export default function HeaderBar({
  toggleDrawer,
  isHeaderBarOpen,
  setIsHeaderBarOpen,
}) {
  const avatarUrl = randomAvatar();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", padding: "16px" }}
      // borderBottom: "2px solid #E5E5E5"
      // maxWidth="xl"
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            },
            justifyContent: "space-between",
          }}
        >
          {/* ------------- Search Bix (Left)-------------*/}
          <Box flex={0.7} width="100%" margin={1}>
            <TextSeacrhInput
              id="Search-Input"
              type="text"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CropPortraitSharpIcon />
                  </InputAdornment>
                ),
              }}
              color="success"
              placeholder={"ID ใบเบิกจ่ายครุภัณฑ์"}
            />
          </Box>

          {/* ------------- Profile Nav (Right) -------------*/}
          <Box flex={0.7} width="100%" margin={1}>
            <Stack
              id="Profile-Nav"
              direction="row"
              justifyContent={{
                xs: "space-between",
                sm: "space-between",
                md: "flex-end",
              }}
              alignItems="center"
              spacing={{ xs: 0, sm: 0, md: 2 }}
              width={{ xs: "100%", sm: "100%" }}
              margin={1}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Badge color="secondary" variant="dot">
                  <CropPortraitSharpIcon sx={{ color: "gray" }} />
                </Badge>

                <Badge color="error" variant="dot">
                  <CropPortraitSharpIcon sx={{ color: "gray" }} />
                </Badge>

                <CropPortraitSharpIcon sx={{ color: "gray" }} />
              </Stack>

              <Stack
                id="Name-Avatar"
                variant="contained"
                component="label"
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
              >
                <Typography color={"#000000"} minWidth={140} marginLeft={0.5}>
                  Thanakorn Boonlar
                </Typography>
                <Stack
                  sx={{
                    width: 35,
                    height: 35,
                    cursor: "pointer",
                    margin: "0 10px 0 10px",
                  }}
                >
                  <Avatar
                    alt="Profile Picture"
                    src={avatarUrl}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Stack>
              </Stack>

              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer("top", true)}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: "black" }} />
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
      <Divider />
    </AppBar>
  );
}

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#2e7d32",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#FFD700",
    },
    info: {
      main: "#8E8E8E",
    },
    success: {
      main: "#319400",
    },
    listselected: {
      main: "#D3E9FF",
    },
    action: {
      active: "rgba(0, 0, 0, 0.5)",
      hover: "rgba(0, 0, 0, 0.3)",
      hoverOpacity: "0.2",
      selected: "rgba(0, 0, 0, 1)",
      selectedOpacity: "0.9",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.5)",
      disabledOpacity: "0.5",
      focus: "rgba(0, 0, 0, 0.26)",
      focusOpacity: "0.12",
      activatedOpacity: "0.12",
    },
  },

  typography: {
    h1: {
      fontWeight: "300",
      fontSize: "97px",
    },
    h2: {
      fontWeight: "300",
      fontSize: "61px",
    },
    h3: {
      fontWeight: "400",
      fontSize: "48px",
    },
    h4: {
      fontWeight: "300",
      fontSize: "34px",
    },
    h5: {
      fontWeight: "300",
      fontSize: "24px",
    },
    h6: {
      fontWeight: "600",
      fontSize: "20px",
    },
    caption: {
      fontWeight: "400",
      fontSize: "12px",
    },
    overline: {
      fontWeight: "400",
      fontSize: "10px",
    },
    button: {
      fontWeight: "600",
      fontSize: "14px",
    },
    body2: {
      fontWeight: "400",
      fontSize: "14px",
    },
    body1: {
      fontWeight: "500",
      fontSize: "16px",
    },
    subtitle2: {
      fontWeight: "600",
      fontSize: "14px",
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "16px",
    },
    findYouJob: {
      fontWeight: "400",
      fontSize: "20px",
    },
    meetTeam: {
      fontWeight: "400",
      fontSize: "20px",
    },
    underLine: {
      fontWeight: "600",
      fontSize: "14px",
    },
  },
});

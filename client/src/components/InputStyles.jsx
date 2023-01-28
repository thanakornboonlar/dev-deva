import {
  InputBase,
  ListItemButton,
  Select,
  styled,
  TextField,
} from "@mui/material";

export const TextSeacrhInput = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#319400",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#319400",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& fieldset": {
      border: "1.5px solid #319400",
    },
    "&:hover fieldset": {
      border: "2px solid #319400",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #319400",
    },
  },
}));

export const SelectInput = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    border: "1.5px solid #319400",
    "&:hover": { borderColor: "#319400" },
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #319400",
  },
  "&:before": { border: "1.5px solid #319400" },
  "&.MuiOutlinedInput:hover": { border: "1.5px solid #319400" },

  "& .MuiOutlinedInput-root": {
    // backgroundColor: "#FFFFFF",

    "& fieldset": {
      border: "2px solid #319400",
    },
    "&:hover fieldset": {
      border: "2px solid #319400",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #319400",
    },
  },
}));

import {
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";

export const TableHeadRowStyled = styled(Stack)(({ theme }) => ({
  backgroundColor: "rgba(49, 148, 0, 0.2)",
  padding: 8,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const TableHeadStyled = styled(Typography)(({ theme }) => ({
  variant: "body1",
  textAlign: "center",
  color: "#319400",
}));

export const TableDataRowStyled = styled(Stack)(({ theme }) => ({
  padding: 8,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const TableDataStyled = styled(Stack)(({ theme }) => ({
  variant: "body1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 4,
  paddingRight: 4,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(49, 148, 0, 0.2)",
    color: "#319400",
    padding: 8,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 8,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F5F5F5",
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

export const StyledTypographyCell = styled(Typography)(({ theme }) => ({
  border: "1.5px solid #319400",
  borderRadius: 4,
  padding: 4,
  width: "100%",
  backgroundColor: "#FFFFFF",
}));

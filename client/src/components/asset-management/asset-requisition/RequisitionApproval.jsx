import {
  InputAdornment,
  List,
  TextField,
  Typography,
  styled,
  Box,
  Stack,
  Grid,
  Paper,
  Divider,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  MenuItem,
  OutlinedInput,
  Select,
  FormControl,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  TableBody,
  IconButton,
} from "@mui/material";

import {
  SelectInput,
  TextSeacrhInput,
  SidebarButtonStyled,
} from "../../InputStyles";
import DeleteIcon from "@mui/icons-material/Delete";

import CropPortraitSharpIcon from "@mui/icons-material/CropPortraitSharp";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DailyStatus from "../../DailyStatus";
import { requisitionApprovalList } from "./requisition-approval-list";

import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTypographyCell,
  TableDataRowStyled,
  TableDataStyled,
  TableHeadRowStyled,
  TableHeadStyled,
} from "../../RequisitionTableStyles";

export default function RequisitionApproval({ setSelectedMenu }) {
  useEffect(() => {
    setSelectedMenu("requisition-approval");
  });
  const StackContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    boxShadow: 2,
  }));

  const dailyStatus = [
    { status: "ทั้งหมด", numberOfDocuments: 10 },
    { status: "รออนุมัติ", numberOfDocuments: 6 },
    { status: "อนุมัติแล้ว", numberOfDocuments: 2 },
    { status: "Reject", numberOfDocuments: 2 },
  ];

  const departmentList = [
    {
      value: "OPD ER",
    },
    {
      value: "IPD ER",
    },
  ];

  const headerRow = [
    "เลขครุภัณฑ์",
    "ชื่อครุภัณฑ์",
    "ยี่ห้อ/รุ่น/ขนาด",
    "Serial No.",
    "ผู้ผลิด/ผู้จำหน่าย",
    "จำนวน",
    "จำนวนเงิน",
  ];

  const dataRows = [
    [159, "Yoghurt", "Brand A", "AA2443", "Brand A ", 2, 1000],
    [237, "Ice cream", "Brand A", "AA2437", "Brand A ", 1, 3000],
    [262, "Eclair", "Brand A", "AA2424", "Brand A ", 2, 5000],
    [305, "Cupcake", "Brand A", "AA2467", "Brand A", 4, 2000],
    [356, "Gingerbread", "Brand A", "AA2449", "Brand A ", 6, 1000],
  ];

  const [date, setDate] = useState(new Date());
  const [borrowDate, setBorrowDate] = useState(new Date());
  const [fiscalYear, setFiscalYear] = useState(new Date());
  const [department, setDepartment] = useState("");

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [selectedRequisition, setSelectedRequisition] = useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedRequisition(index);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        flex={6}
        component="main"
        padding={0}
        sx={{ flexGrow: 1, bgcolor: "background.default" }}
      >
        {/* ------------------- Title ------------------- */}
        <Typography
          variant="h6"
          sx={{ color: "#319401" }}
          padding={1.5}
          paddingLeft={4}
        >
          อนุมัติเบิกจ่ายครุภัณฑ์
        </Typography>

        {/* ------------------- Content Container ------------------- */}
        <Stack
          backgroundColor={"#F5F5F5"}
          width="100%"
          padding={"5px 10px 5px 10px"}
          spacing={2}
        >
          {/* ------------------- Daily Approval ------------------- */}
          <Box
            id="Daily-Approval"
            sx={{ flexGrow: 1 }}
            backgroundColor="#FFFFFF"
            borderRadius={2}
          >
            <Grid2
              id="Grid-Daily-Approval-Top"
              container
              spacing={{ xs: 1, md: 2, lg: 3 }}
              margin={1}
            >
              <Grid2 xs={12} sm={6} md={6} lg={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#319401" }}
                  textAlign={{ xs: "center", sm: "center", md: "start" }}
                >
                  รายการเสนออนุมัติประจำวัน
                </Typography>
              </Grid2>
              <Grid2 xs={12} sm={6} md={6} lg={3}>
                <DatePicker
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextSeacrhInput
                      {...params}
                      fullWidth
                      size="small"
                      helperText={null}
                    />
                  )}
                />
              </Grid2>
              <Grid2 xs={12} sm={6} md={6} lg={3}>
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
                  placeholder={"หน่วยงานที่เสนอ รหัส P4P"}
                />
              </Grid2>
              <Grid2 xs={12} sm={6} md={6} lg={3}>
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
                  placeholder={"ดูทั้งหมด"}
                />
              </Grid2>
            </Grid2>

            <Divider />
            <Grid2
              id="Grid-Daily-Approval-Bottom"
              container
              spacing={{ xs: 1, md: 2, lg: 3 }}
              margin={1}
            >
              {dailyStatus.map((dailyStatus, index) => {
                return (
                  <Grid2 xs={6} sm={3} md={3} lg={3} key={index}>
                    <DailyStatus
                      status={dailyStatus.status}
                      numberOfDocuments={dailyStatus.numberOfDocuments}
                    />
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>
          {/* ------------------- Requisition List ------------------- */}
          {/* <Box> */}
          <Stack
            direction={{
              lg: "column",
              xl: "row",
            }}
            justifyContent="space-between"
          >
            {/* ------------------- รายการเสนออนุมัติ (Left)------------------- */}
            <Stack
              id="Approval-List"
              backgroundColor="#FFFFFF"
              borderRadius={2}
              maxWidth={{ xl: 380 }}
              maxHeight={{ xs: 250, sm: 250, md: 250, lg: 250, xl: 600 }}
              overflow="scroll"
              marginBottom={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 0 }}
            >
              <Stack backgroundColor="#FFFFFF">
                <Typography
                  variant="h6"
                  sx={{ color: "#319401", width: "100%", height: "100%" }}
                  textAlign={{ xs: "center", sm: "center", md: "start" }}
                  padding={2}
                >
                  รายการเสนออนุมัติ
                </Typography>
              </Stack>

              <Divider />

              <Grid2
                id="Grid-Approval-List"
                container
                margin={0}
                padding={1.5}
                spacing={1}
              >
                {requisitionApprovalList.map((list, index) => {
                  return (
                    <Grid2
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={12}
                      key={index}
                      minWidth={360}
                    >
                      <ListItemButton
                        selected={selectedRequisition === index}
                        onClick={(event) => handleListItemClick(event, index)}
                        sx={{
                          borderRadius: 2,
                          padding: 0,
                          border: "1px solid #E5E5E5",
                          "&.Mui-selected": {
                            backgroundColor: "rgba(49, 148, 0, 0.2)",
                            ":hover": {
                              backgroundColor: "rgba(49, 148, 0, 0.2)",
                            },
                          },
                        }}
                      >
                        <Box flex={1}>
                          <Box flex={1}>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                              padding={1.5}
                            >
                              <Stack>
                                <Typography sx={{ color: "#319400" }}>
                                  เลขที่ใบเบิก
                                </Typography>
                                <Typography sx={{ color: "#319400" }}>
                                  หน่วยงานที่เสนอ
                                </Typography>
                              </Stack>

                              <Stack>
                                <Stack
                                  direction={"row"}
                                  justifyContent="space-between"
                                  spacing={2}
                                >
                                  <Typography sx={{ color: "gray" }}>
                                    {list.id}
                                  </Typography>
                                  <Typography sx={{ color: "gray" }}>
                                    {list.date}
                                  </Typography>
                                </Stack>

                                <Typography sx={{ color: "gray" }}>
                                  {list.department}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Box>
                          <Divider />
                          <Stack
                            direction={"row"}
                            justifyContent={"flex-end"}
                            spacing={2}
                            padding={1.5}
                          >
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                            >
                              Reject
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                            >
                              อนุมัติ
                            </Button>
                          </Stack>
                        </Box>
                      </ListItemButton>
                    </Grid2>
                  );
                })}
              </Grid2>
            </Stack>

            {/* ------------------- Create Requisition  (Right) ------------------- */}
            <Box
              id="Record-Report"
              flex={1}
              bgcolor="#F5F5F5"
              marginLeft={{ lg: 0, xl: 2 }}
              maxHeight={600}
              overflow="scroll"
            >
              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                height={"100%"}
              >
                {/* ------------------- บันทึกใบเบิกครุภัณฑ์ ------------------- */}

                <Stack
                  bgcolor="#FFFFFF"
                  sx={{ borderRadius: 2 }}
                  marginBottom={1.5}
                  component="form"
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    padding={2}
                  >
                    <Typography variant="h6" sx={{ color: "#319400" }}>
                      บันทึกใบเบิกครุภัณฑ์
                    </Typography>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                    >
                      บันทึก
                    </Button>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={{ sm: "column", md: "row" }}
                    justifyContent={"space-between"}
                    padding={2}
                    spacing={2}
                  >
                    <Stack spacing={2} flex={1}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 65,
                            lg: 65,
                            xl: 65,
                          }}
                        >
                          ID ใบเบิก
                        </Typography>
                        <TextSeacrhInput
                          id="ID ใบเบิก"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 65,
                            lg: 65,
                            xl: 65,
                          }}
                        >
                          หน่วยงาน
                        </Typography>
                        <TextSeacrhInput
                          id="select-department"
                          select
                          size="small"
                          fullWidth
                          required
                          defaultValue={""}
                          onChange={handleDepartment}
                        >
                          <MenuItem
                            value={""}
                            disabled
                            sx={{
                              "&.Mui-selected": {
                                backgroundColor: "rgba(49, 148, 1, 0.8)",
                              },
                            }}
                          >
                            เลือกหน่วยงาน
                          </MenuItem>
                          {departmentList.map((option, index) => (
                            <MenuItem
                              key={index}
                              value={option.value}
                              sx={{
                                "&.Mui-selected": {
                                  backgroundColor: "rgba(49, 148, 1, 0.8)",
                                  color: "white",
                                },
                              }}
                            >
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextSeacrhInput>
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 65,
                            lg: 65,
                            xl: 65,
                          }}
                        >
                          หน่วยงาน
                        </Typography>
                        <TextSeacrhInput
                          id="หน่วยงาน"
                          variant="outlined"
                          size="small"
                          fullWidth
                          multiline
                          maxRows={2}
                        />
                      </Stack>
                    </Stack>
                    <Stack spacing={2} flex={1}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 80,
                            lg: 80,
                            xl: 80,
                          }}
                        >
                          เลขที่ใบเบิก
                        </Typography>
                        <TextSeacrhInput
                          id="เลขที่ใบเบิก"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 80,
                            lg: 80,
                            xl: 80,
                          }}
                        >
                          ผู้มีสิทธิ์
                        </Typography>
                        <TextSeacrhInput
                          id="ผู้มีสิทธิ์"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: "#319400" }}
                          minWidth={{
                            xs: 120,
                            sm: 120,
                            md: 80,
                            lg: 80,
                            xl: 80,
                          }}
                        >
                          จำนวนเงิน
                        </Typography>
                        <TextSeacrhInput
                          id="หน่วยงาน"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                          type={"number"}
                        />
                        <Typography sx={{ color: "#319400" }}>บาท</Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={2} flex={1}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography sx={{ color: "#319400" }} minWidth={120}>
                          ทะเบียนเอกสาร
                        </Typography>
                        <TextSeacrhInput
                          id="เลขที่ใบเบิก"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography sx={{ color: "#319400" }} minWidth={120}>
                          วันที่เบิก
                        </Typography>
                        <TextSeacrhInput
                          id="datetime"
                          type="datetime-local"
                          size="small"
                          fullWidth
                          onChange={(newValue) => {
                            setBorrowDate(new Date(newValue.target.value));
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography sx={{ color: "#319400" }} minWidth={120}>
                          เลือกปีงบประมาณ
                        </Typography>
                        <DatePicker
                          views={["year"]}
                          value={fiscalYear}
                          onChange={(newValue) => {
                            setFiscalYear(newValue);
                          }}
                          renderInput={(params) => (
                            <TextSeacrhInput
                              fullWidth
                              size="small"
                              {...params}
                              helperText={null}
                            />
                          )}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>

                {/* ------------------- รายงานบันทึกใบเบิกครุภัณฑ์ ------------------- */}
                <Stack
                  bgcolor="#FFFFFF"
                  sx={{ borderRadius: 2 }}
                  direction="column"
                  justifyContent={"flex-start"}
                >
                  <Stack
                    padding={2}
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h6" sx={{ color: "#319400" }}>
                      รายงานบันทึกใบเบิกครุภัณฑ์
                    </Typography>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                    >
                      เพิ่มใบเบิกครุภัณฑ์
                    </Button>
                  </Stack>
                  <Divider />
                  <Stack padding={2} spacing={1}>
                    <Typography variant="body2" sx={{ color: "#319400" }}>
                      รวม 4 รายการ
                    </Typography>
                    {/* <Stack id="list-box"> */}
                    {/* ------------------- Table ------------------- */}

                    <TableContainer component={Paper}>
                      <Table aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center">
                              ลำดับ
                            </StyledTableCell>
                            {headerRow.map((item, index) => {
                              return (
                                <StyledTableCell align="center" key={index}>
                                  {item}
                                </StyledTableCell>
                              );
                            })}
                            <StyledTableCell align="center">ลบ</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataRows.map((row, index) => (
                            <StyledTableRow hover={true} key={index}>
                              <StyledTableCell
                                flex={0.05}
                                size="small"
                                padding="none"
                                align="center"
                              >
                                {index + 1}
                              </StyledTableCell>
                              {row.map((item, index) => {
                                return (
                                  <StyledTableCell
                                    flex={0.05}
                                    size="small"
                                    padding="none"
                                    align="center"
                                    key={index}
                                  >
                                    <StyledTypographyCell>
                                      {item}
                                    </StyledTypographyCell>
                                  </StyledTableCell>
                                );
                              })}
                              <StyledTableCell
                                flex={0.05}
                                size="small"
                                padding="none"
                                align="center"
                              >
                                <IconButton aria-label="delete" size="small">
                                  <DeleteIcon />
                                </IconButton>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Stack>
              </Stack>
              {/* </Stack> */}
            </Box>
          </Stack>
          {/* </Box> */}

          {/* ------------------- Daily Approval ------------------- */}
          <Box>
            <Stack
              direction={"row"}
              justifyContent="flex-start"
              backgroundColor="#FFFFFF"
              padding={2}
              borderRadius={2}
              spacing={5}
            >
              <Stack>
                <Typography
                  variant="body1"
                  marginBottom={1}
                  sx={{ color: "#319400" }}
                >
                  ผู้บันทึก
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  xxxxx xxxxxxxxxxxxx
                </Typography>
                <Typography sx={{ color: "gray" }}>01/01/2023 12.00</Typography>
              </Stack>
              <Stack variant="body1" marginBottom={1} sx={{ color: "#319400" }}>
                <Typography
                  variant="body1"
                  marginBottom={1}
                  sx={{ color: "#319400" }}
                >
                  ผู้แก้ไข
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  xxxxx xxxxxxxxxxxxx
                </Typography>
                <Typography sx={{ color: "gray" }}>01/01/2023 12.00</Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  marginBottom={1}
                  sx={{ color: "#319400" }}
                >
                  ผู้ส่งเรื่อง
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  xxxxx xxxxxxxxxxxxx
                </Typography>
                <Typography sx={{ color: "gray" }}>01/01/2023 12.00</Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  marginBottom={1}
                  sx={{ color: "#319400" }}
                >
                  ผู้อนุมัติ
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  xxxxx xxxxxxxxxxxxx
                </Typography>
                <Typography sx={{ color: "gray" }}>01/01/2023 12.00</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}

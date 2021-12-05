import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: `calc(39% + 0.8vmin)`,
    backgroundColor: "#efebe9",
    padding: 25,
    marginLeft: 450,
    marginTop: 20,
  },
  tablerow: {
    width: `calc(100% + 0.8vmin)`,
    fontFamily: "sarabun",

  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("กระดาษคำตอบแบบ 120 ข้อ"),
//   createData("กระดาษคำตอบแบบ 100 ข้อ"),
//   createData("กระดาษคำตอบแบบ 60 ข้อ"),
// ];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <h1 align="center">รายการดาวน์โหลด</h1>
      <Table
        className={classes.tablerow}
        aria-label="simple table"
        align="center"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              {" "}
              <h3 className={classes.tablerow} align="center">
                <b>รูปแบบกระดาษคำตอบ</b>
              </h3>{" "}
            </TableCell>
            <TableCell align="right">
              <h3 className={classes.tablerow} align="center">
                <b>โครงสร้างไฟล์เอกสาร</b>
              </h3>{" "}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* {rows.map((row) => ( */}
          <TableRow >
            <TableCell component="th" scope="row" align="center">
              {/* {row.name} */}
              <a href=""> กระดาษคำตอบแบบ 120 ข้อ </a>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              <a href=""> โครงสร้างไฟล์ข้อมูลผู้เข้าสอบ (.csv)</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              {/* {row.calories} */}
              <a href=""> กระดาษคำตอบแบบ 100 ข้อ </a>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              <a href="">โครงสร้างไฟล์เฉลยข้อสอบ (.csv) </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              {/* {row.calories} */}
              <a href="">กระดาษคำตอบแบบ 60 ข้อ </a>
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

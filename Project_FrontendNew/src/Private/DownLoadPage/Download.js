import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { BASE_URL } from '../../service';
import Cookies, { set } from 'js-cookie';

const columns = [
  { id: 'Subject', label: 'ชื่อรายวิชา', minWidth: 170 },
  { id: 'Group', label: 'กลุ่มวิชา', minWidth: 100 },
  { id: 'Action', label: 'ดาวน์โหลด', minWidth: 100 },
];

// const rows = [];

function createData(Subject, Group, Action) {
  return { Subject, Group, Action };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    margin: 'auto',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#b2dfdb',
    color: theme.palette.common.black,
    fontSize: 18,
    textAlign: 'center',
  },
  body: {
    textIndent: '5ch',
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



export default function Download() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  let tokenCookies = Cookies.get("token");

  const headers = {
    Authorization: `Bearer ${tokenCookies}`,
  };

  const GetAllSubject = async () => {
    await axios
      .get(BASE_URL + '/download/subject', { headers })
      .then(res => {
        let info = res.data;

        info.map(d => console.log(d));

        setRows(info.map(d => {
          return { Subject: d.sub_name, Group: d.sub_group, Action: "0000" };
        }));

      });


}

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};


useEffect(() => {
  GetAllSubject();
}, [])

return (
  <Paper className={classes.root}>
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
);
}

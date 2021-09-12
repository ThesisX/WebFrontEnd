import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import { BASE_URL } from '../../service';
import Cookies, { set } from 'js-cookie';
import { ContactsOutlined } from '@material-ui/icons';

const columns = [
  { id: 'Subject', label: 'ชื่อรายวิชา', minWidth: 170 },
  { id: 'Group', label: 'กลุ่มวิชา', minWidth: 50 },
  { id: 'CSV', label: 'ดาวน์โหลด(คะแนนผู้สอบ)', minWidth: 50 },
  { id: 'Exams', label: 'ดาวน์โหลด(กระดาษคำตอบ)', minWidth: 50 },
];

// const rows = [];

function createData(Subject, Group, CSV, Exams) {
  return { Subject, Group, CSV, Exams };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    margin: 'auto',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#d2f4ff',
    fontFamily: "sarabun",

  },
  
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#dcedc8',
    color: theme.palette.common.black,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "sarabun",

  },
  body: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: "sarabun",

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
  const FileDownload = require('js-file-download');

  const headers = {
    Authorization: `Bearer ${tokenCookies}`,
  }

  const GetFile = async (API_PATH, FileName) => {
    await axios
    .get(BASE_URL+API_PATH, { headers, responseType: 'blob' })
    .then(res => {
      let info = res.data;
      console.log("files : ", info);
      FileDownload(info, FileName);
    });
  };

  const GetAllSubject = async () => {
    await axios
      .get(BASE_URL + '/download/subject', { headers })
      .then(res => {
        let info = res.data;
        console.log("info : ", info.length);
        // info.map(d => console.log(d));

        setRows(info.map(d => {
          return {
            Subject: d.sub_name,
            Group: d.sub_group,
            CSV: DowloadnCSVButton(d.sub_id),
            Exams: DowloadnExamsButton(d.sub_id)
          };
        }));

      });


  };

  const DowloadnCSVButton = (sub_id) => {
    
    const API_PATH = `/download/subject/csv/${sub_id}` ;
    const FileName = `DataStudent-Subject-${sub_id}.csv`;
    return (
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GetAppRoundedIcon />}
        onClick={()=>GetFile(API_PATH, FileName)}
      >
        ดาวน์โหลด
      </Button>
    )
  };

  const DowloadnExamsButton = (sub_id) => {
    
    const API_PATH = `/download/subject/exams/${sub_id}` ;
    const FileName = `Exams-Subject-${sub_id}.zip`;

    return (
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<GetAppRoundedIcon />}
        onClick={()=>GetFile(API_PATH, FileName)}
      >
        ดาวน์โหลด
      </Button>
    )
  };


  useEffect(() => {
    GetAllSubject();
    console.log("rows : ", rows.length);
  }, [])

  const list = (
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
            {rows.map((row) => {
              return (
                <StyledTableRow hover key={row.code}>
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
    </Paper>
  );

  const notlist = (
    <div align="center">
      <h2>ไม่พบรายวิชา</h2>
      <p>คุณต้องสร้างรายวิชาที่เมนู <a href="/system">ระบบตรวจข้อสอบ</a></p>      
    </div>
  );

  return rows.length > 0 ? list : notlist;
}

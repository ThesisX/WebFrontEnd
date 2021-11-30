import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";
import img1 from "../Manual/CSV/1.png";
import img2 from "../Manual/CSV/2.png";
import img3 from "../Manual/CSV/3.png";
import img4 from "../Manual/CSV/4.png";
import img5 from "../Manual/CSV/5.png";
import img6 from "../Manual/CSV/6.png";
import img7 from "../Manual/CSV/7.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#494949",

  },
  title: {
    fontFamily: "sarabun",

    marginLeft: theme.spacing(2),
    flex: 1,
  },
  gridimg: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
  },
  imgone: {
    width: `calc(70% + 0.8vmin)`,
    margin: 10,
  },
  csv: {
    width: `calc(100% + 0.8vmin)`,
    fontSize: `calc(100% + 0.8vmin)`,
    fontFamily: "sarabun",

    height: 70,
    display: "flex",
    justifyContent: "space-around",
  },
  Dialog: {
    backgroundColor: "#252525",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.csv}
        variant="contained"
        color="black"
        onClick={handleClickOpen}
      >
        วิธีการทำไฟล์ .CSV ไฟล์ข้อมูลผู้เข้าสอบ
      </Button>

      <Dialog
        className={classes.Dialog}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}  >
          <Toolbar  >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Typography variant="h5" className={classes.title}>
              วิธีการทำไฟล์ .CSV ไฟล์ข้อมูลผู้เข้าสอบ
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <h2> ปิด</h2>
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem button>
            {/* <ListItemText primary="Phone ringtone" secondary="Titania" /> */}
            <Grid
              container
              item
              xs={12}
              spacing={3}
              className={classes.gridimg}
            >
              <img className={classes.imgone} src={img1} />
              {/* <FormRow /> */}
            </Grid>
          </ListItem>
          <ListItem button>
            {/* <ListItemText primary="Phone ringtone" secondary="Titania" /> */}
            <Grid
              container
              item
              xs={12}
              spacing={3}
              className={classes.gridimg}
            >
              <img className={classes.imgone} src={img2} />
              {/* <FormRow /> */}
            </Grid>
          </ListItem>
          <ListItem button>
            {/* <ListItemText primary="Phone ringtone" secondary="Titania" /> */}
            <Grid
              container
              item
              xs={12}
              spacing={3}
              className={classes.gridimg}
            >
              <img className={classes.imgone} src={img3} />
              {/* <FormRow /> */}
            </Grid>
          </ListItem>
          <ListItem button>
            {/* <ListItemText primary="Phone ringtone" secondary="Titania" /> */}
            <Grid
              container
              item
              xs={12}
              spacing={3}
              className={classes.gridimg}
            >
              <img className={classes.imgone} src={img4} />
              {/* <FormRow /> */}
            </Grid>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

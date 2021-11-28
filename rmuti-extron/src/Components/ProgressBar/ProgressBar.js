import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 20,
      borderRadius: 10
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
      borderRadius: 10,
      backgroundImage:
    'linear-gradient( 136deg, rgb(144, 202, 249) 0%, rgb(47, 154, 247) 50%, rgb(103, 58, 183) 100%)',
    }
  }))(LinearProgress);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        {/* <LinearProgress variant="determinate" {...props} /> */}
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body1" color="primary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '60%',
  },
});

export default function ProgressBar({ percent }) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + percent));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}

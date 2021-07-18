import React, { useState } from 'react';
import Answer from './Answer';
import Exams from './Exams';
import Result from './Result';
import Subjects from './Subjects';
import Datastudents from './Datastudents';
import Cookies from 'js-cookie';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: 50,
        // width: '100%',
        flexGrow: 1,
    },
    paper: {
        padding: 50,
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    SubjectInput: {
        width: '20%',
        float: 'left',
    },
    step: {
        marginRight: 0,
    }
}));

const getSteps = () => {
    return ['อัปโหลดข้อมูลผู้เข้าสอบ', 'อัปโหลดเฉลยข้อสอบ', 'อัปโหลดกระดาษคำตอบ', 'ตรวจข้อสอบ'];
}

const System = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [stepStatus, setStepStatus] = useState(false);
    const [activate, setActivate] = useState(true)
    const [ansfile, setAnsfile] = useState([])
    const [examfile, setExamfile] = useState([])

    const classes = useStyles();
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Datastudents stepData={(s) => setStepStatus(s)} />;
            case 1:
                return <Answer stepAns={(s) => setStepStatus(s)} />;
            case 2:
                return <Exams stepExam={(s) => setStepStatus(s)} />;
            case 3:
                return <Result />;
            default:
                return '';
        }
    }

    const getActivate = (status) => {
        // console.log('status ', status);
        setActivate(status)
    }

    // console.log("activate : ", activate);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/* Subject name and Subject group. */}
                        <Grid item xs={12}>
                            <Subjects getActivate={getActivate} />
                            {/* <Divider light/> */}
                        </Grid>

                        {/* Systems */}
                        {activate ? (
                            <div>
                                <Grid item xs={12}>
                                    <Stepper activeStep={activeStep} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Grid>
                                {activeStep === steps.length ? (
                                    <Grid item xs={12}>
                                        <Typography className={classes.instructions}>All steps completed</Typography>
                                        <Button onClick={() => setActiveStep(0)}>Reset</Button>
                                    </Grid>
                                ) : (
                                    <Grid item xs={12}>
                                        <Grid item xs={12}>
                                            <Typography className={classes.instructions}>
                                                {getStepContent(activeStep)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} className={classes.step}>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}
                                            >
                                                ย้อนกลับ
                                            </Button>
                                            <Button
                                                disabled={stepStatus === false}
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            >
                                                {activeStep === steps.length - 1 ? 'ดาวน์โหลด' : 'ถัดไป'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                )}
                            </div>
                        ) : (<div></div>)}
                    </Paper >
                </Grid>
            </Grid>
        </div>
    )
}

export default System

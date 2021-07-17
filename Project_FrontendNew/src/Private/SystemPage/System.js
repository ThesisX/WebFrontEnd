import React, { useState } from 'react';
import Answer from './Answer';
import Exams from './Exams';
import Result from './Result';
import Subjects from './Subjects';
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

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 50,
    },
    root: {
        width: '100%',
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
}));

const getSteps = () => {
    return ['อัปโหลดเฉลยข้อสอบ', 'อัปโหลดกระดาษคำตอบ', 'ตรวจข้อสอบ'];
}

const System = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [stepStatus, setStepStatus] = useState(false);
    const [activate, setActivate] = useState(false)
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

    const handleReset = () => {
        setActiveStep(0);
    };

    const stepAns = (status) => {
        setStepStatus(status);
    };

    const stepExam = (status) => {
        setStepStatus(status);
    };

    const StorageAns = ([files]) => {
        setAnsfile([files]);
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Answer stepAns={stepAns} StorageAns={StorageAns} ansfile={ansfile}/>;
            case 1:
                return <Exams stepExam={stepExam} />;
            case 2:
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
        <Paper className={classes.container}>
            <div className={classes.root}>
                <Subjects getActivate={getActivate} />
                {activate ? (
                    <div>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
            
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                            </Typography>
                            <div>
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
                            </div>
                        </div>
                    )}
                </div>
                ) : (<div></div>)}
            </div>
        </Paper >
    )
}

export default System

import React, { useState } from 'react';
import Answer from './Answer';
import Exams from './Exams';
import Result from './Result';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import Cookies from 'js-cookie';


const useStyles = makeStyles((theme) => ({
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
    subject_root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginBottom: 10,
    },
    subject_input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const getSteps = () => {
    return ['อัปโหลดเฉลยข้อสอบ', 'อัปโหลดกระดาษคำตอบ', 'ตรวจข้อสอบ'];
}

const System = () => {
    const uid = Cookies.get("uid");
    const n = new Date();
    const sname = `A-${uid}-${n.getTime()}`
    const [activeStep, setActiveStep] = useState(0);
    const [stepStatus, setStepStatus] = useState(false)
    const [subject_name, setSubject_name] = useState(sname)
    

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

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Answer stepAns={stepAns} />;
            case 1:
                return <Exams stepExam={stepExam} />;
            case 2:
                return <Result />;
            default:
                return '';
        }
    }

    // console.log("stepStatus : ", stepStatus);

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.subject_root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <NoteAddIcon htmlColor="#01579b"/>
                </IconButton>
                ชื่อวิชา : 
                <InputBase
                    className={classes.subject_input}
                    placeholder='ชื่อวิชา'
                    inputProps={{ 'aria-label': 'ชื่อวิชา' }}
                    value={subject_name}
                />

                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <CheckBoxIcon htmlColor="#00c853" />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />

                <IconButton className={classes.iconButton} aria-label="directions" >
                    <CancelIcon htmlColor="#d50000" />
                </IconButton>
            </Paper>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
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
        </div>
    )
}

export default System

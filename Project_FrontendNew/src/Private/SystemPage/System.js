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
    SubjectInput: {
        width: '20%',
        float: 'left',
    },
}));

const getSteps = () => {
    return ['สร้างรายวิชา', 'อัปโหลดเฉลยข้อสอบ', 'อัปโหลดกระดาษคำตอบ', 'ตรวจข้อสอบ'];
}

const System = () => {
    let uid = Cookies.get('uid');
    let n = new Date();
    let t = n.getTime();
    let sname = `A-${uid}-${t}`;
    const [activeStep, setActiveStep] = useState(0);
    const [stepStatus, setStepStatus] = useState(false);
    const [SubjectName, setSubjectName] = useState(sname)
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

    const handlegetSubjectname = sname => {
        setSubjectName(sname)

        return SubjectName
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <TextField
                    className={classes.SubjectInput}
                    id="filled-read-only-input"
                    label="ชื่อรายวิชา"
                    defaultValue={SubjectName}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                />
                <Subjects getSubjectName={handlegetSubjectname} />
            </div>
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

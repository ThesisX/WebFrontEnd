import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Exams from './Exams';
import Result from './Result';
import Subjects from './Subjects';
import Datastudents from './Datastudents';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { BASE_URL } from '../../service';
import Cookies from 'js-cookie';
import axios, { post } from 'axios';
import qs from 'qs';

const useStyles = makeStyles((theme) => ({
    root: {
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
    const [activate, setActivate] = useState(true);
    const [ansfile, setAnsfile] = useState([]);
    const [examfile, setExamfile] = useState([]);
    const [datafile, setDatafile] = useState([]);
    const [subID, setSubID] = useState(0);

    const classes = useStyles();
    const steps = getSteps();
    const tokenCookies = Cookies.get("token");
    /* Set Step */
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Datastudents stepData={(s) => setStepStatus(s)}
                    toStorage={(f) => setDatafile(f)}
                    dataList={datafile} />;
            case 1:
                return <Answer stepAns={(s) => setStepStatus(s)}
                    toStorage={(f) => setAnsfile(f)}
                    ansList={ansfile} />;
            case 2:
                return <Exams stepExam={(s) => setStepStatus(s)}
                    toStorage={(f) => setExamfile(f)}
                    examList={examfile} />;
            case 3:
                return <Result />;
            default:
                return '';
        }
    }

    /* Post */
    const handleSubmit = async () => {
        const url_datafile = `${BASE_URL}/datastudent/upload-data/${subID}`;
        const url_answerfile = `${BASE_URL}/answer/upload-answer/${subID}`;
        const url_examsfile = `${BASE_URL}/exams/upload-exams/${subID}`;

        const FormDataFile = new FormData();
        const FormAnswerFile = new FormData();
        const FormExamsFile = new FormData();

        await FormDataFile.append('data_file', datafile[0]);
        await FormAnswerFile.append('ans_file', ansfile[0]);
        
        // for(let i=0; i >= examfile.length ; i++){
        //     FormExamsFile.append('exms_file', examfile[i]);
        // };
        await examfile.forEach(f => {
            FormExamsFile.append('exm_files', f);
        });

        const config = {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${tokenCookies}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        await post(url_datafile, FormDataFile, config)
            .then(res => {
                console.log("data_file : ", res.data);
            });

        await post(url_answerfile, FormAnswerFile, config)
            .then(res => {
                console.log("ans_file : ", res.data);
            });

        await post(url_examsfile, FormExamsFile, config)
            .then(res => {
                console.log("exms_file : ", res.data);
            });
    };

    // useEffect(() => {
    //     console.log("datafile :", datafile);
    // }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/* Subject name and Subject group. */}
                        <Grid item xs={12}>
                            <Subjects getActivate={(s) => setActivate(s)} sid={(id) => setSubID(id)} />
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
                                            {activeStep !== 2 ?
                                                <Button
                                                    disabled={stepStatus === false}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                >
                                                    ถัดไป
                                                </Button>
                                                : <Button
                                                    disabled={stepStatus === false}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleSubmit}
                                                >
                                                    ตรวจข้อสอบ
                                                </Button>
                                            }
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

export default System;

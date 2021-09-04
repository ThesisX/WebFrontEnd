import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Exams from './Exams';
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
import { BASE_URL, ROOT_URL } from '../../service';
import Cookies from 'js-cookie';
import { post, get } from 'axios';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import  {BrowserRouter as Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 50,
    },
    HandleBackButton: {
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
    },
    CenterObj: {
        marginTop: 50,
        alignItems: 'center',
        textAlign: 'center'
    },
    HandleButton: {
        float: 'right',
    },
    AddIcon: {
        fontSize: 80,
        color: '#eceff1',
    },
    TxtProcessing: {
        color: '#eceff1',
    },
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
    const [TxtProcessing, setTxtProcessing] = useState("กรุณาสร้างรายวิชา");
    const [Loadding, setLoadding] = useState(false);
    const [process, setProcess] = useState(false);

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
            default:
                return '';
        }
    }

    const CalculateTime = (AnsName, ExmCount) => {
        // console.log(AnsName);
        let anstime = 25;
        let exmtime = 25;
        let slow_time = 0;
        let fast_time = 0;

        if (AnsName.slice(-4) == '.csv') {
            fast_time = ExmCount * exmtime;
        } else {
            fast_time = (ExmCount * exmtime) + anstime;
        }


        slow_time = fast_time + 20;

        return `${fast_time}-${slow_time} วินาที`;
    };

    /* Post */
    const handleSubmit = async () => {
        setLoadding(true);
        setTxtProcessing("กำลังอัปโหลดข้อมูล");

        const url_datafile = `${BASE_URL}/datastudent/upload-data/${subID}`;
        const url_answerfile = `${BASE_URL}/answer/upload-answer/${subID}`;
        const url_examsfile = `${BASE_URL}/exams/upload-exams/${subID}`;

        const FormDataFile = new FormData();
        const FormAnswerFile = new FormData();
        const FormExamsFile = new FormData();

        await FormDataFile.append('data_file', datafile[0]);
        await FormAnswerFile.append('ans_file', ansfile[0]);

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

        await setTxtProcessing("อัปโหลดข้อมูล สำเร็จ!!");
        const ntime = await CalculateTime(ansfile[0].name, examfile.length)
        await setTxtProcessing(`กำลังตรวจข้อสอบใช้เวลา ${ntime} โดยประมาณ`);

        const headers = {
            Authorization: `Bearer ${tokenCookies}`,
        };

        const URL_PredictAns = `${BASE_URL}/predictor/predict-ans?current_subject=${subID}`;
        const URL_PredictExms = `${BASE_URL}/predictor/predict-exm?current_subject=${subID}`;

        await get(URL_PredictAns, { headers })
            .then(res => {
                console.log("Predict Ans return : ", res.data);
            });

        await get(URL_PredictExms, { headers })
            .then(res => {
                console.log("Predict Exams return : ", res.data);
            });
        await setTxtProcessing("การตรวจข้อสอบ สำเร็จ!!");

        setProcess(true);
        window.history.back();
    };

    const SystemsComponent = (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {!Loadding ? (
                        <Paper className={classes.paper}>
                            {/* Subject name and Subject group. */}
                            <Grid item xs={12}>
                                <Subjects getActivate={(s) => setActivate(s)} sid={(id) => setSubID(id)} />
                                {/* <Divider light/> */}
                            </Grid>
                            {/* Systems */}
                            {!activate ? (
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
                                                    className={classes.HandleBackButton}
                                                    startIcon={<ArrowBackIosIcon />}
                                                >
                                                    ย้อนกลับ
                                                </Button>
                                                {activeStep !== 2 ?
                                                    <Button
                                                        className={classes.HandleButton}
                                                        disabled={stepStatus === false}
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleNext}
                                                        startIcon={<QueuePlayNextIcon />}
                                                    >
                                                        ถัดไป
                                                    </Button>
                                                    : <Button
                                                        className={classes.HandleButton}
                                                        disabled={stepStatus === false}
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleSubmit}
                                                        startIcon={<CheckCircleIcon />}
                                                    >
                                                        ตรวจข้อสอบ
                                                    </Button>
                                                }
                                            </Grid>
                                        </Grid>
                                    )}
                                </div>
                            ) : (
                                <div className={classes.CenterObj}>
                                    <AddCircleOutlineIcon className={classes.AddIcon} />
                                    <h2 className={classes.TxtProcessing}>{TxtProcessing}</h2>
                                </div>)}
                        </Paper >
                    ) : (
                        <div className={classes.CenterObj}>
                            <CircularProgress />
                            <h3>{TxtProcessing}</h3>
                        </div>
                    )}
                </Grid>
            </Grid>
        </div>
    );

    return SystemsComponent;

}

export default System;

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
import { BASE_URL, F_PORT, ROOT_URL } from '../../service';
import Cookies from 'js-cookie';
import { post, get } from 'axios';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import StepConnector from '@material-ui/core/StepConnector';
import Conclusion from './Conclusion';

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
        '&:disabled': {
            background: 'linear-gradient( 95deg,rgb(242, 242, 242) 0%,rgb(224, 224, 224) 50%,rgb(201, 201, 201) 100%)',
        },
        float: 'right',
        background: 'linear-gradient( 95deg,rgb(144, 202, 249) 0%,rgb(47, 154, 247) 50%,rgb(103, 58, 183) 100%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(103, 58, 183, .3)',
        color: 'white',
    },
    AddIcon: {
        fontSize: 80,
        color: '#eceff1',
    },
    TxtProcessing: {
        color: '#eceff1',
    },
}));

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(144, 202, 249) 0%,rgb(47, 154, 247) 50%,rgb(103, 58, 183) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(144, 202, 249) 0%,rgb(47, 154, 247) 50%,rgb(103, 58, 183) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(144, 202, 249) 0%, rgb(47, 154, 247) 50%, rgb(103, 58, 183) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(144, 202, 249) 0%, rgb(47, 154, 247) 50%, rgb(103, 58, 183) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <AssignmentInd />,
        2: <PlaylistAddCheckIcon />,
        3: <LibraryAddIcon />,
        4: <FindInPageIcon />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

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
    const [timePogress, setTimeProgress] = useState(0);
    const [successTure, setSuccessTure] = useState(true);
    const [examLenght, setExamLenght] = useState(0);
    const [examFails, setExamFails] = useState(0);
    const [progress, setProgress] = useState(false);
    const [txtConclusion, setTxtConclusion] = useState({
        time: '',
        total: 0,
        success: 0,
        fails: 0,

    });

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

    const FormatTime = time => {

        let hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;

        return ret
    }

    const CalculateTime = (AnsName, ExmCount, AnsUseTime) => {
        let endTime = 0;

        if (AnsUseTime < 10)
            endTime = ExmCount * 30
        else
            endTime = ExmCount * AnsUseTime


        // console.log(`"endTime" : ${endTime}`);
        let FastTime = FormatTime(endTime)
        let SlowTime = FormatTime(endTime + 60)
        console.log("endTime:", (100 / (endTime + 60)));
        setTimeProgress((100 / (endTime + 60)));
        return `${FastTime}-${SlowTime} นาที`;
    };

    /* Post Data */
    const PostData = async (thisfile, url, file) => {
        const config = {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${tokenCookies}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        const form = new FormData();
        file.forEach(f => {
            form.append(thisfile, f);
        });

        await post(url, form, config)
            .then(res => {
                console.log(thisfile, res.data);

            }).catch(err => {
                console.log(err.response.data.detail);
                window.alert(`มีปัญหาการอัปโหลด ${thisfile} กรุณาลองใหม่อีกครั้ง`);
                window.location.reload();

            });
    };

    /* Predictions */
    const PredictData = async () => {
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
    };

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

        await setExamLenght(examfile.length);

        const config = {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${tokenCookies}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        await post(url_datafile, FormDataFile, config)
            .then(res => {
                // console.log("data_file : ", res.data);
            })
            .catch(err => {
                alert('การอัปโหลดผิดพลาด โปรดลองใหม่อีกครั้ง');
                window.location.reload();
            });

        await post(url_answerfile, FormAnswerFile, config)
            .then(res => {
                // console.log("ans_file : ", res.data);
            })
            .catch(err => {
                alert('การอัปโหลดผิดพลาด โปรดลองใหม่อีกครั้ง');
                window.location.reload();
            });

        await post(url_examsfile, FormExamsFile, config)
            .then(res => {
                // console.log("exms_file : ", res.data);
            })
            .catch(err => {
                alert('การอัปโหลดผิดพลาด โปรดลองใหม่อีกครั้ง');
                window.location.reload();
            });

        await setTxtProcessing("อัปโหลดข้อมูล สำเร็จ!!");
        await setTxtProcessing("กำลังเตรียมการตรวจข้อสอบ รอสักครู่...");

        const headers = {
            Authorization: `Bearer ${tokenCookies}`,
        };

        const URL_PredictAns = `${BASE_URL}/predictor/predict-ans?current_subject=${subID}`;
        const URL_PredictExms = `${BASE_URL}/predictor/predict-exm?current_subject=${subID}`;
        let t0 = performance.now();
        let AnsPredTime = 0
        await get(URL_PredictAns, { headers })
            .then(res => {
                // console.log("Predict Ans return : ", res.data);
                AnsPredTime = res.data;
            })
            .catch(err => {
                alert('การบันทึกเฉลยผิดพลาด โปรดลองใหม่อีกครั้ง');
                window.location.reload();
            });

        const ntime = await CalculateTime(ansfile[0].name, examfile.length, AnsPredTime)
        await setTxtProcessing(`กำลังตรวจข้อสอบใช้เวลา ${ntime} โดยประมาณ`);

        let exam_fails = 0;
        await get(URL_PredictExms, { headers })
            .then(res => {
                // console.log("Predict Exams return : ", res.data);
                // setExamFails(res.data);
                exam_fails = res.data;

            })
            .catch(err => {
                alert('การตรวจข้อสอบผิดพลาด โปรดลองใหม่อีกครั้ง');
                window.location.reload();
            });

        let t1 = performance.now();
        let pred_time = await FormatTime((t1 - t0) / 1000);
        let exam_success = examfile.length - examFails;
        await setTimeProgress(100);
        await setSuccessTure(false);
        await setTxtProcessing("ดีใจด้วยการตรวจข้อสอบ สำเร็จแล้ว!!");
        await setTxtConclusion({
            time: pred_time,
            total: examfile.length,
            success: exam_success,
            fails: exam_fails
        });

        await setProgress(true);
    };

    const SystemsComponent = (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {progress ? (<><Conclusion isProgress={progress} text={txtConclusion}/></>) : (<></>)}
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
                                        <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
                                            {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel StepIconComponent={ColorlibStepIcon}><b>{label}</b></StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Grid>
                                    {activeStep === steps.length ? (
                                        <Grid item xs={12}>
                                            <Typography className={classes.instructions}>สำเร็จทุกขั้นตอน</Typography>
                                            <Button onClick={() => window.location.reload()}>เริ่มใหม่อีกครั้ง</Button>
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
                            {/* <CircularProgress /> */}
                            {successTure ? (
                                <ProgressBar percent={timePogress} />
                            ) : (<></>)}
                            {/* <h3>percent {percent}</h3> */}
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

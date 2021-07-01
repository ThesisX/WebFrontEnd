import React ,{useState} from 'react';
import { Steps, Button, message, Row, Col } from 'antd';
import UploadAnswer from './UploadAnswer';
import UploadExams from './UploadExams';
import UploadFinish from './UploadFinish';

const { Step } = Steps;

function Upload() {
    const [current, setCurrent] = useState(0);
    const [StatusSteps, setStatusSteps] = useState("wait");
    
    const callbackFunction = (status) => {
        setStatusSteps(status);
        //console.log(StatusSteps);
    }

    const steps = [
        {
            title: 'อัปโหลดเฉลยข้อสอบ',
            content: <UploadAnswer statusStepParent={callbackFunction} />,
        },
        {
            title: 'อัปโหลดกระดาษคำตอบ',
            content: <UploadExams statusStepParent={callbackFunction}/>,
        },
        {
            title: 'ผลการตรวจ',
            content: <UploadFinish />,
        },
    ];

    const next = () => {
        setCurrent(current + 1);
        setStatusSteps("wait");
    };

    const prev = () => {
        setCurrent(current - 1)
        setStatusSteps("wait");
    };

    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                <Row justify="end">
                    <Col>
                        {current > 0 && (
                            <Button onClick={() => prev()}>
                                ย้อนกลับ
                            </Button>
                        )}
                        {current < steps.length - 1 && StatusSteps === 'done' &&(
                            <Button type="primary" onClick={() => next()} >
                                ขั้นตอนต่อไป
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('การตรวจข้อสอบสำเร็จ!')} >
                                ยืนยัน
                            </Button>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Upload
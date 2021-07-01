import React from 'react'

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


/**ค่อยเปลี่ยนไปใช้ axios */

export function UploadExams(props) {
    const { Dragger } = Upload;

    const handleChange = info => {

        const { status } = info.file;
        const len = info.fileList.length;

        if (status !== 'uploading') {
            //console.log(info.file, info.fileList);
            //console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            props.statusStepParent('done');

        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);

        }

        if (len <= 1)
            props.statusStepParent('wait');

        //console.log(len);

    };

    return (
        <Dragger className="dragger-box" accept=".jpg ,.png ,.csv" onChange={handleChange} >
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">คลิก หรือลากไฟล์ เพื่ออัปโหลด</p>
            <p className="ant-upload-hint">
                รองรับอัปโหลดครั้งละหลายไฟล์ และรองรับรูปกระดาษคำตอบ .png และ .jpg เท่านั้น
                </p>
        </Dragger>
    )

}

export default UploadExams
import React, { useState } from 'react'
import axios from 'axios';

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


/**เพิ่ม axios */
function UploadAnswer(props) {
    const API_BASE = 'http://localhost:8000/api/cv/';

    const { Dragger } = Upload;
    const [fileList, setfileList] = useState([]);

    const CustomUpload = {
        action: API_BASE,
        multiple: false,
        data: {},
        headers: {
            'content-type': 'multipart/form-data'
        },
        onStart(file) {
            console.log('onStart', file, file.name);
        },
        onSuccess(ret, file) {
            console.log('onSuccess', ret, file.name);
            message.success(file.name, ' อัปโหลดสำเร็จ!!');
            props.statusStepParent('done');
        },
        onError(err) {
            console.log('onError', err);
            message.error(err, ' อัปโหลดไม่สำเร็จ!!');
            props.statusStepParent('error');
        },
        onProgress({ percent }, file) {
            console.log('onProgress', `${percent}%`, file.name);
        },
        onChange(info) {
            let fileList = [...info.fileList];

            fileList = fileList.slice(-1);
            fileList = fileList.map(file => {
                if (file.response) {
                    file.uid = file.name;
                }
                return file;
            });

            setfileList(fileList);
        },
        customRequest({
            action,
            data,
            file,
            filename,
            headers,
            onError,
            onProgress,
            onSuccess,
            withCredentials,
        }) {
            const formData = new FormData();
            formData.append('name', file.name);
            formData.append('exams', file, file.name);

            axios.post(action, formData, {
                headers,
                onUploadProgress: ({ total, loaded }) => {
                    onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
                },
            })
                .then(({ data: response }) => {
                    onSuccess(response, file);
                })
                .catch(onError);

            return {
                abort() {
                    console.log('การอัปโหลดถูกยกเลิก.');
                },
            };
        },
    };

    return (
        <Dragger {...CustomUpload} accept=".jpg ,.png ,.csv" fileList={fileList}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">คลิก หรือลากไฟล์ เพื่ออัปโหลด</p>
            <p className="ant-upload-hint">
                รองรับอัปโหลดเป็นไฟล์เอกสาร .csv หรือรูปกระดาษคำตอบ .png และ .jpg เท่านั้น
                </p>
        </Dragger>
    )

}

export default UploadAnswer


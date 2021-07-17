import React, { useState, useEffect } from 'react'

import { DropzoneArea } from 'material-ui-dropzone'

const Answer = ({stepAns, StorageAns, ansfile}) => {
    const [files, setFiles] = useState([])

    // console.log(typeof(ansfile))
    // console.log(files.length)

    const handelChange = (file) => {
        setFiles(file);
        StorageAns(files);        
    }

    if(files.length > 0){
        stepAns(true);
        console.log("files ans:", true);
    }else{
        stepAns(false)
        console.log("files ans:", false);
    }

    console.log(files);
    return (
        <div>
            <DropzoneArea
                dropzoneText={'คลิก หรือวางเฉลยข้อสอบที่นี่ รองรับเฉพาะ .csv .jpg .png'}
                onChange={handelChange}
                acceptedFiles={['image/jpeg', 'image/png', '.csv']}
                maxFileSize={5000000}
                alertSnackbarProps={{
                    autoHideDuration: 5000,
                }}
                fileObjects={ansfile}
                filesLimit={1}
            />
        </div>
    )
}

export default Answer

import React, { useState } from 'react'

import { DropzoneArea } from 'material-ui-dropzone'

const Exams = ({stepExam}) => {
    const [files, setFiles] = useState([])

    // console.log(files)
    // console.log(files.length)

    if(files.length > 0){
        stepExam(true)
        console.log("files exam:", true)
    }else{
        stepExam(false)
        console.log("files exam:", false)
    }

    return (
        <div>
            <DropzoneArea
                dropzoneText={'คลิก หรือวางกระดาษคำตอบที่นี่ รองรับเฉพาะ .jpg .png'}
                onChange={(file) => setFiles(file)}
                acceptedFiles={['image/jpeg', 'image/png']}
                maxFileSize={5000000}
                alertSnackbarProps={{
                    autoHideDuration: 5000,
                }}
                filesLimit={200}
            />
        </div>
    )
}

export default Exams

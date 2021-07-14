import React, { useState } from 'react'

import { DropzoneArea } from 'material-ui-dropzone'

const Answer = () => {
    const [files, setFiles] = useState()

    console.log(files)

    return (
        <div>
            <DropzoneArea
                dropzoneText={'คลิก หรือวางเฉลยข้อสอบที่นี่ รองรับเฉพาะ .csv .jpg .png'}
                onChange={(file) => setFiles(file)}
                acceptedFiles={['image/jpeg', 'image/png', '.csv']}
                maxFileSize={5000000}
                alertSnackbarProps={{
                    autoHideDuration: 5000,
                }}
                filesLimit={1}
            />
        </div>
    )
}

export default Answer

import React from 'react'
import { Pane, FileUploader, FileCard } from 'evergreen-ui'

export default function ImageUpload() {
    const [files, setFiles] = React.useState([])
    const [fileRejections, setFileRejections] = React.useState([])
    const handleChange = React.useCallback((files) => setFiles([files[0]]), [])
    const handleRejected = React.useCallback((fileRejections) => setFileRejections([fileRejections[0]]), [])
    const handleRemove = React.useCallback(() => {
        setFiles([])
        setFileRejections([])
    }, [])
    return (
        <Pane maxWidth={654}>
            <FileUploader
                label="Upload Image"
                description="You can upload 1 Image"
                maxSizeInBytes={50 * 1024 ** 2}
                maxFiles={1}
                onChange={handleChange}
                onRejected={handleRejected}
                renderFile={(file) => {
                    const { name, size, type } = file
                    const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file)
                    const { message } = fileRejection || {}
                    return (
                        <FileCard
                            key={name}
                            isInvalid={fileRejection != null}
                            name={name}
                            onRemove={handleRemove}
                            sizeInBytes={size}
                            type={type}
                            validationMessage={message}
                        />
                    )
                }}
                values={files}
            />
        </Pane>
    )
}

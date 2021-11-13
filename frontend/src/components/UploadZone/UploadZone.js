import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadZone.scss';

export const UploadZone = () => {
    const onDrop = useCallback(files => {
        if (files.length > 0) {
            setDroppedFile(files[0]);
        }
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const [ droppedFile, setDroppedFile ] = useState();

    return (
        <div className={ 'upload-zone' + (isDragActive ? ' active' : '') + (droppedFile ? ' has-file' : '')} {...getRootProps()}>
            <input {...getInputProps()} />
            { 
                droppedFile ? 
                    <p>Dropped file: {droppedFile.name}</p> : 
                    (isDragActive ? <p>Drop files here</p> : <p>Drag'n'drop files here</p>)
            }
        </div>
    );
};
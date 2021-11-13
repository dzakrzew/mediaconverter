import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadZone.scss';

export const UploadZone = () => {
    const onDrop = useCallback(files => {
        if (files.length > 0) {
            setDroppedFile(files[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const [ droppedFile, setDroppedFile ] = useState();

    return (
        <div className={ 'upload-zone' + (isDragActive ? ' active' : '') + (droppedFile ? ' has-file' : '')} {...getRootProps()}>
            <input {...getInputProps()} />

            <div className="content">
                { droppedFile ? 
                    <p>Dropped file: {droppedFile.name}</p> : 
                    <p className="placeholder">
                        { isDragActive ? 
                            <span>Drop files here</span> : 
                            <span>Drag'n'drop files here</span>
                        }
                    </p>
                }
            </div>
        </div>
    );
};
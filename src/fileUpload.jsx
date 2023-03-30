import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function UploadFile() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the accepted files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*, application/pdf',
    multiple: true,
    directory: true,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
}

export default UploadFile;
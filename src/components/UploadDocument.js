import React, { useState } from 'react';
import './user.css';
const UploadDocument = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Upload logic here
    console.log('Uploading:', file);
  };

  return (
    <div className="box">
        
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button 
  onClick={handleUpload} 
  className="button" // Add this class name
>
  Upload
</button>
    </div>
  );
};

export default UploadDocument;

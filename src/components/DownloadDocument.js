import React from 'react';
import './user.css';
const DownloadDocument = () => {
  const handleDownload = () => {
    // Download logic here
    console.log('Downloading document...');
  };

  return (
    <div className="box">
      <h2>Download Document</h2>
      <button 
  onClick={handleDownload} 
  className="button" // Add this class name
>
  Upload
</button>
    </div>
  );
};

export default DownloadDocument;

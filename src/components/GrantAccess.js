import React, { useState } from 'react';
import './user.css';
const GrantAccess = () => {
  const [email, setEmail] = useState('');

  const handleGrantAccess = () => {
    // Grant access logic here
    console.log('Granting access to:', email);
  };

  return (
    <div className="box">
      <h2>Grant Access</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email"
      />
      <button 
  onClick={handleGrantAccess} 
  className="button" // Add this class name
>
  Upload
</button>
    </div>
  );
};

export default GrantAccess;

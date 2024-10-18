import React, { useState } from 'react';
import './user.css';
const RevokeAccess = () => {
  const [email, setEmail] = useState('');

  const handleRevokeAccess = () => {
    // Revoke access logic here
    console.log('Revoking access from:', email);
  };

  return (
    <div className="box">
      <h2>Revoke Access</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email"
      />
      <button 
  onClick={handleRevokeAccess} 
  className="button" // Add this class name
>
  Upload
</button>
    </div>
  );
};

export default RevokeAccess;

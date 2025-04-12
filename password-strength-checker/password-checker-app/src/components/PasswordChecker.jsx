import React, { useState } from 'react';

const PasswordChecker = () => {
    const [password,setPassword]=useState('');
    function checkStrength(password) {
        const LengthCriteria = password.length >= 8;
        const uppercaseCriteria = /[A-Z]/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const numberCriteria = /\d/.test(password);

        if (LengthCriteria && uppercaseCriteria && lowercaseCriteria && specialCharCriteria && numberCriteria) {
            return 'Strong Password';
        } else if (LengthCriteria && (uppercaseCriteria || lowercaseCriteria) && (specialCharCriteria || numberCriteria)) {
            return 'Medium Password';
        } else if (LengthCriteria) {
            return 'Weak Password';
        }   
        return 'Very Weak Password';
    }

    return (
        <div>
            <h1>Password Checker</h1>
            <input type='password' placeholder='Enter your password' onChange={(e)=>{
                setPassword(e.target.value);
            }} value={password} />
            <h2>Password Strength</h2>
            <h4>{checkStrength(password)}</h4>

        </div>
    );
};

export default PasswordChecker;
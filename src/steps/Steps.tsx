import React, { useState, useEffect } from 'react';
import './Steps.css';

function Steps(props:{stepNumber: number}) { 
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setActiveStep(props.stepNumber)
  }, [props.stepNumber])

  return (
    <div className='stepContainer'>
      <div className="progress">
        <div className={`progress-bar ${activeStep === 2 ? 'w-50' : activeStep === 3 ? 'w-100' : ''}`}></div>
      </div>
      <ul>
        <li className='step1 active'>Personal Info</li>
        <li className={`step2 ${activeStep === 2 || activeStep === 3 ? 'active' : ''}`}>Provider Info</li>
        <li className={`step3 ${activeStep === 3 ? 'active' : ''}`}>Contact Info</li>
      </ul>
    </div>
  );
}

export default Steps;

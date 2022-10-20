import { AnyAaaaRecord } from 'dns';
import React, { useState, useEffect, RefCallback } from 'react';
import './Footer.css';

function Footer(props: {nextInactive:boolean, backInactive: boolean, onNext: any, onBack: any}) {
  const [backInactive, setBackInactive] = useState(false);
  const [nextInactive, setNextInactive] = useState(false);

  useEffect(() => {
    setBackInactive(props.backInactive)
  }, [props.backInactive]);

  useEffect(() => {
    setNextInactive(props.nextInactive)
  }, [props.nextInactive]);

  return (
    <div className='footerContainer'>
      <button className={`btn backButton ${backInactive ? 'disabled' : ''}`} onClick={() => props.onBack()}>Go Back</button>
      <button className={`btn nextButton ${nextInactive ? 'disabled' : ''}`} onClick={() => props.onNext()}>Save And Continue</button>
    </div>
  );
}

export default Footer;
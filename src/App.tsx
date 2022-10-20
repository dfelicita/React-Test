import React, { useState, useEffect } from 'react';
import './App.css';
import Steps from './steps/Steps';
import Footer from './footer/Footer';
import Multiselect from 'multiselect-react-dropdown';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [nextInactive, setNextInactive] = useState(true);
  const [backInactive, setBackInactive] = useState(true);

  useEffect(() => {
    switch(currentStep) {
      case 1: setBackInactive(true); setNextInactive(false); break;
      case 2: setBackInactive(false); setNextInactive(false); break;
      case 3: setBackInactive(false); setNextInactive(true); break;
    }
  }, [currentStep]);

  const options = ['English', 'Spanish', 'French', 'Chinese', 'German', 'Italian', 'Portuguese'];

  function nextForm() {
    setCurrentStep(currentStep+1);
  }

  function prevForm() {
    setCurrentStep(currentStep-1);
  }

  function checkInput(input: any) {
    if(input.target.value === ''){
      input.target.className = 'form-control form-control-lg is-invalid';
    } else {
      input.target.className = 'form-control form-control-lg is-valid';
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col leftSide"></div>
        <div className="col rightSide">
          <Steps stepNumber={currentStep}></Steps>
          <div className="tab-content mt-4" id="myTabContent">
            <div className={`tab-pane fade ${currentStep === 1 ? 'show active' : ''}`} id="personal">
              <h2 className='text-center'>Personal Information</h2>
              <p className='text-center'>Tell us about yourself.</p>
              <form className="row mt-4 g-5 justify-content-center w-100">
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="firstName" aria-describedby="firstNameFeedback" placeholder='First Name' onBlur={(e) => checkInput(e)} required />
                  <div id="firstName" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="lastName" aria-describedby="lastNameFeedback" placeholder='Last Name' onBlur={(e) => checkInput(e)} required />
                  <div id="lastName" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <Multiselect options={options} isObject={false} placeholder="Languages" customCloseIcon="X" showArrow />
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="phone" aria-describedby="phoneFeedback" placeholder='Phone Number' onBlur={(e) => checkInput(e)} required />
                  <div id="phone" className="invalid-feedback">This field is required.</div>
                </div>
              </form>
            </div>
            <div className={`tab-pane fade ${currentStep === 2 ? 'show active' : ''}`} id="provider">
              <h2 className='text-center'>Provider Information</h2>
              <p className='text-center'>Tell us about your practice.</p>
              <form className="row mt-4 g-5 justify-content-center w-100">
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="insurances" aria-describedby="insurancesFeedback" placeholder='Insurances' onBlur={(e) => checkInput(e)} required />
                  <div id="insurances" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="specialty" aria-describedby="specialtyFeedback" placeholder='Specialty' onBlur={(e) => checkInput(e)} required />
                  <div id="specialty" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <textarea className="form-control form-control-lg" id="about" aria-describedby="aboutFeedback" placeholder='Tell us about yourself' onBlur={(e) => checkInput(e)} required></textarea>
                  <div id="about" className="invalid-feedback">This field is required.</div>
                </div>
              </form>
            </div>
            <div className={`tab-pane fade ${currentStep === 3 ? 'show active' : ''}`} id="contact">
              <h2 className='text-center'>Contact Information</h2>
              <p className='text-center'>Tell how to contact you.</p>
              <form className="row mt-4 g-5 justify-content-center w-100">
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg" id="email" aria-describedby="emailFeedback" placeholder='Email' onBlur={(e) => checkInput(e)} required />
                  <div id="email" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="address" aria-describedby="addressFeedback" placeholder='Address' onBlur={(e) => checkInput(e)} required />
                  <div id="address" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="city" aria-describedby="cityFeedback" placeholder='City' onBlur={(e) => checkInput(e)} required />
                  <div id="city" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="state" aria-describedby="stateFeedback" placeholder='State' onBlur={(e) => checkInput(e)} required />
                  <div id="state" className="invalid-feedback">This field is required.</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control form-control-lg" id="country" aria-describedby="countryFeedback" placeholder='Country' onBlur={(e) => checkInput(e)} required />
                  <div id="country" className="invalid-feedback">This field is required.</div>
                </div>
              </form>
            </div>
          </div>
          <Footer nextInactive={nextInactive} backInactive={backInactive} onNext={nextForm} onBack={prevForm}></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/payment.css';

function PaymentProcessing() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate payment verification steps
    const steps = [
      () => setStep(1), // Payment received
      () => setStep(2), // Verifying with Harmony
      () => setStep(3), // Activating subscription
      () => navigate('/payment-success') // Success
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        steps[currentStep]();
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    // Error handling after 30 seconds
    const errorTimeout = setTimeout(() => {
      setError(true);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(errorTimeout);
    };
  }, [navigate]);

  if (error) {
    return (
      <div className="payment-page">
        <div className="payment-content">
          <div className="warning-icon">⚠️</div>
          <h2>Taking longer than usual</h2>
          <p>We're still verifying your payment. Please wait or check your status.</p>
          <button className="primary-button">Check status</button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-content">
        <div className="spinner">💿</div>
        <h2>Verifying your payment…</h2>
        <p>Hang tight — we're confirming with our payment partner. This usually takes 5-10 seconds.</p>
        
        <div className="process-steps">
          <div className={`step ${step >= 1 ? 'completed' : ''}`}>
            {step >= 1 ? '☑' : '◯'} Payment received by Razorpay
          </div>
          <div className={`step ${step >= 2 ? 'completed' : ''}`}>
            {step >= 2 ? '☑' : '◯'} Verifying with Harmony
          </div>
          <div className={`step ${step >= 3 ? 'completed' : ''}`}>
            {step >= 3 ? '☑' : '◯'} Activating subscription…
          </div>
        </div>

        <p className="helper-text">Do not refresh or close this tab.</p>
      </div>
    </div>
  );
}

export default PaymentProcessing;

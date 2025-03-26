import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './registrationPage.css';

const Loading = () => (
  <div className="loading-container">
    <div className="loading-circle"></div>
  </div>
);

const RegistrationPage = () => {
  const { title } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [step, setStep] = useState('registration');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  useEffect(() => {
    if (location.state?.event) {
      setEvent(location.state.event);
      setLoading(false);
    } else {
      fetchEventByTitle(title);
    }
  }, [title, location.state]);

  const fetchEventByTitle = async (eventTitle) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/events/${encodeURIComponent(eventTitle)}`);

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }

      const eventData = await response.json();
      setEvent(eventData);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        history.push('/not-found');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', phone: '', email: '' };

    // Name validation: No numbers allowed
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Name cannot contain numbers.';
      isValid = false;
    }

    // Phone number validation: Must be a valid 10-digit number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }

    // Email validation: Must be a valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email address.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' })); // Clear error when user types
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('payment'); // Transition to payment step
    }
  };

  const validatePayment = () => {
    let isValid = true;
    const errors = { cardNumber: '', expiryDate: '', cvv: '', cardHolder: '' };
  
    // Card Number: Must be 16 digits
    const cardRegex = /^[0-9]{16}$/;
    if (!paymentData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required.';
      isValid = false;
    } else if (!cardRegex.test(paymentData.cardNumber)) {
      errors.cardNumber = 'Enter a valid 16-digit card number.';
      isValid = false;
    }
  
    // Expiry Date: Must be MM/YY format and not expired
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!paymentData.expiryDate.trim()) {
      errors.expiryDate = 'Expiry date is required.';
      isValid = false;
    } else if (!expiryRegex.test(paymentData.expiryDate)) {
      errors.expiryDate = 'Use format MM/YY.';
      isValid = false;
    } else {
      const [month, year] = paymentData.expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        errors.expiryDate = 'Card is expired.';
        isValid = false;
      }
    }
  
    // CVV: Must be a 3-digit number
    const cvvRegex = /^[0-9]{3}$/;
    if (!paymentData.cvv.trim()) {
      errors.cvv = 'CVV is required.';
      isValid = false;
    } else if (!cvvRegex.test(paymentData.cvv)) {
      errors.cvv = 'Enter a valid 3-digit CVV.';
      isValid = false;
    }
  
    // Card Holder: Cannot contain numbers
    if (!paymentData.cardHolder.trim()) {
      errors.cardHolder = 'Card holder name is required.';
      isValid = false;
    } else if (/\d/.test(paymentData.cardHolder)) {
      errors.cardHolder = 'Name cannot contain numbers.';
      isValid = false;
    }
  
    setFormErrors(errors);
    return isValid;
  };
  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (validatePayment()) {
      setPaymentSuccess(true); // Simulate payment success
    }
  };
  


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="registration-container">
      <Navbar />
      <main className="registration-content">
        <div className="registration-grid">
          <div className="registration-form">
            {step === 'registration' ? (
              <>
                <h2>Register for {event.title}</h2>
                <form onSubmit={handleRegistrationSubmit}>
                  <div className="registration-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      required
                    />
                    {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                  </div>
                  <div className="registration-form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                    />
                    {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                  </div>
                  <div className="registration-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                    />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                  </div>
                  <button type="submit" className="registration-submit-button">
                    Continue to Payment
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2>Payment for {event.title}</h2>
                {paymentSuccess ? (
                  <div className="payment-success">
                    <h3>Payment Successful!</h3>
                    <p>You are now registered for {event.title}</p>
                  </div>
                ) : (
                  <form onSubmit={handlePaymentSubmit}>
                  <div className="registration-form-group">
                    <input
                      type="text"
                      name="cardHolder"
                      value={paymentData.cardHolder}
                      onChange={handlePaymentChange}
                      placeholder="Card Holder Name"
                      required
                    />
                    {formErrors.cardHolder && <p className="error-message">{formErrors.cardHolder}</p>}
                  </div>
                
                  <div className="registration-form-group">
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="Card Number"
                      required
                    />
                    {formErrors.cardNumber && <p className="error-message">{formErrors.cardNumber}</p>}
                  </div>
                
                  <div className="registration-form-row">
                    <div className="registration-form-group">
                      <input
                        type="text"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        required
                      />
                      {formErrors.expiryDate && <p className="error-message">{formErrors.expiryDate}</p>}
                    </div>
                
                    <div className="registration-form-group">
                      <input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handlePaymentChange}
                        placeholder="CVV"
                        required
                      />
                      {formErrors.cvv && <p className="error-message">{formErrors.cvv}</p>}
                    </div>
                  </div>
                
                  <button type="submit" className="registration-submit-button">
                    Complete Payment
                  </button>
                </form>
                
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;

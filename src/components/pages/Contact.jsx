
  import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    if (inputType === 'email') {
      setEmailTouched(true);
    } else if (inputType === 'name') {
      setNameTouched(true);
    } else {
      setMessageTouched(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setErrorMessage('This is required');
      return;
    }

    if(!validateEmail(email)) {
      setErrorMessage('This is not a valid email')
      return;
    }

    setErrorMessage('');
    setName('');
    setEmail('');
    setMessage('');
    setEmailTouched(false);
    setNameTouched(false);
    setMessageTouched(false);

    alert(`Hello ${name}`);
  };

  return (
  <div>
  <h2 className='mt-3'>Contact Me</h2>
  <form className="form-style" onSubmit={handleFormSubmit}>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input
      value={email}
      name="email"
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      type="email"
      className="form-control" 
      placeholder="youremailhere@example.com"></input>
    {emailTouched && !email && <p className="error-text">Email is required</p>}
  </div>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input 
      value={name}
      name="name"
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      type="text"
      className="form-control" 
      placeholder="Virginia Freitas"></input>
    {nameTouched && !name && <p className="error-text">Name is required</p>}
  </div>
  <div className="mb-3">
    <label className="form-label">Message</label>
    <textarea 
      className="form-control" 
      value={message}
      name="message"
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      type="text"
      placeholder="Type Message Here"
      rows="3">
    </textarea>
    {messageTouched && !message && <p className="error-text">Message is required</p>}
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
    </form>
    </div>
  )
}
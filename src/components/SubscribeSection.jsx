/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = () => {
    setSubscribe(!subscribe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the email and subscription status.
    console.log(`Subscribed with email: ${email}, Subscribe: ${subscribe}`);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-md p-4 rounded-md  text-center">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">SUBSCRIBE</h2>
        <p className="text-black font-bold mb-4">
          Subscribe To Get The Latest News About Us
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2">
            Please Drop Your Email Below To Get Daily Update About What We Do
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md mb-2"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={subscribe}
              onChange={handleCheckboxChange}
            />
            <span className="text-gray-700">Subscribe to updates</span>
            <button
              type="submit"
              className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">GET HELP</h2>

      <div className="mb-6">
        <input 
          type="text"
          placeholder="What can we help you with?"
          className="border-gray-300 border rounded-md w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-2">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h3>
          <p className="text-sm text-gray-600 mb-2">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-2">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</li>
            <li>Nike Members can store multiple debit or credit cards in their profile for faster checkout.</li>
          </ul>
          <p className="text-sm text-gray-600">If you are not already a Member, join us today.</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">CONTACT US</h3>
          <div className="flex items-start space-x-4 mb-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <div>
              <p className="text-sm text-gray-600">800.806.6453</p>
              <p className="text-xs text-gray-500">Monday & Tuesday: 7AM to 9PM</p>
              <p className="text-xs text-gray-500">Wednesday - Friday: 9AM to 5PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p className="text-sm text-gray-600">We will reply within 1 business day</p>
          </div>
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <p className="text-sm text-gray-600">Find your nearest store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

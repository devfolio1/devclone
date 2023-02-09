import React from "react";
import { Link } from "react-router-dom";

const Privacypolicy = () => {
  return (
    <>
      <Link
        to="/"
        className="inline-flex items-center m-4 px-5 py-2 font-medium text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </Link>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 p-4 grid gap-4 mx-auto">
          <h1 className="text-2xl font-medium underline mx-auto">
            Privacy Policy
          </h1>
          <div className="text-gray-700">
            <p className="mb-4">
              Privacy Policy At DevFolio, we are committed to protecting your
              privacy. This privacy policy explains what information we collect
              and how we use it in relation to our website and our use of
              Razorpay.
            </p>
            <p className="mb-4">
              Information Collection We collect information from you when you
              use our website and when you use Razorpay to process payments. The
              information we collect includes: Personal information, such as
              your name, email address, and contact information Payment
              information, such as credit card details and transaction history
              Log data, such as your IP address, browser type, and pages you
              visit on our website
            </p>
            <p className="mb-4">
              Use of Information The information we collect is used for the
              following purposes: To process payments through Razorpay To
              improve the quality and functionality of our website To
              communicate with you and respond to your requests
            </p>
            <p className="mb-4">
              Sharing of Information We may share your information with third
              parties in the following instances: With Razorpay in order to
              process payments With service providers who assist us with website
              management and maintenance With law enforcement or other
              government agencies as required by law
            </p>
            <p className="mb-4">
              Data Security We take the security of your information seriously
              and have implemented measures to protect it, including: Encrypting
              sensitive information, such as payment information, during
              transmission Storing information in secure servers
            </p>
            <p className="mb-4">
            Data Retention We will retain
            your information for as long as necessary to fulfill the purposes
            for which it was collected and to comply with applicable laws. User
            Control You have the following rights with respect to your
            information: The right to access and review your information The
            right to correct or update your information The right to request
            that we delete your information Changes to Privacy Policy We may
            update this privacy policy from time to time. If we make changes, we
            will notify you by posting the revised policy on our website. It is
            your responsibility to regularly review the privacy policy for any
            updates. Contact Us If you have any questions about this privacy
            policy or our use of your information, please contact us at [contact
            devfolio1@gmail.com].
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacypolicy;

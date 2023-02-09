import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
          <h1 className="text-2xl font-medium">About Us</h1>
          <p className="text-gray-700">
            Introducing Devfolio! We specialize in providing high-quality,
            easy-to-use portfolio website templates for creatives, freelancers,
            and small businesses. Our templates are designed to showcase your
            work in a professional and visually appealing way.
          </p>
          <p className="text-gray-700">
            We understand that building a website from scratch can be
            time-consuming and overwhelming, which is why we have done the hard
            work for you. Our templates are fully customizable, so you can add
            your own personal touch while still maintaining a polished and
            cohesive look. Plus, with our user-friendly editing tools, you don't
            need any coding experience to make changes to your site.
          </p>
          <p className="text-gray-700">
            We offer a wide variety of templates to choose from, each with its
            own unique design and features. Whether you're a photographer,
            graphic designer, or a fashion blogger, we have a template that will
            suit your needs. Our templates are fully responsive, so they look
            great on all devices.
          </p>
          <p className="text-gray-700">
            We are constantly updating our selection, so be sure to check back
            often to see our latest offerings. Plus, with our affordable
            pricing, you can get a professional-looking website without breaking
            the bank.
          </p>
          <p className="text-gray-700">
            So why wait? Browse our selection and start building your online
            portfolio today with Portfolio Templates!
          </p>
          <p className="text-gray-700">
            In addition, we provide 24/7 customer support, documentation and
            video tutorials to help users set up and customize their templates,
            a 30-day money-back guarantee for customer satisfaction, and a wide
            range of payment options. Our templates are also SEO friendly and
            fast loading.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

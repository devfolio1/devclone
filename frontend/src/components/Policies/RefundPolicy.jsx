import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-5 bg-white shadow-md flex flex-col items-center justify-center mt-20">
      <h3 className="text-lg font-medium mb-3">Refund Policy</h3>
      <p className="text-sm text-gray-600 mb-3">
        At DevFolio, customer satisfaction is our top priority. If you
        are not completely satisfied with your purchase, We offer furthur customization of
        your portfolio or change of template but refund of money is not possible
      </p>
      <h4 className="text-base font-medium mb-3">Eligibility:</h4>
      <ul className="list-disc text-sm mb-3">
        <li className="text-gray-600">
         Major customization of the website is only offered when the css we provide you with is not responsive or If
         we have forgot to mention your important details.
        </li>
       
      </ul>
      <h4 className="text-base font-medium mb-3">Process:</h4>
      <ul className="list-disc text-sm mb-3">
        <li className="text-gray-600">
          Contact our customer support team at devfolio1@gmail.com to initiate
          the customization process.
        </li>
        <li className="text-gray-600">
          Provide your order number and reason for the customization request.
        </li>
        <li className="text-gray-600">
          Our team will review your request and, if approved, provide you with
          return instructions.
        </li>
        <li className="text-gray-600">
          Once we receive the request, we will process the customize within
        3-6 business days.
        </li>
      </ul>
      
      <p className="text-sm text-gray-600">
        This refund policy is subject to change at any time without notice. If
        you have any questions, please don't hesitate to contact us at
        devfolio1@gmail.com.
      </p>
    </div>
  );
};

export default RefundPolicy;

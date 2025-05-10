import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section px-4 py-16 bg-gray-100">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out to me for any opportunities or questions!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
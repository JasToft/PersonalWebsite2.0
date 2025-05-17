import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-primary-lightest py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary-dark mb-4">Contact Me</h2>
        <p className="text-secondary mb-6">
          Feel free to reach out to me for any opportunities or questions!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your-email@example.com"
            className="text-accent hover:text-accent-dark text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-dark hover:text-secondary text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          저와 함께 일하거나 궁금한 점이 있으시다면 언제든지 연락 주세요!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline text-xl"
          >
            your-email@example.com
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            GitHub Profile
          </a>
          {/* LinkedIn, Twitter 등 다른 소셜 미디어 링크를 추가할 수 있습니다. */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
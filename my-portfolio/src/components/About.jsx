import React from 'react';
// import profileImage from '../assets/images/profile.jpg'; // 경로를 본인 파일에 맞게 수정하세요.

const About = () => {
  return (
    <section id="about" className="bg-white p-6 rounded-lg shadow-md">
    {/* <img
            src={profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-4 border-white shadow-lg"
          /> */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        안녕하세요! 저는 [경력/역할]입니다. 사용자 경험(UX)을 고려한 웹 애플리케이션 개발에 열정이 있습니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 동료들과 협력하여 더 나은 솔루션을 만들어내는 데 기여하고 싶습니다.
      </p>
    </section>
  );
};


export default About;
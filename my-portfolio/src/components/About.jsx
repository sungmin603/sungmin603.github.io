import React from 'react';
import profileImage from '../assets/images/profile.jpg'; // 경로를 본인 파일에 맞게 수정하세요.

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            안녕하세요! 저는 [경력/역할]입니다. [몇 년 차 개발자, 어떤 기술 스택에 강점, 어떤 분야에 관심이 있는지 등]을 중심으로 자신을 소개하는 글을 작성해 보세요. 사용자 경험(UX)을 고려한 웹 애플리케이션 개발에 열정이 있습니다.
          </p>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            [자신만의 강점이나 목표]에 대해 구체적으로 언급하면 좋습니다. 예를 들어, "저는 새로운 기술을 배우고 적용하는 것을 즐기며, 동료들과 협력하여 더 나은 솔루션을 만들어내는 데 기여하고 싶습니다."와 같이요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
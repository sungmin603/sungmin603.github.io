// src/components/experience/ExperienceBio.jsx
// import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import ExperienceContext from '../../context/ExperienceContext';

const ExperienceBio = () => {
  const { experience } = useContext(ExperienceContext);

  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-10 sm:mt-20">
      {/* 타임라인 */}
      <div className="w-full relative pl-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-2 before:border-l-2 before:border-gray-300 dark:before:border-gray-600">
        <ul className="space-y-8">
          {experience.map((item) => (
            <li key={item.id} className="relative flex flex-col sm:flex-row items-start">
              {/* 점 */}
              <div className="absolute -left-[7px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>

              {/* 회사 로고 */}
              <div className="w-16 h-16 flex-shrink-0 mr-0 sm:mr-4 mb-4 sm:mb-0">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-full h-full object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
                />
              </div>

              {/* 상세 내용 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.position}</p>
                <p className="text-sm text-gray-400">{item.period}</p>
                {item.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBio;
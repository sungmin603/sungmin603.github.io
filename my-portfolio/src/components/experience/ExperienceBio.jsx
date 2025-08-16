// src/components/experience/ExperienceBio.jsx
// import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import ExperienceContext from '../../context/ExperienceContext';

export default function ExperienceBio = () => {
  const { work, teaching, publications, awards } = useContext(ExperienceContext);

  return (
    <div className="w-full mt-10 sm:mt-20 relative pl-8">
      {/* 세로 라인 */}
      <div className="absolute top-0 left-2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>

      <ul className="space-y-8">
        {experience.map((item) => (
          <li key={item.id} className="relative flex items-start">
            {/* 타임라인 점 */}
            <div className="absolute -left-[7px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>

            {/* 기업 로고 */}
            <div className="w-16 h-16 flex-shrink-0 mr-4">
              <img
                src={item.logo}
                alt={item.company}
                className="w-full h-full object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
              />
            </div>

            {/* 경력 상세 */}
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
  );
};

export default ExperienceBio;
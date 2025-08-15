import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import EducationContext from '../../context/EducationContext';

const EducationBio = () => {
  const { education } = useContext(EducationContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      {/* 왼쪽 프로필 */}
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center">
        <img src={profileImage} className="rounded-lg w-48 sm:w-64" alt="Profile" />
      </div>

      {/* 오른쪽 타임라인 */}
      <div className="w-full sm:w-3/4 relative pl-8">
        {/* 세로 라인 */}
        <div className="absolute top-0 left-2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>

        <ul className="space-y-8">
          {education.map((item) => (
            <li key={item.id} className="relative">
              {/* 타임라인 점 */}
              <div className="absolute -left-[7px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>

              <div>
                {/* 학위 타입 */}
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2
                    ${item.type === "Bachelor" ? "bg-blue-100 text-blue-700" :
                      item.type === "Master" ? "bg-green-100 text-green-700" :
                      "bg-purple-100 text-purple-700"}`}
                >
                  {item.type}
                </span>

                {/* 학교명 / 전공 / 기간 */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.school}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.degree}</p>
                <p className="text-sm text-gray-400">{item.period}</p>

                {/* 상세 설명 */}
                {item.bio && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.bio}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationBio;

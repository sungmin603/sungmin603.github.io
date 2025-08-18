import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";

export default function ExperienceBio() {
  const { work, teaching, publication, awards } = useContext(ExperienceContext);

  // 카드 레이아웃 공통
  const renderCard = (leftContent, rightContent) => (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 border-l-2 border-gray-300 dark:border-gray-600 relative bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
        {leftContent}
      </div>
      <div className="flex-1">{rightContent}</div>
      <span className="absolute left-[-10px] top-6 w-4 h-4 bg-blue-500 rounded-full"></span>
    </div>
  );

  return (
    <div className="space-y-12 px-2 md:px-0">
      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {work.map((item) =>
            renderCard(
              item.logo ? (
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-full h-full object-contain"
                />
              ) : null,
              <div>
                <h3 className="font-semibold text-lg">
                  {item.position} @ {item.company}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                {Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* Teaching & Lectures */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Teaching & Lectures</h2>
        <div className="space-y-6">
          {teaching.map((item) =>
            renderCard(
              <span className="text-xl font-bold text-blue-500">🎓</span>, // 아이콘 대신 로고 없을 때 표시
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.host} · {item.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Publications</h2>
        <div className="space-y-6">
          {publication.map((pub) =>
            renderCard(
              <span className="text-xl font-bold text-green-500">📖</span>,
              <div>
                <span className="font-semibold">{pub.title}</span>
                <p className="text-sm text-gray-500">({pub.type}, {pub.publisher}, {pub.year})</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Awards</h2>
        <div className="space-y-6">
          {awards.map((award) =>
            renderCard(
              <span className="text-xl font-bold text-yellow-500">🏆</span>,
              <div>
                <span className="font-semibold">{award.title}</span>
                <p className="text-sm text-gray-500">({award.organization}, {award.year})</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

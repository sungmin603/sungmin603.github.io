import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";

export default function ExperienceBio() {
  const { work, teaching, publications, awards } = useContext(ExperienceContext);

  return (
    <div className="space-y-20 mt-10 sm:mt-20 font-general-regular">
      {/* Work Experience */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </h3>
        <div className="space-y-12">
          {work.map((item) => (
            <div
              key={item.id}
              className="block sm:flex sm:gap-10 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              {/* 회사 로고 */}
              <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="rounded-lg w-full sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
                  />
                )}
              </div>

              {/* 텍스트 내용 */}
              <div className="w-full sm:w-3/4 text-left">
                <h4 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light">
                  {item.company}
                </h4>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  ({item.period}): {item.position} 
                </p>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Teaching
        </h3>
        <div className="space-y-12">
          {teaching.map((item) => (
            <div
              key={item.id}
              className="block sm:flex sm:gap-10 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="rounded-lg w-full sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
                  />
                )}
              </div>
              <div className="w-full sm:w-3/4 text-left">
                <h4 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
                  {item.course}
                </h4>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.institution} ({item.period})
                </p>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Publications
        </h3>
        <ul className="space-y-6">
          {publications.map((pub) => (
            <li
              key={pub.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <p className="text-ternary-dark dark:text-ternary-light">
                [{pub.type}] {pub.title} – ({pub.publisher}, {pub.year})
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Awards
        </h3>
        <ul className="space-y-6">
          {awards.map((award) => (
            <li
              key={award.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <p className="text-ternary-dark dark:text-ternary-light">
                {award.title} – ({award.organization}, {award.year})
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

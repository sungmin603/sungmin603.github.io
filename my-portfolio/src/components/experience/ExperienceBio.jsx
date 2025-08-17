// src/components/experience/ExperienceBio.jsx
// import profileImage from '../../images/profile.jpeg';
import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";

export default function ExperienceBio() {
  const { work, teaching, publications, awards } = useContext(ExperienceContext);

  return (
    <div className="space-y-12">
      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {work.map((item) => (
            <div
              key={item.id}
              className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-600"
            >
              <span className="absolute left-[-10px] top-2 w-4 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold">{item.role} @ {item.company}</h3>
              <p className="text-sm text-gray-500">{item.period}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              {item.logo && (
                <img src={item.logo} alt={item.company} className="w-16 h-16 mt-2" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Teaching & Lectures */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Teaching & Lectures</h2>
        <div className="space-y-4">
          {teaching.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.host} · {item.period}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Publications</h2>
        <ul className="space-y-2">
          {publications.map((pub) => (
            <li key={pub.id} className="p-3 border rounded-md">
              <span className="font-semibold">{pub.title}</span>  
              <span className="text-sm text-gray-500"> ({pub.type}, {pub.publisher}, {pub.year})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Awards</h2>
        <ul className="space-y-2">
          {awards.map((award) => (
            <li key={award.id} className="p-3 border rounded-md">
              <span className="font-semibold">{award.title}</span>  
              <span className="text-sm text-gray-500"> ({award.organization}, {award.year})</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
// src/context/ExperienceContext.jsx
import { useState, createContext } from "react";
import { experience as experienceData } from "../data/resumeData";

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [experience, setExperience] = useState(experienceData);

  return (
    <ExperienceContext.Provider value={{ ...experience, setExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};

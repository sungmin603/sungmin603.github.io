import { useState, createContext } from 'react';
import { experienceData } from '../data/experienceData';
// import { clientsHeading as clientsPageHeading } from '../data/clientsData';
// import { clientsData as clientsDataJson } from '../data/clientsData';

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
	const [experience, setExperience] = useState(experienceData);

	// const clientsHeading = clientsPageHeading;

	// const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<ExperienceContext.Provider
			value={{
				experience,
				setExperience,
				// clientsHeading,
				// clientsData,
				// setClientsData,
			}}
		>
			{children}
		</ExperienceContext.Provider>
	);
};

export default ExperienceContext;

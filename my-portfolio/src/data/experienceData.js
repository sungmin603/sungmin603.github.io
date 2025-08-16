// Import images
import Image1 from '../images/brands/Samsung.png';
import Image2 from '../images/brands/HyundaiMobis.png';
import Image3 from '../images/brands/hyundaiMipo.jpg';
import Image4 from '../images/brands/SamsungHeavyindustry.png';


export const experienceData = {
	work:[
	{
		id: 1,
		company: "Samsung Electronics",
		position: "Staff Engineer(ML Engineer)",
		period: "2025 - present",
		description: "Development of AI projects and data science in R&D center.",
		logo: Image1
	},
	{
		id: 2,
		company: "Samsung Electronics",
		position: "Staff Engineer(Full-stack Engineer)",
		period: "2022 - 2024",
		description: "Development of webpage, api, server, DB and visualization dashboard for IT projects in R&D center.",
		logo: Image1
	},
	{
		id: 3,
		company: "Samsung Electronics",
		position: "Engineer(Data Scientist)",
		period: "2018 - 2021",
		description: "Root-cause Analysis in DRAM(D1z, D1a, D1b, D1c) and developing auto analysis solution.",
		logo: Image1
	},
	{
		id: 4,
		company: "Hyundai Mobis",
		position: "Research Engineer",
		period: "2017 - 2018",
		description: "Development of car’s steering system and Gear System optimization.",
		logo: Image2
	},
	{
		id: 5,
		company: "Hyundai Mipo",
		position: "Internship",
		period: "2014 - 2014",
		description: "Internship with drawings tools.",
		logo: Image3
	},
	{
		id: 6,
		company: "Hyundai Mipo",
		position: "Internship",
		period: "2013 - 2013",
		description: "Internship with drawings tools.",
		logo: Image4
	}
	],
	teaching : [
	{
      id: 1,
      title: "Practical ETL Course",
      host: "Samsung internal lecture",
      period: "2024 - present",
      description: "Conducted ETL training for company environments.",
	},
    {
      id: 2,
      title: "Data Analysis basic",
      host: "Samsung internal lecture",
      period: "2024 - present",
      description: "Conducted training for manufacturing data on data analysis.",
    },
	{
      id: 3,
	  title: "Spotfire 특강",
      host: "Samsung internal lecture",
      period: "2024 - present",
      description: "training and building workshop on spotfire dashboard.",
    },
	],
	publication : [
	{
      id: 1,
      title: "Spotfire 간단히 그래프 그리기",
      type: "Book",
      publisher: "Puple",
      year: 2022,
    },
	], 
	awards: [
    {
      id: 1,
      title: "2024 SRD e-Technology Journal",
      organization: "Samsung Electronics CTO",
      year: 2024,
    },
    {
      id: 2,
      title: "2023 The Innovator",
      organization: "Samsung Electronics CTO",
      year: 2023,
    },
	]

};

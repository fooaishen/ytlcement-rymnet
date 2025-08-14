// Education level options
export const educationLevels = [
  "SPM/O-Level",
  "STPM/A-Level",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD/Doctorate",
  "Professional Certificate",
  "Others",
]

// Field of study options
export const fieldsOfStudy = [
  "Engineering",
  "Business Administration",
  "Accounting & Finance",
  "Information Technology",
  "Marketing",
  "Human Resources",
  "Operations Management",
  "Construction Management",
  "Environmental Science",
  "Chemistry",
  "Materials Science",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Electrical Engineering",
  "Others",
]

// Result options
export const resultOptions = [
  "First Class Honours",
  "Second Class Honours (Upper)",
  "Second Class Honours (Lower)",
  "Third Class Honours",
  "Pass",
  "Distinction",
  "Credit",
  "A",
  "B",
  "C",
  "Others",
]

// Industry options
export const industryOptions = [
  "Construction & Building Materials",
  "Manufacturing",
  "Oil & Gas",
  "Engineering & Technical Services",
  "Information Technology",
  "Financial Services",
  "Healthcare",
  "Education",
  "Retail & Consumer Goods",
  "Telecommunications",
  "Transportation & Logistics",
  "Real Estate & Property Development",
  "Government & Public Sector",
  "Consulting Services",
  "Mining & Quarrying",
  "Utilities",
  "Agriculture",
  "Tourism & Hospitality",
  "Media & Communications",
  "Others",
]

// Position level options
export const positionLevels = [
  "Entry Level",
  "Junior Executive",
  "Executive",
  "Senior Executive",
  "Assistant Manager",
  "Manager",
  "Senior Manager",
  "General Manager",
  "Director",
  "Senior Director",
  "Vice President",
  "Senior Vice President",
  "Chief Executive Officer",
  "Others",
]

// How did you know about this job options
export const jobSourceOptions = [
  "Company Website",
  "Job Portal (JobStreet, Indeed, etc.)",
  "Social Media (LinkedIn, Facebook, etc.)",
  "Newspaper Advertisement",
  "Referral from Friend/Family",
  "Referral from Current Employee",
  "Career Fair",
  "Recruitment Agency",
  "University Career Center",
  "Walk-in Application",
  "Others",
]

// Vehicle possession options
export const vehicleOptions = ["Yes - Own Vehicle", "Yes - Family Vehicle", "No"]

// Management level options
export const managementLevels = [
  "Non-Management",
  "Team Leader/Supervisor",
  "Middle Management",
  "Senior Management",
  "Executive Management",
]

// Gender options
export const genderOptions = ["Male", "Female", "Prefer not to say"]

// Race options
export const raceOptions = ["Malay", "Chinese", "Indian", "Bumiputera Sabah", "Bumiputera Sarawak", "Others"]

// Religion options
export const religionOptions = [
  "Islam",
  "Christianity",
  "Buddhism",
  "Hinduism",
  "Taoism",
  "Sikhism",
  "Others",
  "Prefer not to say",
]

// Marital status options
export const maritalStatusOptions = ["Single", "Married", "Divorced", "Widowed"]

// Nationality options
export const nationalityOptions = [
  "Malaysian",
  "Singaporean",
  "Indonesian",
  "Thai",
  "Filipino",
  "Vietnamese",
  "Cambodian",
  "Myanmar",
  "Brunei",
  "Others",
]

// Sample job data (in a real app, this would come from an API or database)
export const jobData = {
  1: {
    id: 1,
    title: "Process Engineer",
    location: "Kuala Lumpur, Malaysia",
    department: "Engineering",
    type: "Full-time",
    description: "Responsible for optimizing cement production processes and ensuring quality control.",
    posted: "2 weeks ago",
  },
  2: {
    id: 2,
    title: "Sales Manager",
    location: "Singapore",
    department: "Sales",
    type: "Full-time",
    description: "Lead sales initiatives and develop client relationships in the Singapore market.",
    posted: "3 days ago",
  },
}

export type JobData = typeof jobData
export type Job = JobData[keyof JobData]

"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ApplicationsTab from "./tabs/applications-tab"
import PersonalInfoTab from "./tabs/personal-info-tab"
import ExperienceTab from "./tabs/experience-tab"
import PhotoTab from "./tabs/photo-tab"
import HighestQualificationTab from "./tabs/highest-qualification-tab"
import LanguageTab from "./tabs/language-tab"
import CertificateTab from "./tabs/certificate-tab"
import BankStatutoryTab from "./tabs/bank-statutory-tab"
import FamilyTab from "./tabs/family-tab"
import AdditionalInformationTab from "./tabs/additional-information-tab"
import QuestionsTab from "./tabs/questions-tab"

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    summary: "",
  })

  const [applications] = useState([
    {
      id: 1,
      position: "Senior Civil Engineer",
      department: "Engineering",
      location: "Kuala Lumpur",
      dateApplied: "2024-01-15",
      status: "Under Review",
    },
    {
      id: 2,
      position: "Project Manager",
      department: "Operations",
      location: "Johor",
      dateApplied: "2024-01-10",
      status: "Interview Scheduled",
    },
    {
      id: 3,
      position: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Perak",
      dateApplied: "2024-01-05",
      status: "Rejected",
    },
  ])

  const [education, setEducation] = useState([
    {
      id: 1,
      institution: "University of Malaya",
      degree: "Bachelor of Engineering",
      field: "Civil Engineering",
      startYear: "2018",
      endYear: "2022",
      grade: "First Class Honours",
    },
  ])

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "ABC Construction Sdn Bhd",
      position: "Junior Civil Engineer",
      level: "Junior",
      startDate: "2022-06",
      endDate: "2023-12",
      location: "Kuala Lumpur",
      description:
        "Responsible for structural design and project coordination for residential and commercial projects.",
    },
  ])

  const [editingExperience, setEditingExperience] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("applications")

  const [qualificationData, setQualificationData] = useState({
    levelOfEducation: "",
    fieldOfStudy: "",
    result: "",
    completionDate: "",
  })

  const [languages, setLanguages] = useState([
    {
      id: 1,
      language: "English",
      spoken: "",
      written: "",
    },
    {
      id: 2,
      language: "Malay",
      spoken: "",
      written: "",
    },
  ])

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      certificationName: "",
      membershipNumber: "",
      dateObtained: "",
      membershipExpiry: "",
      attachment: null,
    },
  ])

  const [bankStatutoryData, setBankStatutoryData] = useState({
    bank: "",
    bankNumber: "",
    epfNumber: "",
    socsoNumber: "",
    taxNumber: "",
  })

  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      familyName: "",
      gender: "",
      relationship: "",
      birthDate: "",
      jobPosition: "",
      companyName: "",
      companyLocation: "",
    },
  ])

  const [additionalData, setAdditionalData] = useState({
    jobSource: "",
    hasVehicle: "",
    drivingLicense: "",
    modeOfTransport: "",
    managementLevel: "",
    numberOfReports: "",
    dealsWithPrivateMatters: "",
    dealsWithCash: "",
    dealsWithSecurity: "",
    professionalBodyDetails: "",
  })

  const [questionsData, setQuestionsData] = useState({
    socialClubs: "",
    socialClubsDetails: "",
    communityWork: "",
    communityWorkDetails: "",
    unionActivities: "",
    unionActivitiesDetails: "",
    courtConviction: "",
    courtConvictionDetails: "",
    dismissedSuspended: "",
    dismissedSuspendedDetails: "",
    bankrupt: "",
    bankruptDetails: "",
    goodHealth: "",
    goodHealthDetails: "",
    chronicIllness: "",
    chronicIllnessDetails: "",
    physicallyHandicap: "",
    physicallyHandicapDetails: "",
    insurancePolicy: "",
    insurancePolicyDetails: "",
    friendsRelatives: "",
    friendsRelativesDetails: "",
    appliedBefore: "",
    appliedBeforeDetails: "",
    employedBefore: "",
    employedBeforeDetails: "",
    outsideBusiness: "",
    outsideBusinessDetails: "",
    workOutstation: "",
    workLongHours: "",
    workShifts: "",
    hobbies: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleQualificationChange = (field: string, value: string) => {
    setQualificationData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBankStatutoryChange = (field: string, value: string) => {
    setBankStatutoryData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAdditionalChange = (field: string, value: string) => {
    setAdditionalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleQuestionsChange = (field: string, value: string) => {
    setQuestionsData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      grade: "",
    }
    setEducation([...education, newEducation])
  }

  const removeEducation = (id: number) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      level: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    }
    setExperience([...experience, newExperience])
    setEditingExperience(newExperience.id)
  }

  const removeExperience = (id: number) => {
    setExperience(experience.filter((exp) => exp.id !== id))
  }

  return (
    <div className="py-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-color mb-4">My Profile</h1>
          <p className="text-base text-gray-600">Manage your personal information and track your applications</p>
        </div>

        {/* Custom vertical navigation */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Mobile Dropdown Navigation */}
          <div className="md:hidden">
            <Select className="text-text-color text-base" value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full text-text-color text-base">
                <SelectValue className="text-text-color text-base" placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent className="text-text-color text-base">
                <SelectItem className="text-text-color text-base" value="applications">
                  Applications
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-personal">
                  Personal Information
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-language">
                  Language
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-qualification">
                  Highest Qualification
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-certificate">
                  Certificate
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-employment">
                  Employment History
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-bankStatutory">
                  Bank and Statutory
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-family">
                  Family
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-additional">
                  Additional Information
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="biodata-questions">
                  Questions
                </SelectItem>
                <SelectItem className="text-text-color text-base" value="documents">
                  Documents
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Sidebar Navigation */}
          <div className="hidden md:block w-full md:w-64 h-fit bg-white rounded-sm border shadow-sm">
            <nav className="flex flex-col">
              <button
                onClick={() => setActiveTab("applications")}
                className={`text-left px-4 py-3 border-l-4 transition-colors ${
                  activeTab === "applications"
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-transparent hover:bg-gray-50"
                }`}
              >
                Applications
              </button>

              {/* Biodata section header (non-clickable) */}
              <div className="px-4 py-3 bg-gray-100 font-semibold text-gray-700 border-l-4 border-gray-300">
                Biodata
              </div>

              {/* Nested biodata items */}
              <div>
                <button
                  onClick={() => setActiveTab("biodata-personal")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-personal"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Personal Information
                </button>
                <button
                  onClick={() => setActiveTab("biodata-language")}
                  className={`w-full text-left px-10  py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-language"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Language
                </button>
                <button
                  onClick={() => setActiveTab("biodata-qualification")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-qualification"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Highest Qualification
                </button>
                <button
                  onClick={() => setActiveTab("biodata-certificate")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-certificate"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Certificate
                </button>
                <button
                  onClick={() => setActiveTab("biodata-employment")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-employment"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Employment History
                </button>
                <button
                  onClick={() => setActiveTab("biodata-bankStatutory")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-bankStatutory"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Bank and Statutory
                </button>
                <button
                  onClick={() => setActiveTab("biodata-family")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-family"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Family
                </button>
                <button
                  onClick={() => setActiveTab("biodata-additional")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-additional"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Additional Information
                </button>
                <button
                  onClick={() => setActiveTab("biodata-questions")}
                  className={`w-full text-left px-10 py-2 text-base border-l-4 transition-colors ${
                    activeTab === "biodata-questions"
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  Questions
                </button>
              </div>

              <button
                onClick={() => setActiveTab("documents")}
                className={`text-left px-4 py-3 border-l-4 transition-colors ${
                  activeTab === "documents"
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-transparent hover:bg-gray-50"
                }`}
              >
                Documents
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === "applications" && <ApplicationsTab applications={applications} />}
            {activeTab === "biodata-personal" && (
              <PersonalInfoTab formData={formData} handleInputChange={handleInputChange} />
            )}
            {activeTab === "biodata-language" && <LanguageTab languages={languages} setLanguages={setLanguages} />}
            {activeTab === "biodata-qualification" && (
              <HighestQualificationTab
                qualificationData={qualificationData}
                handleInputChange={handleQualificationChange}
              />
            )}
            {activeTab === "biodata-certificate" && (
              <CertificateTab certificates={certificates} setCertificates={setCertificates} />
            )}
            {activeTab === "biodata-employment" && (
              <ExperienceTab
                experience={experience}
                addExperience={addExperience}
                removeExperience={removeExperience}
                editingExperience={editingExperience}
                setEditingExperience={setEditingExperience}
              />
            )}
            {activeTab === "biodata-bankStatutory" && (
              <BankStatutoryTab bankStatutoryData={bankStatutoryData} handleInputChange={handleBankStatutoryChange} />
            )}
            {activeTab === "biodata-family" && (
              <FamilyTab familyMembers={familyMembers} setFamilyMembers={setFamilyMembers} />
            )}
            {activeTab === "biodata-additional" && (
              <AdditionalInformationTab additionalData={additionalData} handleInputChange={handleAdditionalChange} />
            )}
            {activeTab === "biodata-questions" && (
              <QuestionsTab questionsData={questionsData} handleInputChange={handleQuestionsChange} />
            )}
            {activeTab === "documents" && <PhotoTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

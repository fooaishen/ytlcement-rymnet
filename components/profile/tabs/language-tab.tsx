"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useEffect } from "react"
import { X } from "lucide-react"

interface Language {
  id: number
  language: string
  spoken: string
  written: string
}

interface LanguageTabProps {
  languages: Language[]
  setLanguages: (languages: Language[]) => void
}

const languageOptions = [
  "English",
  "Malay",
  "Mandarin",
  "Tamil",
  "Arabic",
  "French",
  "German",
  "Spanish",
  "Japanese",
  "Korean",
  "Thai",
  "Indonesian",
  "Hindi",
  "Cantonese",
  "Hokkien",
  "Teochew",
  "Others",
]

const proficiencyLevels = ["Excellent", "Good", "Fair", "Poor"]

export default function LanguageTab({ languages, setLanguages }: LanguageTabProps) {
  useEffect(() => {
    if (languages.length === 0) {
      setLanguages([
        { id: 1, language: "English", spoken: "", written: "" },
        { id: 2, language: "Malay", spoken: "", written: "" },
      ])
    }
  }, [setLanguages, languages.length])

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now(),
      language: "",
      spoken: "",
      written: "",
    }
    setLanguages([...languages, newLanguage])
  }

  const removeLanguage = (id: number) => {
    setLanguages(languages.filter((lang) => lang.id !== id))
  }

  const updateLanguage = (id: number, field: keyof Language, value: string) => {
    setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
  }

  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-semibold text-text-color">Language Proficiency</CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Specify your proficiency level for spoken and written communication in different languages
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Language Entries */}
          <div className="space-y-6">
            {languages.map((language, index) => (
              <div key={language.id} className="bg-white p-6 rounded-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-text-color">Language {index + 1}</h3>
                  {index >= 2 && (
                    <X
                      className="h-5 w-5 text-red-600 cursor-pointer hover:text-red-700 transition-colors"
                      onClick={() => removeLanguage(language.id)}
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Language Selection */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-text-color">Language *</Label>
                    <Select
                      value={language.language}
                      onValueChange={(value) => updateLanguage(language.id, "language", value)}
                    >
                      <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                        <SelectValue
                          placeholder="Select language"
                          className="text-text-color placeholder:text-text-color/60"
                        />
                      </SelectTrigger>
                      <SelectContent className="text-text-color text-base">
                        {languageOptions.map((lang) => (
                          <SelectItem key={lang} value={lang} className="text-base">
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Spoken Proficiency */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-text-color">Spoken *</Label>
                    <Select
                      value={language.spoken}
                      onValueChange={(value) => updateLanguage(language.id, "spoken", value)}
                    >
                      <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                        <SelectValue
                          placeholder="Select proficiency"
                          className="text-text-color placeholder:text-text-color/60"
                        />
                      </SelectTrigger>
                      <SelectContent className="text-text-color text-base">
                        {proficiencyLevels.map((level) => (
                          <SelectItem key={level} value={level} className="text-base">
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Written Proficiency */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-text-color">Written *</Label>
                    <Select
                      value={language.written}
                      onValueChange={(value) => updateLanguage(language.id, "written", value)}
                    >
                      <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                        <SelectValue
                          placeholder="Select proficiency"
                          className="text-text-color placeholder:text-text-color/60"
                        />
                      </SelectTrigger>
                      <SelectContent className="text-text-color text-base">
                        {proficiencyLevels.map((level) => (
                          <SelectItem key={level} value={level} className="text-base">
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Language Button */}
          <div className="flex justify-start">
            <Button
              variant="outline"
              onClick={addLanguage}
              className="rounded-sm border-gray-300 hover:text-primary hover:border-primary bg-transparent text-base text-text-color"
            >
              Add more
            </Button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button className="rounded-sm bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2 transition-colors duration-300 text-base min-w-[180px]">
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

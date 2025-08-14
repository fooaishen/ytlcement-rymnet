import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Eye, Download, Trash2 } from "lucide-react"

export default function ResumeTab() {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color">
          {/* <FileText className="h-7 w-7 text-primary" /> */}
          CV/Resume
        </CardTitle>
        <CardDescription className="text-base">Upload and manage your resume documents</CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors duration-300">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-text-color mb-2">Upload Your Resume</h3>
          <p className="text-gray-600 mb-6">Drag and drop your resume here, or click to browse</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
            <Upload className="h-5 w-5 mr-1 mr-2" />
            Choose File
          </Button>
          <p className="text-base text-gray-500 mt-3">Supported formats: PDF, DOC, DOCX (max 10MB)</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-text-color">Uploaded Documents</h4>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-text-color">John_Doe_Resume.pdf</p>
                  <p className="text-base text-gray-600">Uploaded on Jan 15, 2024 • 2.3 MB</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-gray-300 hover:border-primary bg-transparent">
                  <Eye className="h-5 w-5 mr-1" />
                  Preview
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 hover:border-primary bg-transparent">
                  <Download className="h-5 w-5 mr-1" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700 border-red-300 hover:border-red-400 bg-transparent"
                >
                  <Trash2 className="h-5 w-5 mr-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-text-color mb-3 flex items-center gap-2 text-xl">
            <FileText className="h-5 w-5 mr-1 text-primary" />
            Resume Tips:
          </h4>
          <ul className="text-base text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Keep your resume to 1-2 pages maximum
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Use a clean, professional format
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Include relevant work experience and skills
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Proofread for spelling and grammar errors
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Save as PDF to preserve formatting
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

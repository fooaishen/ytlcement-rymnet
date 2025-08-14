export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export const validateImageFile = (file: File): string | null => {
  if (!file.type.startsWith("image/")) {
    return "Please select an image file (JPG, PNG, etc.)"
  }
  if (file.size > 5 * 1024 * 1024) {
    return "File size must be less than 5MB"
  }
  return null
}

export const validateDocumentFile = (file: File): string | null => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
  ]

  if (!allowedTypes.includes(file.type)) {
    return "File type not supported. Please use PDF, DOC, DOCX, JPG, PNG, or GIF"
  }

  if (file.size > 10 * 1024 * 1024) {
    return "File size must be less than 10MB"
  }

  return null
}

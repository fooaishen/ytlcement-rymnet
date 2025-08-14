export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Mock user database in localStorage
const USERS_KEY = "ytl_users"
const CURRENT_USER_KEY = "ytl_current_user"

export const authService = {
  // Initialize default account
  init(): void {
    this.createDefaultAccount()
  },

  // Create default account if it doesn't exist
  createDefaultAccount(): void {
    const users = this.getUsers()
    const defaultEmail = "user@ytlcement.com.my"

    // Check if default account already exists
    if (!users.find((user) => user.email === defaultEmail)) {
      const defaultUser: User = {
        id: "default-admin",
        email: defaultEmail,
        name: "Admin User",
        createdAt: new Date().toISOString(),
      }

      users.push(defaultUser)
      this.saveUsers(users)

      // Set default password
      const passwords = this.getPasswords()
      passwords[defaultUser.id] = "Ytl@12345"
      this.savePasswords(passwords)

      console.log("Default account created:")
      console.log("Email: user@ytlcement.com.my")
      console.log("Password: Ytl@12345")
    }
  },

  // Get all users from localStorage
  getUsers(): User[] {
    if (typeof window === "undefined") return []
    const users = localStorage.getItem(USERS_KEY)
    return users ? JSON.parse(users) : []
  },

  // Save users to localStorage
  saveUsers(users: User[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
  },

  // Register new user
  register(email: string, password: string, name: string): { success: boolean; message: string; user?: User } {
    const users = this.getUsers()

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      return { success: false, message: "User already exists with this email" }
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString(),
    }

    // Save password separately (in real app, this would be hashed)
    const passwords = this.getPasswords()
    passwords[newUser.id] = password

    users.push(newUser)
    this.saveUsers(users)
    this.savePasswords(passwords)

    return { success: true, message: "Registration successful", user: newUser }
  },

  // Login user
  login(email: string, password: string): { success: boolean; message: string; user?: User } {
    const users = this.getUsers()
    const user = users.find((u) => u.email === email)

    if (!user) {
      return { success: false, message: "User not found" }
    }

    const passwords = this.getPasswords()
    if (passwords[user.id] !== password) {
      return { success: false, message: "Invalid password" }
    }

    // Set current user
    this.setCurrentUser(user)
    return { success: true, message: "Login successful", user }
  },

  // Get current user
  getCurrentUser(): User | null {
    if (typeof window === "undefined") return null
    const user = localStorage.getItem(CURRENT_USER_KEY)
    return user ? JSON.parse(user) : null
  },

  // Set current user
  setCurrentUser(user: User): void {
    if (typeof window === "undefined") return
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
  },

  // Logout
  logout(): void {
    if (typeof window === "undefined") return
    localStorage.removeItem(CURRENT_USER_KEY)
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  },

  // Password management (simplified for demo)
  getPasswords(): Record<string, string> {
    if (typeof window === "undefined") return {}
    const passwords = localStorage.getItem("ytl_passwords")
    return passwords ? JSON.parse(passwords) : {}
  },

  savePasswords(passwords: Record<string, string>): void {
    if (typeof window === "undefined") return
    localStorage.setItem("ytl_passwords", JSON.stringify(passwords))
  },

  // Change password
  changePassword(oldPassword: string, newPassword: string): { success: boolean; message: string } {
    const user = this.getCurrentUser()
    if (!user) {
      return { success: false, message: "User not authenticated" }
    }

    const passwords = this.getPasswords()
    if (passwords[user.id] !== oldPassword) {
      return { success: false, message: "Current password is incorrect" }
    }

    passwords[user.id] = newPassword
    this.savePasswords(passwords)
    return { success: true, message: "Password changed successfully" }
  },

  // Reset password (for forgot password)
  resetPassword(email: string, newPassword: string): { success: boolean; message: string } {
    const users = this.getUsers()
    const user = users.find((u) => u.email === email)

    if (!user) {
      return { success: false, message: "User not found" }
    }

    const passwords = this.getPasswords()
    passwords[user.id] = newPassword
    this.savePasswords(passwords)

    return { success: true, message: "Password reset successful" }
  },
}

// Initialize default account when the module loads
if (typeof window !== "undefined") {
  authService.init()
}

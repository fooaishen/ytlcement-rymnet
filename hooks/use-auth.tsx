"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { authService, type AuthState } from "@/lib/auth"

const AuthContext = createContext<{
  authState: AuthState
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  changePassword: (oldPassword: string, newPassword: string) => Promise<{ success: boolean; message: string }>
  resetPassword: (email: string, newPassword: string) => Promise<{ success: boolean; message: string }>
} | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  })

  useEffect(() => {
    // Initialize auth service and create default account
    authService.init()

    // Check if user is logged in on mount
    const user = authService.getCurrentUser()
    if (user) {
      setAuthState({
        user,
        isAuthenticated: true,
      })
    }
  }, [])

  const login = async (email: string, password: string) => {
    const result = authService.login(email, password)
    if (result.success && result.user) {
      setAuthState({
        user: result.user,
        isAuthenticated: true,
      })
    }
    return result
  }

  const register = async (email: string, password: string, name: string) => {
    const result = authService.register(email, password, name)
    if (result.success && result.user) {
      setAuthState({
        user: result.user,
        isAuthenticated: true,
      })
    }
    return result
  }

  const logout = () => {
    authService.logout()
    setAuthState({
      user: null,
      isAuthenticated: false,
    })
  }

  const changePassword = async (oldPassword: string, newPassword: string) => {
    return authService.changePassword(oldPassword, newPassword)
  }

  const resetPassword = async (email: string, newPassword: string) => {
    return authService.resetPassword(email, newPassword)
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        logout,
        changePassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

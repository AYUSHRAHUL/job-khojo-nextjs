import { signOut } from "next-auth/react"

/**
 * Utility function to handle user logout
 * @param {Object} options - Logout options
 * @param {string} options.callbackUrl - URL to redirect to after logout (default: "/")
 * @param {boolean} options.redirect - Whether to redirect after logout (default: true)
 */
export const logout = async (options = {}) => {
  const { callbackUrl = "/", redirect = true } = options
  
  try {
    await signOut({ 
      callbackUrl,
      redirect 
    })
  } catch (error) {
    console.error("Logout error:", error)
    throw error
  }
}

/**
 * Server-side logout utility (for API routes)
 * @param {Object} response - NextResponse object
 * @param {string} message - Success message
 */
export const serverLogout = (response, message = "Logged out successfully") => {
  // Clear any cookies or session data
  response.cookies.delete('next-auth.session-token')
  response.cookies.delete('__Secure-next-auth.session-token')
  
  return response.json({ 
    message,
    success: true 
  })
}

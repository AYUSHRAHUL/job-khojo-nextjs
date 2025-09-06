"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut({ 
        callbackUrl: "/",
        redirect: true 
      })
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="ml-4 px-4 py-2 rounded-full bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white transition duration-300"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}

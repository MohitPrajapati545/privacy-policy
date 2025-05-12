"use client"

import { useState } from "react"
import PrivacyPolicy from "@/components/privacy-policy"
import DeleteAccount from "@/components/delete-account"
import { Button } from "@/components/ui/button"
import masa from "../public/masa.png"
import Image from "next/image"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"privacy" | "delete">("privacy")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[90%] mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src={masa}
            alt="MKSA Logo"
            width={60}
            height={40}
          />
          <div className="flex gap-2">
            <Button
              variant={currentScreen === "privacy" ? "default" : "outline"}
              onClick={() => setCurrentScreen("privacy")}
              className={currentScreen === "privacy" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              Privacy Policy
            </Button>
            <Button
              variant={currentScreen === "delete" ? "default" : "outline"}
              onClick={() => setCurrentScreen("delete")}
              className={currentScreen === "delete" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {currentScreen === "privacy" ? <PrivacyPolicy /> : <DeleteAccount />}
      </main>
    </div>
  )
}

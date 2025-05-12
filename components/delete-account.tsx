"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DeleteAccount() {
  return (
    <div className="max-w-[70%] mx-auto">
      <Card className="bg-white shadow-md">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-800">Delete Account</CardTitle>
            <Badge className="bg-green-500 hover:bg-green-500">Premium</Badge>
          </div>
          <CardDescription className="text-gray-500">
            Request permanent deletion of your account and data
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 text-sm text-gray-700">
          <section>
            <h2 className="font-semibold">User Account Deletion Policy</h2>
            <p>
              At MKSA, we respect your right to control your personal data. If you no longer wish to use our services and want your account deleted, you can request this by following the process outlined below.
            </p>
          </section>

          <section>
            <h3 className="font-semibold">How to Request Account Deletion</h3>
            <ol className="list-decimal list-inside pl-4 space-y-1">
              <li>Go to the <strong>Help</strong> section within the app.</li>
              <li>Fill out the form with the required details:
                <ul className="list-disc list-inside pl-4 mt-1">
                  <li>Registered email address</li>
                  <li>Reason for deletion (optional)</li>
                  <li>Any additional comments or concerns</li>
                </ul>
              </li>
              <li>Submit the form. Our support team will review your request.</li>
            </ol>
          </section>

          <section>
            <h3 className="font-semibold">Processing Time</h3>
            <p>
              Once your request is submitted, our team will verify your identity and process your account deletion request within <strong>7 business days</strong>. You will receive an email confirmation once the process is complete.
            </p>
          </section>

          <section>
            <h3 className="font-semibold">What Happens After Deletion</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>All your personal data, including reminders, activity logs, and routines, will be permanently deleted from our servers (if applicable).</li>
              <li>You will no longer receive notifications or emails from the app.</li>
              <li><strong>This action is irreversible.</strong> Once deleted, your account cannot be recovered.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">Need Help?</h3>
            <p>
              If you encounter any issues or need further assistance, please contact our support team at:
            </p>
            <p className="text-blue-600 underline">lalitaworks2020@gmail.com</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

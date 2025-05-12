import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[70%] mx-auto">
      <Card className="bg-white shadow-md">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Privacy Policy
            </CardTitle>
            <Badge className="bg-green-500 hover:bg-green-500">Premium</Badge>
          </div>
          <CardDescription className="text-gray-500">
            Last updated: May 12, 2025
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-6 text-gray-700">
          <section>
           
            <p>
              MKSA ("we", "our", or "us") is committed to protecting the privacy
              of our users ("you" or "your"). This Privacy Policy explains how
              we collect, use, and protect your information when you use our
              mobile application ("App").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Activity and Time Data:</strong> Information you
                manually input related to your daily routine and reminders
                (e.g., task names, times, activity preferences).
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information
                about your mobile device including the device ID, operating
                system version, and other diagnostic data, to improve app
                functionality and user experience.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect data on how the app is
                used (e.g., features accessed, time spent) to help us improve
                the app.
              </li>
              <li>
                <em>
                  We do not collect any personal identifiers such as your name,
                  email address, or location unless explicitly requested for a
                  feature.
                </em>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and personalize the reminder and routine services.</li>
              <li>Improve the functionality and performance of our App.</li>
              <li>
                Send notification reminders based on your configured routines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Data Storage and Security
            </h2>
            <p>
              All user-entered data is stored securely on your device or
              securely in our backend (if applicable). We implement reasonable
              security measures to protect your information from unauthorized
              access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, rent, or share your personal data with third
              parties. Your data is only used for the purposes described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Permissions Used
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Notification Access:</strong> To send you reminders and
                alerts based on your routine.
              </li>
              <li>
                <strong>Background Activity Access:</strong> To ensure reminders
                are delivered even when the app is not actively open.
              </li>
            </ul>
            <p>
              We only request permissions that are essential for app
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Children's Privacy
            </h2>
            <p>
              Our App is not intended for children under the age of 13. We do
              not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Your Rights
            </h2>
            <p>
              You can delete your data at any time from within the app. If you
              have any questions about your data or wish to request deletion,
              contact us at the email below.
            </p>
            <p className="text-green-600 font-medium">
              Email: lalitaworks2020@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
              <br />
              <span className="text-green-600 font-medium">
                Email: lalitaworks2020@gmail.com
              </span>
              <br />
              <span className="text-green-600 font-medium">
                Developer/Company Name: Lalita Shrivishnu Patil
              </span>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

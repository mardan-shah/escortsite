import { MailOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmailVerificationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <MailOpenIcon className="h-12 w-12 text-primarypink" />
          </div>
          <h1 className="text-2xl font-semibold text-primarypink mb-2">
            Email Verification
          </h1>
          <p className="text-gray-600 text-center mb-4">
            We've sent a verification link to your email. Please click the
            button in the email to verify your account.
          </p>
          <p className="text-gray-600 text-center mb-6">
            If not automatically redirected after verification, click on the
            continue button.
          </p>
          <Button className="w-full py-2 px-4 bg-primarypink hover:bg-primarypink/90 text-white rounded-lg font-medium">
            Continue
          </Button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Didn't receive the email?
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
            <li>Check your spam or junk folder.</li>
            <li>Make sure you entered the correct email address.</li>
            <li>
              <Link
                href="/resend-verification"
                className="text-primarypink hover:underline font-medium"
              >
                Resend Verification Email
              </Link>
            </li>
          </ul>
          <Link
            href="/signin"
            className="text-sm text-primarypink hover:underline font-medium"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up | The Soul System",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <div className="container py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
      <SignupForm />
    </div>
  );
}

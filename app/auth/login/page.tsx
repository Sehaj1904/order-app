import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | The Soul System",
  description: "Log in to your account",
};

export default function LoginPage() {
  return (
    <div className="container py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Authentication Error | The Soul System",
  description: "An error occurred during authentication",
};

export default function AuthErrorPage() {
  return (
    <div className="container py-8 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Authentication Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            An error occurred during the authentication process. Please try
            again.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/auth/login">
            <Button>Return to Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

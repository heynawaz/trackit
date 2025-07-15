"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff, LoaderCircle, Router } from "lucide-react";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  // const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
  //   try {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const result = await signupUserAction(formData);
  //     if (result?.error) {
  //       toast.error("Something went wrong!", { description: result.error.toString() });
  //       console.log("Signup failed:", result.error);
  //       return;
  //     }
  //     if (result?.success) {
  //       console.log("Signup successful:", result.message);
  //       toast.success("Account created successfully!");
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong!", { description: "An unexpected error occurred during signup." });
  //     console.log("An unexpected error occurred during signup:", error);
  //   }
  // };

  return (
    <form
      // action={signupUserAction}
      autoComplete="off"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create new account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details to create a new account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="flex w-full justify-between gap-2">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Uncle"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Bob"
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="unclebob@email.com"
            required
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="pr-10"
            />
            <Button
              variant={"link"}
              onClick={togglePasswordVisibility}
              className="text-muted-foreground absolute top-1/2 right-0 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </Button>
          </div>
        </div>
        <Button type="submit" className="mt-2 w-full" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center gap-0">
              <LoaderCircle className="mr-2 size-4 animate-spin" />
              Creating...
            </div>
          ) : (
            "Create"
          )}
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/" className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </form>
  );
}

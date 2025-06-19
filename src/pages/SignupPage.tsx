import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PasswordStrengthIndicator from '@/components/PasswordStrengthIndicator';
import SocialAuthButton from '@/components/SocialAuthButton';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Mail, Lock, Eye, EyeOff, TriangleAlert } from 'lucide-react';

const formSchema = z.object({
  name: z.string().optional(), // As per page_type_info: name (optional)
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions and privacy policy.",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Show error on confirmPassword field
});

type SignupFormValues = z.infer<typeof formSchema>;

const SignupPage: React.FC = () => {
  console.log('SignupPage loaded');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  });

  const passwordValue = form.watch("password");

  const onSubmit = async (values: SignupFormValues) => {
    console.log('Signup form submitted:', values);
    setFormError(null); // Clear previous errors
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Simulate a generic error for demonstration
    // if (values.email.includes("error")) {
    //   setFormError("An unexpected error occurred. Please try again.");
    //   return;
    // }

    toast.success("Registration successful!", {
      description: "Please check your email for verification (simulated).",
    });
    // As per user journey, redirect to login or a "check email" page.
    // For now, redirecting to login page.
    navigate('/login'); // Path from App.tsx
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`Attempting sign up with ${provider}`);
    toast.info(`Sign up with ${provider} initiated (simulated).`);
    // Actual OAuth flow would start here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>Enter your details below to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {formError && (
              <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Full Name (Optional)</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                       <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input id="email" type="email" placeholder="name@example.com" {...field} className="pl-10" />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="pl-10 pr-10"
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <FormMessage />
                      {field.value && <PasswordStrengthIndicator password={field.value} />}
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="pl-10 pr-10"
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          id="termsAccepted"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor="termsAccepted" className="text-sm font-normal">
                          I agree to the{' '}
                          <Link to="/terms-and-conditions" className="font-medium text-primary hover:underline"> {/* Path from App.tsx */}
                            Terms and Conditions
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy-policy" className="font-medium text-primary hover:underline"> {/* Path from App.tsx */}
                            Privacy Policy
                          </Link>
                          .
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <SocialAuthButton provider="google" onClick={() => handleSocialAuth('Google')} buttonTextPrefix="Sign up with" />
              <SocialAuthButton provider="github" onClick={() => handleSocialAuth('GitHub')} buttonTextPrefix="Sign up with" />
            </div>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:underline ml-1"> {/* Path from App.tsx */}
              Log in
            </Link>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
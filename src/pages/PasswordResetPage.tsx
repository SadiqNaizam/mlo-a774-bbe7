import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Header from '@/components/layout/Header'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Used implicitly by FormLabel
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from "sonner"; // Using sonner for notifications

const passwordResetFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type PasswordResetFormValues = z.infer<typeof passwordResetFormSchema>;

const PasswordResetPage: React.FC = () => {
  console.log('PasswordResetPage loaded');
  const navigate = useNavigate();
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: PasswordResetFormValues) => {
    setFormMessage(null); // Clear previous messages
    console.log('Password reset requested for:', data.email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    const isSuccess = true; // Change to false to test error

    if (isSuccess) {
      toast.success("Password reset link sent!", {
        description: `If an account exists for ${data.email}, you will receive an email with instructions to reset your password.`,
        duration: 5000,
      });
      form.reset();
      // Optionally navigate away or disable form
      // navigate('/login'); // Or to a confirmation page
    } else {
      // Simulate error
      setFormMessage({ type: 'error', message: 'Failed to send reset link. Please try again.' });
      toast.error("Failed to send reset link", {
        description: "An unexpected error occurred. Please try again later.",
        duration: 5000,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-primary mb-2" />
            <CardTitle className="text-2xl font-bold tracking-tight">Reset Your Password</CardTitle>
            <CardDescription>
              Enter your email address below and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {formMessage && (
                  <Alert variant={formMessage.type === 'error' ? 'destructive' : 'default'}>
                    {formMessage.type === 'error' ? 
                      <AlertCircle className="h-4 w-4" /> : 
                      <CheckCircle2 className="h-4 w-4" />
                    }
                    <AlertTitle>{formMessage.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
                    <AlertDescription>{formMessage.message}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-10"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center text-sm space-y-2">
            <p>
              Remembered your password?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Login here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PasswordResetPage;
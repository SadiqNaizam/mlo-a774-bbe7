import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Facebook, Github, Apple as AppleIcon, LogIn } from 'lucide-react';

type SupportedProviders = 'google' | 'facebook' | 'github' | 'apple';

interface SocialAuthButtonProps {
  /** The social media provider key. */
  provider: SupportedProviders | string; // Allow string for fallback, but prefer known providers
  /** Function to call when the button is clicked. */
  onClick: () => void;
  /** Optional additional CSS classes for styling. */
  className?: string;
  /** Text prefix for the button, e.g., "Sign up with", "Continue with". */
  buttonTextPrefix?: string;
}

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  provider,
  onClick,
  className = '',
  buttonTextPrefix = "Sign up with",
}) => {
  console.log(`SocialAuthButton loaded for provider: ${provider}`);

  const providerDetailsMap: Record<SupportedProviders, { icon: React.ReactNode; name: string }> = {
    google: { icon: <Chrome className="mr-2 h-5 w-5" aria-hidden="true" />, name: 'Google' },
    facebook: { icon: <Facebook className="mr-2 h-5 w-5" aria-hidden="true" />, name: 'Facebook' },
    github: { icon: <Github className="mr-2 h-5 w-5" aria-hidden="true" />, name: 'GitHub' },
    apple: { icon: <AppleIcon className="mr-2 h-5 w-5" aria-hidden="true" />, name: 'Apple' },
  };

  let PSpecificIcon: React.ReactNode;
  let PSpecificName: string;

  if (provider in providerDetailsMap) {
    const details = providerDetailsMap[provider as SupportedProviders];
    PSpecificIcon = details.icon;
    PSpecificName = details.name;
  } else {
    // Fallback for unlisted providers
    PSpecificIcon = <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />;
    PSpecificName = provider.charAt(0).toUpperCase() + provider.slice(1);
  }

  return (
    <Button
      variant="outline"
      className={`w-full flex items-center justify-center py-2.5 ${className}`}
      onClick={onClick}
      aria-label={`${buttonTextPrefix} ${PSpecificName}`}
    >
      {PSpecificIcon}
      <span className="text-sm font-medium">{buttonTextPrefix} {PSpecificName}</span>
    </Button>
  );
};

export default SocialAuthButton;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t bg-muted/40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 text-sm text-muted-foreground">
        <p>&copy; {currentYear} MyApp. All rights reserved.</p>
        <nav className="flex gap-4 md:gap-6">
          <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">
            Terms and Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
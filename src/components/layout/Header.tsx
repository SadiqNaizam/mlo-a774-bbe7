import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="py-4 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>MyApp</span>
        </Link>
        <nav>
          {isLoginPage ? (
            <Button variant="outline" asChild>
              <Link to="/">Sign Up</Link>
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
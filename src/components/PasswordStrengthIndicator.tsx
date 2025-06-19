import React from 'react';

interface PasswordStrengthIndicatorProps {
  password?: string;
}

interface StrengthDetails {
  score: number; // 0 (none) to 4 (very strong)
  label: string;
  color: string; // Tailwind background color class
  textColor: string; // Tailwind text color class
}

const evaluatePasswordStrength = (password: string): StrengthDetails => {
  if (!password || password.length === 0) {
    return { score: 0, label: "", color: "bg-gray-200", textColor: "text-gray-500" };
  }

  let strength = 0;
  const len = password.length;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^A-Za-z0-9]/.test(password); // Matches anything not a letter or number

  let typesCount = 0;
  if (hasLowerCase) typesCount++;
  if (hasUpperCase) typesCount++;
  if (hasNumbers) typesCount++;
  if (hasSymbols) typesCount++;

  if (len < 8) {
    strength = 1; // Weak - too short
  } else if (len < 10) { // 8-9 characters
    if (typesCount <= 1) strength = 1; // Weak
    else if (typesCount === 2) strength = 2; // Medium
    else strength = 2; // Max Medium for this length (needs more types for strong)
  } else if (len < 12) { // 10-11 characters
    if (typesCount <= 1) strength = 1; // Weak
    else if (typesCount === 2) strength = 2; // Medium
    else if (typesCount >= 3) strength = 3; // Strong
  } else { // 12+ characters
    if (typesCount <= 1) strength = 1; // Weak (e.g. "aaaaaaaaaaaa")
    else if (typesCount === 2) strength = 2; // Medium
    else if (typesCount === 3) strength = 3; // Strong
    else if (typesCount === 4) strength = 4; // Very Strong
  }
  
  // Override: if length is extremely short, it's always weak.
  if (len > 0 && len < 6) strength = 1;


  switch (strength) {
    case 1: return { score: 1, label: "Weak", color: "bg-red-500", textColor: "text-red-500" };
    case 2: return { score: 2, label: "Medium", color: "bg-yellow-500", textColor: "text-yellow-500" };
    case 3: return { score: 3, label: "Strong", color: "bg-sky-500", textColor: "text-sky-500" };
    case 4: return { score: 4, label: "Very Strong", color: "bg-green-500", textColor: "text-green-500" };
    default: return { score: 0, label: "", color: "bg-gray-200", textColor: "text-gray-500" }; // Should not happen if len > 0
  }
};

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = "" }) => {
  console.log('PasswordStrengthIndicator loaded');
  const strengthDetails = evaluatePasswordStrength(password);

  return (
    <div className="w-full">
      <div 
        className="flex space-x-1 h-2" 
        role="progressbar" 
        aria-valuenow={strengthDetails.score} 
        aria-valuemin={0} 
        aria-valuemax={4} 
        aria-label={`Password strength: ${strengthDetails.label || 'Not evaluated'}`}
      >
        {[1, 2, 3, 4].map((segmentValue) => (
          <div
            key={segmentValue}
            className={`flex-1 h-full rounded-sm transition-colors duration-300 ease-in-out ${
              strengthDetails.score >= segmentValue ? strengthDetails.color : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
      {strengthDetails.label && (
        <p className={`text-xs mt-1 text-right ${strengthDetails.textColor}`}>
          {strengthDetails.label}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;
import { useState } from 'react';

function BackgroundToggle({ children }) {
  const [isGradient, setIsGradient] = useState(false);

  // Define the two background styles
  const defaultBackground = 'bg-gray-900'; // Adjust to match your current background (e.g., a solid color or another gradient)
  const gradientBackground = 'bg-gradient-to-br from-[#1E1E78] via-[#2B2659] via-[#3A2C6A] to-[#6B5B9A]';

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isGradient ? gradientBackground : defaultBackground}`}
    >
      {/* Button to toggle background */}
      <button
        onClick={() => setIsGradient(!isGradient)}
        className="fixed top-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform duration-200 hover:scale-105 z-10"
      >
        {isGradient ? 'Default Background' : 'Gradient Background'}
      </button>
      {/* Render the rest of the app (e.g., dashboard) */}
      {children}
    </div>
  );
}

export default BackgroundToggle;
import { useState } from 'react';

export default function DarkModeToggle() {
  // This is just a placeholder state - you'll implement the actual dark mode logic later
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex items-center">
      {/* Slider switch with icons on the circle */}
      <label className="inline-flex relative items-center cursor-pointer">
        <input 
          type="checkbox"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle dark mode"
        />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-700">
        </div>
        
        {/* Circle with icon that moves */}
        <div className="absolute top-[4px] left-[4px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all flex items-center justify-center peer-checked:translate-x-7 peer-checked:border-white">
          {!isDarkMode ? (
            // Sun icon for light mode - on the circle
            <svg 
              className="h-3 w-3 text-yellow-500" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                clipRule="evenodd" 
              />
            </svg>
          ) : (
            // Moon icon for dark mode - on the circle
            <svg 
              className="h-3 w-3 text-gray-200" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </div>
      </label>
    </div>
  );
} 
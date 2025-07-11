import React from "react";

export const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 my-4">Oops! That page doesn’t exist.</p>
      <a href="/" className="text-blue-600 hover:underline">
        ← Go back home
      </a>
    </div>
  );
};

import React from "react";

type CenteredPageProps = {
  children: React.ReactNode;
};

export const CenteredPage: React.FC<CenteredPageProps> = ({ children }) => {
  return (
    <div className={`flex-1 flex h-full items-center justify-center px-6 text-center`}>
      {children}
    </div>
  );
};

// FIX CENTERING!!!

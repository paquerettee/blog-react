import React from "react";

type CenteredPageProps = {
  children: React.ReactNode;
};

export const CenteredPage: React.FC<CenteredPageProps> = ({ children }) => {
  return (
    <div className={`flex flex-grow justify-center items-center px-6 text-center`}>{children}</div>
  );
};

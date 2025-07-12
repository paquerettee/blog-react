import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // <div className="min-h-screen flex flex-col">
    <div className="h-screen flex flex-col">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold">My Blog</h1>
      </header>

      <main className="flex-1 flex-grow container mx-auto p-4 overflow-hidden">{children}</main>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 p-4">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

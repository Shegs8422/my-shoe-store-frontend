import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 lg:pt-24">
        {" "}
        {/* Add padding top to match header height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;

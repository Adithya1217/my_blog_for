"use client";

import { navItems } from "../data";
import { FloatingNav } from "./ui/FloatingNavbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <FloatingNav navItems={navItems} />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}


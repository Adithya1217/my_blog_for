"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiUser, HiDocumentText, HiCollection } from 'react-icons/hi';
import { cn } from "../../lib/utils";
import ThemeToggle from "../ThemeToggle";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <HiHome className="w-4 h-4" />;
    case 'user':
      return <HiUser className="w-4 h-4" />;
    case 'document':
      return <HiDocumentText className="w-4 h-4" />;
    case 'collection':
      return <HiCollection className="w-4 h-4" />;
    default:
      return null;
  }
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    iconName: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  // Always keep navbar visible
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-0 inset-x-0 mx-auto px-10 py-4 rounded-b-lg border-b border-gray-200 dark:border-gray-700 shadow-md items-center justify-between space-x-4 bg-white dark:bg-gray-900",
          className
        )}
      >
        <div className="flex items-center space-x-4">
          {(navItems ?? []).map((navItem: any, idx: number) => {
            const isActive = pathname === navItem.link ||
              (navItem.link !== '/' && pathname.startsWith(navItem.link));
            
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative items-center flex space-x-1 px-4 py-2 rounded-lg nav-link",
                  isActive
                    ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                <span className="block sm:hidden text-gray-600 dark:text-gray-400">
                  {getIcon(navItem.iconName)}
                </span>
                <span className="text-sm font-medium font-sans">{navItem.name}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

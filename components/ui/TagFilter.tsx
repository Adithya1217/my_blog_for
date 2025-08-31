"use client";

import { HiX } from 'react-icons/hi';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
  className?: string;
}

export const TagFilter = ({ 
  tags, 
  selectedTags, 
  onTagToggle, 
  onClearAll,
  className = "" 
}: TagFilterProps) => {
  if (tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Filter by tags:
      </span>
      
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isSelected
                ? 'bg-green-600 dark:bg-green-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        );
      })}
      
      {selectedTags.length > 0 && (
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <HiX className="h-4 w-4" />
          Clear all
        </button>
      )}
    </div>
  );
};

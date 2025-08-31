"use client";

import { useState, useMemo } from 'react';
import { getAllPosts, Post } from '../../lib/posts';
import { FloatingNav } from '../../components/ui/FloatingNavbar';
import { navItems } from '../../data';
import { SearchBar } from '../../components/ui/SearchBar';
import { TagFilter } from '../../components/ui/TagFilter';
import Link from 'next/link';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const allPosts = getAllPosts();
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [allPosts]);
  
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(selectedTag => post.tags.includes(selectedTag));
      
      return matchesSearch && matchesTags;
    });
  }, [allPosts, searchTerm, selectedTags]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <FloatingNav navItems={navItems} />
      
      <main className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Welcome to my{" "}
              <span className="text-green-600 dark:text-green-400">blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
              Random stuff but mostly about web development and programming.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search posts by title, description, or tags..."
              className="max-w-md mx-auto"
            />
            <TagFilter
              tags={allTags}
              selectedTags={selectedTags}
              onTagToggle={(tag) => {
                setSelectedTags(prev => 
                  prev.includes(tag) 
                    ? prev.filter(t => t !== tag)
                    : [...prev, tag]
                );
              }}
              onClearAll={() => setSelectedTags([])}
              className="justify-center"
            />
            
            {/* Results Count */}
            {(searchTerm || selectedTags.length > 0) && (
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
                  Showing {filteredPosts.length} of {allPosts.length} posts
                </p>
              </div>
            )}
          </div>
          
          <div className="grid gap-8">
            {filteredPosts.map((post: Post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-green-600/50 dark:hover:border-green-400/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer leading-tight font-sans">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-sans">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <time className="text-gray-600 dark:text-gray-400 text-sm font-medium font-sans">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <button className="mt-3 px-10 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg font-sans">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg font-sans">
                {searchTerm || selectedTags.length > 0 
                  ? "No posts found matching your search criteria. Try adjusting your filters."
                  : "No posts available at the moment."
                }
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

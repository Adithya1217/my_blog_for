"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { getAllPosts, Post } from "../lib/posts";
import { SearchBar } from "./ui/SearchBar";
import { TagFilter } from "./ui/TagFilter";

const FeaturedPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Get all posts and apply filters
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
  
  const featuredPosts = filteredPosts.slice(0, 3);
  
  return (
    <div className="py-20 bg-white dark:bg-gray-900" id="featured-posts">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Featured <span className="text-green-600 dark:text-green-400">Posts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Check out my latest insights and tutorials on modern web development
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post: Post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <time className="text-sm text-gray-500 dark:text-gray-400 font-medium font-sans">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight font-sans">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-sans">
                  {post.description}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200"
                >
                  Read More
                  <FaLocationArrow className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 dark:bg-green-500 hover:bg-blue-600 hover:dark:bg-blue-600 text-white rounded-lg font-medium dark:hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg font-sans"
          >
            View All Posts
            <FaLocationArrow className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;


export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "nextjs-14-getting-started",
    title: "Getting Started with Next.js 14",
    description: "Learn the basics of Next.js 14 and how to build modern web applications with the latest features and improvements.",
    date: "2024-01-15",
    tags: ["Next.js", "React", "Web Development"],
    content: `
# Getting Started with Next.js 14

Next.js 14 brings exciting new features that make building modern web applications easier and more efficient than ever before.

## Key Features

- **App Router**: The new file-system based router
- **Server Components**: Improved performance with React Server Components
- **Turbopack**: Faster bundling for development
- **Improved TypeScript Support**: Better type safety and developer experience

## Getting Started

1. Create a new Next.js project:
   \`\`\`bash
   npx create-next-app@latest my-app
   \`\`\`

2. Navigate to your project:
   \`\`\`bash
   cd my-app
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Why Next.js 14?

Next.js 14 is designed to be the most developer-friendly framework for building production-ready applications. With its focus on performance, developer experience, and modern web standards, it's the perfect choice for your next project.
    `
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for Better Development",
    description: "Explore TypeScript features that will make your development experience more robust and enjoyable.",
    date: "2024-01-10",
    tags: ["TypeScript", "JavaScript", "Development"],
    content: `
# Mastering TypeScript for Better Development

TypeScript has become an essential tool in modern web development, offering type safety and better developer experience.

## Benefits of TypeScript

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Code Quality**: Self-documenting code
- **Easier Maintenance**: Refactor with confidence

## Getting Started with TypeScript

1. Install TypeScript:
   \`\`\`bash
   npm install -g typescript
   \`\`\`

2. Initialize a TypeScript project:
   \`\`\`bash
   tsc --init
   \`\`\`

3. Start coding with types!
    `
  },
  {
    slug: "tailwind-css-tips",
    title: "Essential Tailwind CSS Tips and Tricks",
    description: "Discover powerful Tailwind CSS techniques that will speed up your styling workflow.",
    date: "2024-01-05",
    tags: ["CSS", "Tailwind", "Design"],
    content: `
# Essential Tailwind CSS Tips and Tricks

Tailwind CSS has revolutionized how we approach styling in modern web development.

## Pro Tips

- **Use @apply for complex components**: Extract common patterns
- **Leverage arbitrary values**: Custom spacing and colors when needed
- **Component extraction**: Create reusable component classes
- **Responsive design**: Mobile-first approach with breakpoint prefixes

## Best Practices

1. **Keep it simple**: Don't over-engineer your utility classes
2. **Use semantic naming**: Make your classes meaningful
3. **Leverage the config**: Customize your design system
4. **Performance**: Purge unused styles in production
    `
  }
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

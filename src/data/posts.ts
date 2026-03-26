export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  originalUrl?: string;
  originalPlatform?: string;
}

// Dynamically import all .ts files in the posts directory
const postModules = import.meta.glob('./posts/*.ts', { eager: true });

// Extract the 'post' export from each module and sort them by date (newest first)
export const posts: Post[] = Object.values(postModules)
  .map((module: any) => module.post as Post)
  .filter(Boolean)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


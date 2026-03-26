import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ShareButtons from '../components/ShareButtons';
import Comments from '../components/Comments';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="space-y-10">
      <Helmet>
        <title>{post.title} | Ravi Teja Gonnabathula</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </Link>

      <header className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {post.originalUrl && (
        <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-4 flex items-start sm:items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
          <ExternalLink className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            This article was originally published on{' '}
            <a 
              href={post.originalUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-zinc-900 dark:text-zinc-50 hover:underline inline-flex items-center gap-1"
            >
              {post.originalPlatform || 'another platform'}
            </a>.
          </p>
        </div>
      )}

      <MarkdownRenderer content={post.content} />

      <ShareButtons title={post.title} text={post.excerpt} url={currentUrl} />
      
      <Comments postId={post.slug} />
    </article>
  );
}

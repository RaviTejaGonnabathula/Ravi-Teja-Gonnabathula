import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Blog | Ravi Teja Gonnabathula</title>
        <meta name="description" content="Articles about AI, Machine Learning, and Software Engineering." />
      </Helmet>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Ravi Teja Gonnabathula's Blog</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts, learnings, and tutorials on building with AI.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.slug}`} className="block space-y-3">
              <div className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium text-sm pt-2">
                Read article &rarr;
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

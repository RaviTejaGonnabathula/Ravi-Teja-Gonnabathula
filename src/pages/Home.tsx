import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin } from 'lucide-react';
import { XIcon, MediumIcon, SubstackIcon } from '../components/Icons';

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Searching for Global Minimum | Ravi Teja Gonnabathula</title>
        <meta name="description" content="Personal blog and portfolio of Ravi Teja Gonnabathula, an AI Engineer." />
      </Helmet>

      <section className="pt-12">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Searching for Global Minimum
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400">
                Ravi Teja Gonnabathula
              </h2>
              <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
                <a href="https://www.linkedin.com/in/ravitejagonnabathula" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/RaviTejaGonnabathula" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://x.com/Raviteja_GSB" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  <XIcon className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@raviteja.gonnabathulla" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  <span className="sr-only">Medium</span>
                  <MediumIcon className="w-5 h-5" />
                </a>
                <a href="https://substack.com/@ravitejagonnabathula" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  <span className="sr-only">Substack</span>
                  <SubstackIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed pt-2">
              I'm an AI Engineer specializing in Large Language Models, Agentic Workflows, and scalable machine learning infrastructure. I write about my learnings and build open-source tools.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link to="/about" className="px-5 py-2.5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                More about me
              </Link>
              <Link to="/blog" className="px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                Read the blog
              </Link>
            </div>
          </div>
          
          <div className="shrink-0 flex justify-start md:justify-end">
            <img 
              src="/profile.jpg" 
              alt="Ravi Teja Gonnabathula" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-zinc-100 dark:border-zinc-800 shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Recent Writing</h2>
          <Link to="/blog" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            View all posts &rarr;
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {recentPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block space-y-3">
              <div className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

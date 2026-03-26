import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Projects | Ravi Teja Gonnabathula</title>
        <meta name="description" content="Open source projects and experiments." />
      </Helmet>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A selection of my open-source work and side projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(project => (
          <div key={project.id} className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-6 mt-auto">
              <a href={project.github} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-2 text-sm font-medium">
                <Github className="w-4 h-4" />
                Source
              </a>
              <a href={project.link} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-2 text-sm font-medium">
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

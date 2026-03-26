import { Github, Linkedin } from 'lucide-react';
import { XIcon, MediumIcon, SubstackIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Ravi Teja Gonnabathula. All rights reserved.
        </p>
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
    </footer>
  );
}

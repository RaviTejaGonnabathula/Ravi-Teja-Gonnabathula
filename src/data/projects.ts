export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AutoGPT Clone',
    description: 'An open-source autonomous AI agent capable of executing complex, multi-step tasks using a combination of LLMs and external tools.',
    tags: ['Python', 'LangChain', 'OpenAI API'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Semantic Search Engine',
    description: 'A high-performance semantic search engine built over Wikipedia data using vector embeddings and hybrid search techniques.',
    tags: ['TypeScript', 'Pinecone', 'Next.js'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Vision-Language Fine-tuning',
    description: 'A research project exploring parameter-efficient fine-tuning (PEFT) methods for vision-language models on medical imaging datasets.',
    tags: ['PyTorch', 'HuggingFace', 'LoRA'],
    link: '#',
    github: '#'
  }
];

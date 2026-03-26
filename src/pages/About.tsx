import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>About | Ravi Teja Gonnabathula</title>
        <meta name="description" content="About me and my background." />
      </Helmet>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h1>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          Hi, I'm Ravi Teja Gonnabathula, an AI Engineer passionate about bridging the gap between cutting-edge AI research and production-ready software.
        </p>
        
        <h2>Background</h2>
        <p>
          Over the past 5 years, I've worked on everything from fine-tuning computer vision models to building scalable RAG pipelines for enterprise search. My current focus is on agentic workflows and evaluating LLM systems in production.
        </p>

        <h2>What I do</h2>
        <ul>
          <li><strong>Large Language Models:</strong> Prompt engineering, fine-tuning (LoRA/QLoRA), and deployment.</li>
          <li><strong>Agentic Systems:</strong> Building multi-agent systems using LangChain, AutoGen, and custom frameworks.</li>
          <li><strong>Infrastructure:</strong> Vector databases (Pinecone, Weaviate), model serving (vLLM, TGI), and MLOps.</li>
        </ul>

        <h2>Get in touch</h2>
        <p>
          I'm always open to discussing new opportunities, open-source collaborations, or just chatting about the future of AI. Feel free to reach out on <a href="https://twitter.com">Twitter</a> or <a href="https://linkedin.com">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}

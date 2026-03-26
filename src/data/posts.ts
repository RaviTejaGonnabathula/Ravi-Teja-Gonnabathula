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

export const posts: Post[] = [
  {
    id: '4',
    slug: 'my-experience-with-openclaw',
    title: 'My Experience with OpenClaw',
    excerpt: 'I spent the last couple of weeks working hands-on with OpenClaw, running everything through Ollama. As an AI engineer tired of unpredictable cloud costs and rate limits, I wanted to push toward a fully local setup...',
    date: '2026-03-26',
    readTime: '5 min read',
    originalUrl: 'https://www.linkedin.com/pulse/my-experience-openclaw-ravi-teja-gonnabathula-lnqje',
    originalPlatform: 'LinkedIn',
    content: `
# My Experience with OpenClaw

I spent the last couple of weeks working hands-on with OpenClaw, running everything through Ollama. As an AI engineer tired of unpredictable cloud costs and rate limits, I wanted to push toward a fully local setup, but here's the honest recap of what actually happened, what I built, broke, and learned.

*(Note: LinkedIn blocks automated readers from fetching the full article. You can paste the rest of your article content here!)*
`
  },
  {
    id: '1',
    slug: 'building-agentic-workflows',
    title: 'Building Agentic Workflows with LLMs',
    excerpt: 'Discover how to transition from simple prompt engineering to robust, autonomous agent workflows using modern LLM frameworks.',
    date: '2026-03-20',
    readTime: '8 min read',
    originalUrl: 'https://substack.com',
    originalPlatform: 'Substack',
    content: `
# Building Agentic Workflows with LLMs

The transition from simple prompt-response interactions to autonomous agentic workflows represents the next major paradigm shift in AI engineering.

## What are Agentic Workflows?

Unlike standard zero-shot prompting, agentic workflows allow an LLM to iteratively reason, use tools, and correct its own mistakes. This is often implemented using patterns like ReAct (Reasoning and Acting).

### Key Components

1. **Planning**: Breaking down a complex task into manageable steps.
2. **Tool Use**: Interacting with external APIs, databases, or code execution environments.
3. **Memory**: Maintaining context over long horizons.

\`\`\`python
def execute_agent_step(task, context):
    # Example of a simple reasoning loop
    thought = llm.reason(task, context)
    action = select_tool(thought)
    result = action.execute()
    return evaluate_result(result)
\`\`\`

## Conclusion

By embracing agentic patterns, we can build systems that are significantly more reliable and capable of handling complex, multi-step objectives.
`
  },
  {
    id: '2',
    slug: 'optimizing-rag-pipelines',
    title: 'Optimizing RAG Pipelines for Production',
    excerpt: 'A deep dive into advanced Retrieval-Augmented Generation techniques, including semantic routing, hybrid search, and re-ranking.',
    date: '2026-02-15',
    readTime: '12 min read',
    content: `
# Optimizing RAG Pipelines for Production

Retrieval-Augmented Generation (RAG) is the standard for grounding LLMs in private data. However, naive RAG often fails in production.

## Advanced Techniques

### 1. Hybrid Search
Combining sparse (BM25) and dense (Vector) retrieval methods ensures you capture both exact keyword matches and semantic meaning.

### 2. Re-ranking
Using a cross-encoder to re-rank the top K results from your vector database significantly improves the relevance of the context provided to the LLM.

\`\`\`typescript
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

async function rerankResults(query: string, documents: string[]) {
  const response = await cohere.rerank({
    query,
    documents,
    topN: 3,
    model: "rerank-english-v2.0",
  });
  return response.results;
}
\`\`\`

### 3. Semantic Chunking
Instead of chunking by fixed character counts, chunking by semantic boundaries (sentences, paragraphs, or markdown sections) preserves context better.
`
  },
  {
    id: '3',
    slug: 'understanding-transformers',
    title: 'Understanding Transformer Architecture',
    excerpt: 'A visual guide to the attention mechanism and the core components that power modern Large Language Models.',
    date: '2026-01-10',
    readTime: '15 min read',
    content: `
# Understanding Transformer Architecture

![Transformer Architecture Visualized](https://picsum.photos/seed/transformer/1200/600)

The Transformer architecture, introduced in "Attention Is All You Need" (2017), is the foundation of modern AI.

## The Attention Mechanism

Self-attention allows the model to weigh the importance of different words in a sequence when processing a specific word.

### Query, Key, Value

Think of it like a database retrieval system:
- **Query**: What I'm looking for.
- **Key**: What I have.
- **Value**: The actual content.

\`\`\`python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(query, key, value):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
    p_attn = F.softmax(scores, dim=-1)
    return torch.matmul(p_attn, value)
\`\`\`

Understanding these fundamentals is crucial for any AI Engineer looking to fine-tune or deploy these models efficiently.
`
  }
];

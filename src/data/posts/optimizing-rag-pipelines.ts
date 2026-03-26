import { Post } from '../posts';

export const post: Post = {
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
};

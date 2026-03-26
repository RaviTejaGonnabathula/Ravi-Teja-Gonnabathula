import { Post } from '../posts';

export const post: Post = {
  id: '3',
  slug: 'understanding-transformers',
  title: 'Understanding Transformer Architecture',
  excerpt: 'A visual guide to the attention mechanism and the core components that power modern Large Language Models.',
  date: '2026-01-10',
  readTime: '15 min read',
  content: `
# Understanding Transformer Architecture

![Transformer Architecture Visualized](https://picsum.photos/seed/transformer/1200/600)

*(Note: To use your own image, place it in \`public/images/posts/understanding-transformers/\` and change the URL above to \`/images/posts/understanding-transformers/your-image.png\`)*

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
};

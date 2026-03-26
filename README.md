# Searching for Global Minimum

Welcome to the personal blog and portfolio of **Ravi Teja Gonnabathula**, an AI Engineer specializing in Large Language Models, Agentic Workflows, and scalable machine learning infrastructure.

## Features

- **Modern Stack:** Built with React 18, Vite, and Tailwind CSS.
- **Markdown Support:** Write your blog posts directly in Markdown.
- **Dark Mode:** Built-in dark and light mode toggle.
- **Responsive Design:** Looks great on mobile, tablet, and desktop.
- **Firebase Integration:** Real-time anonymous commenting system powered by Firestore.
- **GitHub Pages Ready:** Configured with `HashRouter` and a GitHub Actions workflow to deploy automatically to GitHub Pages.

## How to Add New Blog Posts

Adding a new post is simple. All posts are stored in `/src/data/posts.ts`.

1. Open `/src/data/posts.ts`.
2. Add a new object to the `posts` array at the top.
3. Use the following template:

\`\`\`typescript
  {
    id: 'unique-id-here', // e.g., '5'
    slug: 'my-new-article-url', // This becomes the URL: /#/blog/my-new-article-url
    title: 'The Title of My Article',
    excerpt: 'A short 1-2 sentence summary that shows up on the homepage.',
    date: '2026-04-01', // YYYY-MM-DD format
    readTime: '6 min read',
    originalUrl: 'https://substack.com/your-article-link', // Optional: Link to original post
    originalPlatform: 'Substack', // Optional: Name of original platform
    content: \`
# My Article Heading

Write your content here using standard Markdown!

- You can use bullet points
- **Bold text**
- And even code blocks:

\\\`\\\`\\\`python
print("Hello World")
\\\`\\\`\\\`
\`
  },
\`\`\`

## Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/RaviTejaGonnabathula/your-repo-name.git
   cd your-repo-name
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## Deployment to GitHub Pages

This repository is pre-configured to deploy to GitHub Pages using GitHub Actions.

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** -> **Source**, change the dropdown to **GitHub Actions**.
4. Any time you push to the \`main\` branch, the site will automatically build and deploy!

*(Note: If you are deploying to a subfolder like \`https://RaviTejaGonnabathula.github.io/my-blog/\`, you will need to update \`vite.config.ts\` to include \`base: '/my-blog/'\`)*

## License

MIT License

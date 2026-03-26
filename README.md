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

Adding a new post is simple. Each post lives in its own file inside `/src/data/posts/`.

1. Create a new `.ts` file in `/src/data/posts/` (e.g., `my-new-article.ts`).
2. Use the following template:

\`\`\`typescript
import { Post } from '../posts';

export const post: Post = {
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
};
\`\`\`

3. The app will automatically detect the new file and add it to the blog!

## How to Add Images to Posts

To keep things organized, do not dump all images into one folder. Instead, create a dedicated folder for each post:

1. Go to `/public/images/posts/`.
2. Create a new folder named after your post's slug (e.g., `/public/images/posts/my-new-article-url/`).
3. Place your images inside that folder.
4. Reference them in your Markdown content like this:

\`\`\`markdown
![My Image Description](/images/posts/my-new-article-url/my-image.png)
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

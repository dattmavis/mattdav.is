import { getPosts } from '@/services/vercel-postgres';

export default async function ProjectsPage() {
  const posts = await getPosts(true);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {posts.map(post => (
        <article key={post.id} className="space-y-2">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <div className="whitespace-pre-line">{post.content}</div>
        </article>
      ))}
    </div>
  );
}

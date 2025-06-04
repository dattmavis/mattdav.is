import PostForm from '@/post/PostForm';
import { getAllPosts } from '@/post/actions';

export default async function AdminPostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-6">
      <PostForm />
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-2">
            <div className="font-medium">{post.title}</div>
            <div className="text-sm whitespace-pre-line">{post.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

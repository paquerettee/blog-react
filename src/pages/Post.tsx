import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <p className="text-red-600">Post nie został znaleziony.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Wróć do listy
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <p className="text-lg leading-relaxed">{post.content}</p>
      <Link to="/" className="text-blue-600 hover:underline block mt-6">
        ← Wróć do listy
      </Link>
    </div>
  );
}

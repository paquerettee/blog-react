import { Link } from "react-router-dom";
import type { Post } from "../types";
import { getAllPosts } from "../utils/getPosts";

export default function Home() {
  const postList: Post[] = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {postList.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded shadow hover:bg-gray-50">
            <Link
              to={`/post/${post.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

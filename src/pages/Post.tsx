import { useParams, Link } from "react-router-dom";
// import { getPostById } from "../utils/getPosts";
import ReactMarkdown from "react-markdown";
import React from "react";
import { usePosts } from "../contexts/PostsContext";

export const Post: React.FC = () => {
  // export const Post: React.FC<{ id: number }> = ({ id }) => {
  const { id } = useParams();
  const posts = usePosts();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <p className="text-red-600">Post not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← View all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.author}</p>
      <div className="prose">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
      <Link to="/" className="text-blue-600 hover:underline block mt-6">
        ← View all posts
      </Link>
    </div>
  );
};

// export default Post;

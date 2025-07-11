import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li key={post.id} className="bg-white p-4 rounded shadow hover:bg-gray-50">
      <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
        {post.title}
      </Link>
      <p className="text-sm text-gray-500">{post.date}</p>
    </li>
  );
};

// export default PostCard;

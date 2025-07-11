import type { Post } from "../types";
import { PostCard } from "./PostCard";
import { getAllPosts } from "../utils/getPosts";
import React from "react";

const Home: React.FC = () => {
  const postList: Post[] = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {postList.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </ul>
    </div>
  );
};

export default Home;

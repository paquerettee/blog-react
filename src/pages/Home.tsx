import { PostCard } from "./PostCard";
import { usePosts } from "../contexts/PostsContext";

const Home: React.FC = () => {
  const posts = usePosts();
  console.log(posts);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </ul>
    </div>
  );
};

export default Home;

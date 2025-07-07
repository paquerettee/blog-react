import matter from "gray-matter";
import type { Post } from "../types";

// list all posts md files
const files = import.meta.glob("../posts/*.md", { as: "raw", eager: true });
// for backend:  const filenames = fs.readdirSync(postsDirectory);

let postList: Post[] | null = null;
let postMapById: Map<number, Post> | null = null;

function parsePosts(): Post[] {
  return Object.entries(files).map(([_, rawContent]: [string, string]) => {
    const { data, content } = matter(rawContent);
    return {
      id: data.id,
      title: data.title,
      date: data.date,
      author: data.author,
      content,
    };
  });
}

function ensureCache() {
  if (!postList) {
    postList = parsePosts();
    postMapById = new Map();
    for (const post of postList) {
      postMapById.set(post.id, post);
    }
  }
}

export function getAllPosts(): Post[] {
  ensureCache();
  return postList!;
}

export function getPostById(id: number): Post | undefined {
  ensureCache();
  return postMapById!.get(id);
}

import { useState, useEffect } from "react";
import type { PostType } from "../types";

export const useFetchPosts = (url: string) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return posts;
};

import { createContext, useContext } from "react";
import type { PostType } from "../types";

export const PostsContext = createContext<PostType[]>([]);

export const usePosts = () => useContext(PostsContext);

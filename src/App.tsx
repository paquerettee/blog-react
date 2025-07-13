import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { CenteredPage } from "./components/CenteredPage";
import Home from "./pages/Home";
import { Post } from "./pages/Post";
import { PageNotFound } from "./pages/PageNotFound";
import { useFetchPosts } from "./utils/fetchPosts";
import { PostsContext } from "./contexts/PostsContext";

const postsTestingApi = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const posts = useFetchPosts(postsTestingApi);

  return (
    <PostsContext.Provider value={posts}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/post/:id"
          element={
            <Layout>
              <Post />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <CenteredPage>
                <PageNotFound />
              </CenteredPage>
            </Layout>
          }
        />
      </Routes>
    </PostsContext.Provider>
  );
}

export default App;

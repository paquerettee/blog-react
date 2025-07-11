import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Post } from "./pages/Post";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
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
            <PageNotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

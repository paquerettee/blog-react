import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Post } from "./pages/Post";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

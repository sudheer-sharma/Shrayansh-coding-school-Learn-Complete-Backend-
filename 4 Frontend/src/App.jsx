import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/feed-post" element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

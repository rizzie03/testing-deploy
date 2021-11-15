import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Posts from "./pages/posts/Posts";
// import CommentsUser from "./pages/comments/CommentsUser";

import Headers from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

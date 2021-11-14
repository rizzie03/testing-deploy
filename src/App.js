import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Comments from "./pages/comments/Comments"
import CommentsUser from "./pages/comments/CommentsUser"

import Headers from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/comments/user" element={<CommentsUser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

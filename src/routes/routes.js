import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from "../components/header/Header";
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signin/SignIn";
import Account from "../pages/account/Account";
import Events from "../pages/events/Events";
import Posts from "../pages/posts/Posts";
import NotFound from "../pages/notfound/NotFound";
import Footer from "../components/footer/Footer";

function createRoutes() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default createRoutes;

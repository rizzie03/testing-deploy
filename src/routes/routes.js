import { Route, Routes } from "react-router-dom";
import Headers from "../components/header/Header";
import Home from "../pages/home/Home";
import Account from "../pages/account/Account";
import Events from "../pages/events/Events";
import Posts from "../pages/posts/Posts";
import NotFound from "../pages/notfound/NotFound";
import Footer from "../components/footer/Footer";
import Auth from "../pages/Auth/Auth";

function createRoutes() {
  return (
    <>
      <Headers />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route path='*' element={<NotFound />} />
        <Route exact path='/auth/:type' element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default createRoutes;

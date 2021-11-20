import "./App.css";
import createRoutes from "./routes/routes";

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

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import User from "./pages/user";
import JoinForm from "./pages/join";
import Gigs from "./pages/gigs";
import CreateGig from "./pages/createGig";
import CreateGig2 from "./pages/createGig2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Buyer from "./pages/buyer";
import Postjob from "./components/postjob";
import Mypost from "./components/mypost";
import UserDetail from "./components/userDetail";
import Dashboard from "./admin/dashboard";
import Profile from "./pages/profile";
import SearchJobs from "./pages/searchJob/searchJobs";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/join"
            element={
              <>
                <JoinForm />
              </>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <>
                <User />
              </>
            }
          />
          <Route
            exact
            path="/gigs"
            element={
              <>
                <Gigs />
              </>
            }
          />
          <Route
            exact
            path="/create-gig"
            element={
              <>
                <CreateGig />
              </>
            }
          />
          <Route
            exact
            path="/create-gig2"
            element={
              <>
                <CreateGig2 />
              </>
            }
          />
          <Route
            exact
            path="/user-buyer"
            element={
              <>
                <Buyer />
              </>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="/searchJobs"
            element={
              <>
                <SearchJobs />
              </>
            }
          />
          <Route
            exact
            path="/postRequest"
            element={
              <>
                <Postjob />
              </>
            }
          />
          <Route
            exact
            path="/mypost"
            element={
              <>
                <Mypost />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

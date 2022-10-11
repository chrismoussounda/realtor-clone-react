import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Offers from './pages/Offers.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import Button from "react-bootstrap/Button";
// import Add from "./components/Add";
// import Lists from "./components/Lists";
// import ArrayOfObjectsList from "./components/ArrayOfObjectsList";
// import Counter from "./components/counter";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import User from "./User";
import Orders from "./Orders";
import Profile from "./Profile";
import "./App.css";

function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/About" className="link">
            About
          </Link>
          <Link to="/Contact" className="link">
            Contact
          </Link>
          <Link to="/Login" className="link">
            Login
          </Link>
          <Link to="/User" className="link">
            User-Profile
          </Link>
        </li>
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      {/* Don't write code here write inside BrowserRouter */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          {/* Sub-Routing/ Nested-Routing / Child-Routing */}
          <Route path="/User" element={<User />}>
            <Route path="Orders" element={<Orders />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// http://localhost:3000/
// http://localhost:3000/About
// http://localhost:3000/Contact
// http://localhost:3000/Login
// http://localhost:3000/User

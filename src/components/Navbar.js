
import React,{useEffect,useState} from 'react'
import imggov from './gov.png'
import './Navbar.css'
import imglogo from './lopho.png'
import { NavLink } from 'react-router'
// import {getLoggedInUserEmail} from './Register';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth"; 
import { useNavigate } from "react-router";
// import { AuthContext } from "./AuthContext"; 
export default function Navbar() {
  // const { user } = useContext(AuthContext); 
      const navigate = useNavigate();
      const [user, setUser] = useState(null);
  const[email,setEmail]=useState(null);
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setEmail(null); // Clear the user state
      navigate("/login"); // Redirect to login page (optional)
      alert("Signed out successfully!");
    } catch (error) {
      console.error("Logout error: ", error);
      alert("Failed to log out. Please try again.");
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set the logged-in user
      } else {
        setUser(null); // No user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);
  return (
    <>
    
    <div className="header">
    <img className='gov' src={imggov} alt="govlogo" />
    <div className="heading">
    <h3>Government of Nepal</h3>
    <h3>Office of Prime Minister and Council of Minister</h3>
    <h3>National Statistics Office</h3>
    </div>
    
    <img className='census' src={imglogo} alt="census logo" />
    </div>
    


    <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/login">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/register">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/faq">Faq</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/tech">Tech</NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      {/* {user && (
            <div className="d-flex align-items-center">
              <p className="mb-0 me-3">Hello, {user.email}</p>
            </div>
          )} */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      {/* {email && <p>Logged in as: {email}</p>} */}
      <nav className="navbar">
      <div className="navbar-left">
        
      </div>
      <div className="navbar-right">
        {user ? (
          <div className="user-info">
            <span>{user.email}</span> {/* Display user's email */}
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => navigate("/register")} className="btn-login">
            Login
          </button>
        )}
      </div>
    </nav>

    </div>
  </div>
</nav>

    </>
  )
}

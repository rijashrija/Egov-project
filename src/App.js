// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Previous from './components/Previous';
import Footer from './components/Footer';
import Login from './components/Login';
import Faq from './components/Faq';
import Tech from './components/Tech';
import Age from './components/Age';
import Literacy from './components/Literacy';
import Economy from './components/Economy';
import Register from './components/Register';
// import Auth from './components/auth';
// import Dashboard from './components/Dashboard';
// import Adminpage from './components/Adminpage';
// import Mainform from './components/Mainform';
import { createBrowserRouter, RouterProvider } from 'react-router';
import CensusTableForm from './components/CensusTableForm';
import Thankyou from './components/Thankyou';
// import { PieChart } from './components/Previous';
// import { LineChart } from './components/Age';


function App() {
  
  const router = createBrowserRouter([
    {path:'/', element:<><Navbar/><Body/><Previous/><Footer/></>},
    {path:'/form', element:<><Navbar/><CensusTableForm/><Footer/></>},
    // {path:'/dashboard', element:<><Navbar/><Dashboard/><Footer/></>},
    // {path:'/admin', element:<><Navbar/><Adminpage/><Footer/></>},
    {path:"/login",element:<><Navbar/><Login/><Footer/></>},
    {path:"/faq",element:<><Navbar/><Faq/><Footer/></>},
    {path:"/tech",element:<><Navbar/><Tech/><Footer/></>},
    {path:"/age",element:<><Navbar/><Age/><Footer/></>},
    {path:"/literacy",element:<><Navbar/><Literacy/><Footer/></>},
    {path:"/economy",element:<><Navbar/><Economy/><Footer/></>},
    {path:"/register",element:<><Navbar/><Register/><Footer/></>},
    {path:"/thankyou",element:<><Navbar/><Thankyou/><Footer/></>},



   ])
  return (
    <>
    
    
      <RouterProvider router={router}/>
  
    </>
  );
}

export default App;
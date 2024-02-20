import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';

import FirstPage from './Pages/fristPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import DonationCards from './Pages/DonationCards';
import RequestBlood from './Pages/bloodReqForm';
import Login from './Pages/Login';
import LoginForm from './Pages/LoginForm';
import Profile from './Pages/userProfilePage';
import Registration from './Pages/RegistrationForm';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element:<>
              <Navbar/>
              <FirstPage/>
              <Footer/> 
            </>,
  },
  {
    path: '/donate',
    element:<>
              <Navbar/>
              <DonationCards/>
              <Footer/> 
            </>
  },
  {
    path: '/request',
    element:<>
              <Navbar/>
              <RequestBlood/>
              <Footer/> 
            </>
  },
  {
    path: '/login',
    element:<>
              <Navbar/>
              <Login/>
              <Footer/> 
            </>
  },
  {
    path: '/loginform',
    element:<>
              <Navbar/>
              <LoginForm/>
              <Footer/> 
            </>
  },
  {
    path: '/profile',
    element:<>
              <Navbar/>
              <Profile/>
              <Footer/> 
            </>
  },
  {
    path: '/registration',
    element:<>
              <Navbar/>
              <Registration/>
              <Footer/> 
            </>
  }


]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

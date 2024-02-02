import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import UserProfile from './Pages/userProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfile />
  </React.StrictMode>
);


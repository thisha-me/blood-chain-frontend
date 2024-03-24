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

import { ConnectWallet, Web3Button, useAddress, useContract, useContractRead, useDisconnect } from "@thirdweb-dev/react";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, rainbowWallet, smartWallet, trustWallet, walletConnect, localWallet } from "@thirdweb-dev/react";

const activeChain = "mumbai";

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

const smartWalletConfig = {
  factoryAddress: "0x675245C4301D4C69D563E9cF81e6F31D3a18D44C",
  gasless: true,
};

root.render(
  <ThirdwebProvider
      activeChain="mumbai"
      clientId="18f168f4642bb2154147980a5db8cafd"
      // locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet({
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
      ]}
    >
      <RouterProvider router={router}/>
    </ThirdwebProvider>
);

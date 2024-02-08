import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import music from './Pagers/music'

import Music from './Pagers/music/music'
import Features from './components/Features/Features';
import Photoset from './Pagers/photo/photoset';
import Portfolio from './components/portfolio/protfolio';


const router = createBrowserRouter ([

  {
    path: "/",
    element:<App/>,
    
  },
  {
    path: "/feature",
    element:<Features/>,
  },
  {
    path: "/port",
    element:<Portfolio/>,
  },
  {
    path:"mu",
    element:<Music/>,
  },
  {
    path:"ph",
    element:<Photoset/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <RouterProvider router={router}/>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

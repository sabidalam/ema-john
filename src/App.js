// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/layouts/Main';
import Shop from './Components/Shop/Shop';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import { dataLoader } from './Components/Loader/datafile';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import PrivateRouter from './Route/PrivateRouter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'order',
          loader: dataLoader,
          element: <Order></Order>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/shipping',
          element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

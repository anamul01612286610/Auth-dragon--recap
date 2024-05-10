// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import router from './routes/Routes.jsx'
// import { Root } from 'postcss'
// import Home from './pages/Home/Home.jsx'
// import Login from './pages/Login/Login.jsx'

// const router = createBrowserRouter([
  
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
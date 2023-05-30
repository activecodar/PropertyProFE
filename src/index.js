import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./components/Errors/Error";
import SignUp from "./components/Authentication/SignUp";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Profiles/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
    {
    path: "register/",
    element: <SignUp />,
  },
    {
    path: "login/",
    element: <Login />,
  },
    {
    path: "dashboard/",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";

const root = ReactDOM.createRoot(document.getElementById("root"));

//router object that specifies a route for each page in our web app
const router = createBrowserRouter([
  { 
    path: "/", //custom path name to the page
    element: <App/>, //the component we want to go to using the path name
  }, 

  /*Second page*/
  { 
    path: "aboutme", 
    element: <AboutMe/>, 
  }, 

  { 
    path: "contact", 
    element: <Contact/>, 
  }, 

  { 
    path: "portfolio", 
    element: <Portfolio/>, 
  }, 
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> {/*Router Component, router prop takes in createBrowserRouter function*/}
  </React.StrictMode>
);

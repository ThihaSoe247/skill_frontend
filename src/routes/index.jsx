import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
import MySkills from "../pages/MySkills";
import SkillForm from "../components/SkillFrom";
export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        // { path: "", element: <Home /> },
        { path: "/skills", element: <SkillForm /> },
        { path: "/skills/edit/:id", element: <SkillForm /> },
        { path: "my-skills", element: <MySkills /> },
        { path: "users/register", element: <Register /> },
        { path: "users/login", element: <Login /> },
        { path: "dashboard", element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

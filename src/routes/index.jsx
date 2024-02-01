//config routing file
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/friend",
    element: <FriendPage />,
  },
  {
    path: "/profile/:userId",
    element: <ProfilePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

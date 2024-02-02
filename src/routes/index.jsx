//config routing file
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
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

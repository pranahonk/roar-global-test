import { User, Login } from "../pages";
import { ProtectedRoute } from "./protectedRoute";

const MenuRoutes = [
  {
    path: "/user",
    exact: true,
    title: "User",
    component: () => (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    )
  },
  {
    path: "/",
    exact: true,
    title: "login",
    component: () => (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    )
  }
];

export { MenuRoutes };

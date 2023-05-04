import { createBrowserRouter } from "react-router-dom";
import ChefRecipes from "../Components/Pages/ChefRecipes/ChefRecipes";
import Main from "../layout/Main";
import ChefRecipesPage from "../Pages/ChefRecipesPage/ChefRecipesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{}],
  },
  {
    path: "/chef-recipes/:id",
    element: (
      <PrivetRoute>
        <ChefRecipesPage />
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://cookpad-server.vercel.app/api/recipes/${params.id}`),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;

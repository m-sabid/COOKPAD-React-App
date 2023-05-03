import { createBrowserRouter } from "react-router-dom";
import ChefRecipes from "../Components/Pages/ChefRecipes/ChefRecipes";
import Main from "../layout/Main";
import ChefRecipesPage from "../Pages/ChefRecipesPage/ChefRecipesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{}],
  },
  {
    path: "/chef-recipes/:id",
    element: <ChefRecipesPage />,
    loader: ({ params }) =>
      fetch(`https://cookpad-server.vercel.app/api/recipes/${params.id}`),
  },
]);

export default router;

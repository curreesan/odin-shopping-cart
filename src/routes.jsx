import ErrorPage from "./components/ErrorPage.jsx";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;

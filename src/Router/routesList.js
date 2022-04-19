import { Home, PageNotFound, Products } from "views";

const routesList = [
  {
    route: "/",
    component: <Home />,
  },
  {
    route: "/home",
    component: <Home />,
  },
  {
    route: "/products",
    component: <Products />,
  },
  {
    route: "*",
    component: <PageNotFound />,
  },
];

export default routesList;

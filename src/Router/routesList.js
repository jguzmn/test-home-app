import { Home, PageNotFound } from "views";

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
    component: <PageNotFound />,
  },
  {
    route: "*",
    component: <PageNotFound />,
  },
];

export default routesList;

import { Routes, Route } from "react-router-dom";

import routesList from "./routesList";

const Router = () => {
  return (
    <Routes>
      {routesList.map(({ route, component }, idx) => (
        <Route key={idx} path={route} element={component} />
      ))}
    </Routes>
  );
};

export default Router;

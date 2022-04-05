import { Routes, Route } from "react-router-dom";

import { Home, PageNotFound } from "views";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;

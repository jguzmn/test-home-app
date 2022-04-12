import { useState } from "react";

import mockedProducts from "mocks/en-us/featured-products.json";

const useProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(mockedProducts.results);

  return { products };
};

export default useProducts;

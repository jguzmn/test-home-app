import { useState } from "react";

import mockedCategories from "mocks/en-us/product-categories.json";

const useCategories = () => {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(mockedCategories.results);

  return { categories };
};

export default useCategories;

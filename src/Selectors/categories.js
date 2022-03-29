// Mock the category selector in the meantime
import mockedCategories from "mocks/en-us/product-categories.json";

export const getCategoryNameById = (id) => {
  const category = mockedCategories.results.find(
    (category) => id === category.id
  );
  return category ? category?.data?.name : "Unknown";
};

import useCategories from "utils/hooks/useCategories";

const Products = () => {
  const { categories } = useCategories();
  return <div>Products</div>;
};

export default Products;

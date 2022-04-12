import { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isNil } from "lodash";

import Title from "components/UI/Title";
import ProductsFilters from "components/ProductsFilters";
import useCategories from "utils/hooks/useCategories";
import useProducts from "utils/hooks/useProducts";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FiltersSection = styled.section`
  min-width: 20rem;
  padding: 0.5rem 1rem;
`;

const ProductsSection = styled.section`
  display: flex;
  width: 100%;
`;

const CATEGORY_ID = "category";

const Products = () => {
  const { categories } = useCategories();
  const { products } = useProducts();
  const [filtersList, setFiltersList] = useState([]);

  const [searchParams] = useSearchParams();

  const getInitialFilters = useCallback(() => {
    const categoriesIds = searchParams.get("category");

    return {
      [CATEGORY_ID]: !isNil(categoriesIds) ? categoriesIds.split(",") : [],
    };
  }, [searchParams]);

  const initialFilters = useMemo(getInitialFilters, [getInitialFilters]);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  useEffect(() => {
    const categoryFilter = {
      filterId: CATEGORY_ID,
      filterName: "Category",
      options: categories
        .map((category) => {
          return {
            id: category.id,
            name: category?.data?.name,
            initialValue: initialFilters[CATEGORY_ID].includes(category.id),
          };
        })
        .sort(),
    };
    setFiltersList((prevFilters) => {
      return [categoryFilter, ...prevFilters.slice(1)];
    });
  }, [categories, initialFilters]);

  const handleFiltersChange = useCallback(
    (filtersState) => {
      setActiveFilters((prevState) => ({ ...prevState, ...filtersState }));
    },
    [setActiveFilters]
  );

  return (
    <Fragment>
      <Title type="main">Our Products</Title>
      <ContentContainer>
        <FiltersSection>
          <ProductsFilters
            filters={filtersList}
            onFiltersSelectionChange={handleFiltersChange}
          ></ProductsFilters>
        </FiltersSection>
        <ProductsSection></ProductsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Products;

import { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isNil } from "lodash";

import Title from "components/UI/Title";
import {
  ProductsCounter,
  ProductsFilters,
  SortDropdown,
  PageSizeDropdown,
  ProductsCards,
} from "components/Products";
import useCategories from "utils/hooks/useCategories";
import useProducts from "utils/hooks/useProducts";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FiltersSection = styled.section`
  min-width: 18rem;
  padding: 0.5rem 1rem;
`;

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SortSection = styled.div`
  display: block;
  padding: 1rem;
  position: relative;
`;

const ProductsCounterStyled = styled(ProductsCounter)`
  float: left;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const ProductsPageSizeDropdown = styled(PageSizeDropdown)`
  float: right;
`;

const SortProductsDropdown = styled(SortDropdown)`
  float: right;
  margin: 0px 1rem;
`;

const CATEGORY_ID = "category";
const DEFAULT_PAGE_SIZE = 20;
const PAGE_SIZE_OPTIONS = [
  { label: 10, value: 10 },
  { label: 20, value: 20 },
  { label: 50, value: 50 },
  { label: 100, value: 100 },
];

const Products = () => {
  const { categories } = useCategories();
  const { products, productsSize } = useProducts();
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

  const [pageNumber, setPageNumber] = useState(1);

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
        <ProductsSection>
          <SortSection>
            <ProductsCounterStyled
              initial={1}
              final={pageNumber * DEFAULT_PAGE_SIZE}
              totalProductsNumber={productsSize}
            />
            <ProductsPageSizeDropdown
              options={PAGE_SIZE_OPTIONS}
              initialPageSize={DEFAULT_PAGE_SIZE}
            />
            <SortProductsDropdown />
          </SortSection>
          <ProductsCards
            items={products}
            xs={2}
            sm={2}
            md={2}
            lg={3}
            xl={4}
            xxl={5}
          ></ProductsCards>
        </ProductsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Products;

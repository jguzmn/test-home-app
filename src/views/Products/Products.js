import { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isNil } from "lodash";

import Title from "components/UI/Title";
import Dropdown from "components/UI/Dropdown";
import {
  ProductsCounter,
  ProductsFilters,
  ProductsCards,
} from "components/Products";

import { A_TO_Z, Z_TO_A, LOW_TO_HIGH, HIGH_TO_LOW } from "constants/sort";

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

const ItemsPerPageDropdown = styled(Dropdown)`
  float: right;
`;

const SortByDropdown = styled(Dropdown)`
  float: right;
  margin: 0px 1rem;
`;

const CATEGORY_ID = "category";
const DEFAULT_INITIAL_PAGE = 1;
const DEFAULT_PAGE_SIZE = 20;
const PAGE_SIZE_OPTIONS = [
  { label: 10, value: 10 },
  { label: 20, value: 20 },
  { label: 50, value: 50 },
  { label: 100, value: 100 },
];

const SORT_OPTIONS = [
  {
    label: "Name: A to Z",
    value: A_TO_Z,
  },
  {
    label: "Name: Z to A",
    value: Z_TO_A,
  },
  {
    label: "Price: Low to High",
    value: LOW_TO_HIGH,
  },
  {
    label: "Price: High to Low",
    value: HIGH_TO_LOW,
  },
];

const Products = () => {
  const { categories } = useCategories();
  const { products, productsSize } = useProducts();
  const [filtersList, setFiltersList] = useState([]);

  const [searchParams] = useSearchParams();

  const initialFilters = useMemo(() => {
    const categoriesIds = searchParams.get("category");

    return {
      [CATEGORY_ID]: !isNil(categoriesIds) ? categoriesIds.split(",") : [],
    };
  }, [searchParams]);

  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [sortBy, setSortBy] = useState(A_TO_Z);
  const [selectedPageNumber, setSelectedPageNumber] =
    useState(DEFAULT_INITIAL_PAGE);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [totalDisplayedProducts, setTotalDisplayedProducts] =
    useState(productsSize);

  const areFiltersActive = useMemo(() => {
    let active = false;
    if (activeFilters[CATEGORY_ID].length > 0) active = true;
    return active;
  }, [activeFilters]);

  const filterProducts = useCallback(
    (products) => {
      return products.filter((product) =>
        activeFilters[CATEGORY_ID].includes(product.data.category.id)
      );
    },
    [activeFilters]
  );

  const sortProducts = useCallback(
    (products) => {
      switch (sortBy) {
        case A_TO_Z:
        default:
          return products.sort((a, b) =>
            a.data.name.localeCompare(b.data.name)
          );

        case Z_TO_A:
          return products.sort(
            (a, b) => a.data.name.localeCompare(b.data.name) * -1
          );

        case LOW_TO_HIGH:
          return products.sort((a, b) =>
            a.data.price >= b.data.price ? 1 : -1
          );

        case HIGH_TO_LOW:
          return products.sort((a, b) =>
            a.data.price <= b.data.price ? 1 : -1
          );
      }
    },
    [sortBy]
  );

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

  useEffect(() => {
    const filteredProducts = areFiltersActive
      ? filterProducts(...[products])
      : products;
    const sortedProducts = sortProducts([...filteredProducts]);
    const pagedProducts = sortedProducts.slice(
      (selectedPageNumber - 1) * itemsPerPage,
      selectedPageNumber * itemsPerPage
    );
    setDisplayedProducts(pagedProducts);
    setTotalDisplayedProducts(pagedProducts.length);
  }, [
    products,
    areFiltersActive,
    activeFilters,
    filterProducts,
    sortProducts,
    selectedPageNumber,
    sortBy,
    itemsPerPage,
  ]);

  const handleFiltersChange = useCallback(
    (filtersState) => {
      setActiveFilters((prevState) => ({ ...prevState, ...filtersState }));
    },
    [setActiveFilters]
  );

  const onItemsPerPageChange = useCallback(
    (value) => {
      setItemsPerPage(value);
    },
    [setItemsPerPage]
  );

  const onSortChange = useCallback(
    (value) => {
      setSortBy(value);
    },
    [setSortBy]
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
              final={totalDisplayedProducts}
              totalProductsNumber={productsSize}
            />
            <ItemsPerPageDropdown
              defaultSelected={DEFAULT_PAGE_SIZE}
              itemsList={PAGE_SIZE_OPTIONS}
              label={"Items per Page"}
              onChange={onItemsPerPageChange}
            />
            <SortByDropdown
              defaultSelected={A_TO_Z}
              itemsList={SORT_OPTIONS}
              label={"Sort By"}
              onChange={onSortChange}
            />
          </SortSection>
          <ProductsCards
            items={displayedProducts}
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

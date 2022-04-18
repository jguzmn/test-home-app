import { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isNil, ceil } from "lodash";

import Title from "components/UI/Title";
import Dropdown from "components/UI/Dropdown";
import {
  ProductsCounter,
  ProductsFilters,
  ProductsCards,
} from "components/Products";
import Pagination from "components/UI/Pagination";

import { A_TO_Z, Z_TO_A, LOW_TO_HIGH, HIGH_TO_LOW } from "constants/sort";
import {
  SM_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
  XXL_BREAK_POINT_PX,
} from "constants/styles";

import useCategories from "utils/hooks/useCategories";
import useProducts from "utils/hooks/useProducts";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${LG_BREAK_POINT_PX}) {
    flex-direction: column;
  }
`;

const FiltersSection = styled.section`
  min-width: 18rem;
  padding: 0.5rem 1rem;

  @media only screen and (max-width: ${XXL_BREAK_POINT_PX}) {
    min-width: 15rem;
  }

  @media only screen and (max-width: ${XL_BREAK_POINT_PX}) {
    min-width: 12rem;
  }
`;

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SortSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${SM_BREAK_POINT_PX}) {
    padding: 0.5rem 1rem;
  }
`;

const ProductsCounterStyled = styled(ProductsCounter)`
  float: left;

  @media only screen and (max-width: ${SM_BREAK_POINT_PX}) {
    flex-basis: 100%;
    order: 3;
    margin-top: 1rem;
  }
`;

const ItemsPerPageDropdown = styled(Dropdown)`
  float: right;
  margin-left: auto;

  @media only screen and (max-width: ${SM_BREAK_POINT_PX}) {
    margin-left: inherit;
  }
`;

const SortByDropdown = styled(Dropdown)`
  float: right;
  margin: 0px 1rem;

  @media only screen and (max-width: ${SM_BREAK_POINT_PX}) {
    margin: 0px;
  }
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
  const [totalFilteredProducts, setTotalFilteredProducts] =
    useState(productsSize);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [numOfPages, setNumOfPages] = useState(
    ceil(totalFilteredProducts / itemsPerPage)
  );
  const [selectedPageNumber, setSelectedPageNumber] =
    useState(DEFAULT_INITIAL_PAGE);

  const [sortBy, setSortBy] = useState(A_TO_Z);
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

  // Handle filters changes depending on the categories
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

    setFiltersList((prevFilters) => [categoryFilter, ...prevFilters.slice(1)]);
  }, [categories, initialFilters]);

  // Filter and sort displayed products
  useEffect(() => {
    const filteredProducts = areFiltersActive
      ? filterProducts(...[products])
      : products;
    setTotalFilteredProducts(filteredProducts.length);
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

  // Handle the num of pages in pagination
  useEffect(
    () => setNumOfPages(ceil(totalFilteredProducts / itemsPerPage)),
    [totalFilteredProducts, itemsPerPage]
  );

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

  const onPageSelected = useCallback(
    (pageNumber) => {
      setSelectedPageNumber(pageNumber);
    },
    [setSelectedPageNumber]
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
              initial={(selectedPageNumber - 1) * itemsPerPage + 1}
              final={
                (selectedPageNumber - 1) * itemsPerPage + totalDisplayedProducts
              }
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
            md={3}
            lg={3}
            xl={4}
            xxl={5}
          ></ProductsCards>
          <Pagination
            defaultSelectedPage={DEFAULT_INITIAL_PAGE}
            numOfPages={numOfPages}
            onPageSelected={onPageSelected}
          />
        </ProductsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Products;

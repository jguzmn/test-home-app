/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import styled from "styled-components";

import mockedBanners from "mocks/en-us/featured-banners.json";
import mockedCategories from "mocks/en-us/product-categories.json";
import mockedFeaturedProducts from "mocks/en-us/featured-products.json";

import SlideShow from "components/UI/SlideShow";
import Title from "components/UI/Title";
import Carousel from "components/UI/Carousel";
import Cards from "components/UI/ProductsCards";

const CategoriesContainer = styled.div``;

const FeaturedProductsContainer = styled.div``;

const Home = () => {
  const [bannerImages, setBannerImages] = useState(mockedBanners.results);
  const [categories, setCategories] = useState(mockedCategories.results);
  const [featuredProducts, setFeaturedProducts] = useState(
    mockedFeaturedProducts.results
  );

  return (
    <Fragment>
      <SlideShow items={bannerImages} showTitle autoMoveSlideShow></SlideShow>
      <CategoriesContainer>
        <Title type="main">Our Categories</Title>
        <Carousel items={categories} visibleItemsNumber={3} />
      </CategoriesContainer>
      <FeaturedProductsContainer>
        <Title type="main">Featured Products</Title>
        <Cards items={featuredProducts}></Cards>
      </FeaturedProductsContainer>
    </Fragment>
  );
};

export default Home;

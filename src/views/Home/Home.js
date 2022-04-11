/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import mockedBanners from "mocks/en-us/featured-banners.json";
import mockedFeaturedProducts from "mocks/en-us/featured-products.json";

import SlideShow from "components/UI/SlideShow";
import Title from "components/UI/Title";
import Carousel from "components/UI/Carousel";
import Cards from "components/UI/ProductsCards";
import { MainButton } from "components/UI/Buttons";

import useCategories from "utils/hooks/useCategories";

const CategoriesContainer = styled.div``;
const FeaturedProductsContainer = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const [bannerImages, setBannerImages] = useState(mockedBanners.results);
  const { categories } = useCategories();
  const [featuredProducts, setFeaturedProducts] = useState(
    mockedFeaturedProducts.results
  );
  const goToProducts = (event) => {
    event.preventDefault();
    navigate("/products", { replace: true });
    window.scrollTo(0, 0);
  };

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
      <ButtonContainer>
        <MainButton onClick={goToProducts}>View All Products</MainButton>
      </ButtonContainer>
    </Fragment>
  );
};

export default Home;

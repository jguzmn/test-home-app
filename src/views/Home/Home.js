/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import styled from "styled-components";

import mockedBanners from "mocks/en-us/featured-banners.json";
import mockedCategories from "mocks/en-us/product-categories.json";

import SlideShow from "components/UI/SlideShow";
import MainTitle from "components/UI/MainTitle";

const CategoriesContainer = styled.div``;

const Home = () => {
  const [bannerImages, setBannerImages] = useState(mockedBanners.results);
  const [categories, setCategories] = useState(mockedCategories.results);

  return (
    <Fragment>
      <SlideShow items={bannerImages} showTitle autoMoveSlideShow></SlideShow>
    </Fragment>
  );
};

export default Home;

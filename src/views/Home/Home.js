import { Fragment, useState } from "react";
import styled from "styled-components";
import mockedBanners from "mocks/en-us/featured-banners.json";

import Carousel from "components/UI/Carousel";

const CategoriesContainer = styled.div``;

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [bannerImages, setBannerImages] = useState(mockedBanners.results);
  return (
    <Fragment>
      <Carousel items={bannerImages} showTitle autoMoveCarousel></Carousel>
      <CategoriesContainer></CategoriesContainer>
    </Fragment>
  );
};

export default Home;

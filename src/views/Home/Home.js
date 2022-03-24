import { Fragment, useState } from "react";
import mockedBanners from "mocks/en-us/featured-banners.json";

import Carousel from "components/UI/Carousel";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [bannerImages, setBannerImages] = useState(mockedBanners.results);
  return (
    <Fragment>
      <Carousel items={bannerImages} showTitle></Carousel>
    </Fragment>
  );
};

export default Home;

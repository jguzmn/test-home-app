import PropTypes from "prop-types";
import styled from "styled-components";

import { Grid, Column } from "components/Layout";

import { getCategoryNameById } from "Selectors/categories";

import ProductCard from "./ProductCard";

const CardsContainer = styled.div`
  padding: 0.5rem;
`;

const ProductsCards = ({
  items,
  xs = 2,
  sm = 2,
  md = 3,
  lg = 4,
  xl = 5,
  xxl = 5,
}) => {
  return (
    <CardsContainer>
      <Grid xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {items.map(({ id, data: itemData }, index) => (
          <Column key={id}>
            <ProductCard
              key={id}
              image={itemData?.mainimage}
              name={itemData.name}
              category={getCategoryNameById(itemData?.category?.id)}
              price={itemData?.price}
            ></ProductCard>
          </Column>
        ))}
      </Grid>
    </CardsContainer>
  );
};

ProductsCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.shape({
          id: PropTypes.string,
          slug: PropTypes.string,
        }),
        mainimage: PropTypes.shape({
          url: PropTypes.string,
          alt: PropTypes.string,
        }),
        short_description: PropTypes.string,
        price: PropTypes.number,
      }),
    })
  ),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};
export default ProductsCards;

import PropTypes from "prop-types";
import styled from "styled-components";

import { Grid, Column } from "components/Layout";

import { getCategoryNameById } from "Selectors/categories";

import ProductCard from "./ProductCard";

const CardsContainer = styled.div`
  padding: 0.5rem;
`;

const ProductsCards = ({ items }) => {
  return (
    <CardsContainer>
      <Grid xs={1} sm={2} md={3} lg={4}>
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
};
export default ProductsCards;

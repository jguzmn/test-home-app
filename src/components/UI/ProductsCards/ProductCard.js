import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import ProductName from "./ProductName";
import ProductCategory from "./ProductCategory";
import Button from "components/UI/Button";
import formatAsCurrency from "utils/formatAsCurrency";

const BorderRadiusStyle = css`
  border-radius: 16px;
`;

const AddToCartButton = styled(Button)`
  background-color: transparent;
`;

const ProductCardContainer = styled.div`
  cursor: default;
  position: relative;
  display: flex;
  flex-direction: column;

  transition: 0.3s ease;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  border: 1px solid #f1f1f1;
  ${BorderRadiusStyle}

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }

  /* &:hover ${ProductName}, &:hover ${AddToCartButton} {
    transform: scale(1.03);
  } */
`;

const CardImage = styled.img`
  cursor: pointer;
  width: 100%;
  ${BorderRadiusStyle}
`;

const productDetailsPadding = 0.5;
const ProductDetails = styled.div`
  padding: ${productDetailsPadding}rem;

  width: calc(100% - ${productDetailsPadding} * 2rem);
  height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

  ${BorderRadiusStyle}
  
  background-image: linear-gradient(180deg,
    transparent,
    rgba(186, 169, 127, 0.07)
  );
`;

const ProductCard = ({ image, name, category, price }) => {
  return (
    <ProductCardContainer>
      <ProductCategory category={category} />
      <CardImage src={image.url} alt={image.alt} />
      <ProductDetails>
        <ProductName>{name}</ProductName>
        <AddToCartButton label={formatAsCurrency(price)} />
      </ProductDetails>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;

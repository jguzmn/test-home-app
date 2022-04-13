import PropTypes from "prop-types";
import styled from "styled-components";

import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";

const StyledDiv = styled.div`
  color: ${GRAY_COLOR};
  font-weight: bold;
  font-size: 1.1rem;
`;

const StyledSpan = styled.span`
  color: ${MAIN_COLOR};
`;

const ProductsCounter = ({
  pageSize,
  totalProductsNumber = 0,
  className,
  children,
}) => (
  <StyledDiv className={className}>
    <StyledSpan>{pageSize}</StyledSpan>
    <span> of </span>
    <StyledSpan> {totalProductsNumber}</StyledSpan>
    <span> results</span>
    {children}
  </StyledDiv>
);

ProductsCounter.propTypes = {
  pageSize: PropTypes.number,
  totalProductsNumber: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ProductsCounter;

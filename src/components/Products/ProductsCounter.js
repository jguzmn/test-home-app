import { Fragment } from "react";
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
  initial,
  final,
  totalProductsNumber = 0,
  className,
  children,
}) => (
  <StyledDiv className={className}>
    {totalProductsNumber > 0 ? (
      <Fragment>
        <span>Products: </span>
        <StyledSpan>
          {initial}-{final}
        </StyledSpan>
        <span> of </span>
        <StyledSpan> {totalProductsNumber}</StyledSpan>
        <span> results</span>
      </Fragment>
    ) : (
      <span>No results found.</span>
    )}

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

import styled from "styled-components";

import { MAIN_COLOR } from "constants/styles";

const ProductName = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: center;

  color: ${MAIN_COLOR};
  font-size: 1.5rem;
  font-weight: 800;

  padding: 0.8rem 1rem;
  line-height: 1.25;
  transition: all 0.25s ease;
`;

export default ProductName;

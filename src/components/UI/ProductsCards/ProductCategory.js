import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { MAIN_COLOR, SECONDARY_COLOR } from "constants/styles";

const Category = styled.span`
  cursor: default;
  position: absolute;
  display: flex;
  align-items: center;

  color: white;
  font-size: 15px;
  font-weight: 700;
  background: ${SECONDARY_COLOR};
  padding: 5px 10px;

  border: 0.5px solid ${MAIN_COLOR};
  border-radius: 5px;
  max-width: 50%;

  right: 1rem;
  top: 1rem;
`;

const CategoryIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const ProductCategory = ({ category }) => (
  <Category>
    <CategoryIcon icon={faTag} />
    {category}
  </Category>
);

ProductCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategory;

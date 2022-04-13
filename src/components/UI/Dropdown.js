import PropTypes from "prop-types";
import styled from "styled-components";

import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${GRAY_COLOR};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
`;

const StyledSelect = styled.select`
  height: 2rem;
  padding: 0.25rem;

  &:focus-visible {
    outline-color: ${MAIN_COLOR};
  }

  & > option:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DropdownItem = styled.option``;

const Dropdown = ({ itemsList, label, className, children }) => (
  <StyledDiv className={className}>
    {label && <StyledLabel>{label}</StyledLabel>}
    <StyledSelect>
      {itemsList.map(({ label, value }) => (
        <DropdownItem key={value} value={value}>
          {label}
        </DropdownItem>
      ))}
    </StyledSelect>
    {children}
  </StyledDiv>
);

Dropdown.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Dropdown;

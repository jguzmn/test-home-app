import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { noop } from "lodash";

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

const Dropdown = ({
  itemsList,
  label,
  defaultSelected,
  onChange = noop,
  className,
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultSelected || itemsList[0]["value"]
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <StyledDiv className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect value={selectedValue} onChange={handleChange}>
        {itemsList.map(({ label, value }) => (
          <DropdownItem key={value} value={value}>
            {label}
          </DropdownItem>
        ))}
      </StyledSelect>
      {children}
    </StyledDiv>
  );
};

Dropdown.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  label: PropTypes.string,
  defaultSelected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Dropdown;

import { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { noop } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

import { FadeIn } from "utils/animations";
import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  width: fit-content;
  padding: 0.35rem 0rem;
  color: ${({ checked }) => (checked ? "black" : GRAY_COLOR)};
`;

const CheckboxInput = styled.input`
  cursor: pointer;
  display: none;
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
`;

const CheckboxIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: ${({ checked }) => (checked ? MAIN_COLOR : GRAY_COLOR)};

  ${FadeIn};
`;

const Checkbox = ({
  id,
  label = "",
  initialValue = false,
  onChange = noop,
}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = useCallback(
    (value, id) => {
      setIsChecked(value);
      onChange(value, id);
    },
    [setIsChecked, onChange]
  );

  return (
    <Label htmlFor={id} checked={isChecked}>
      <CheckboxIcon
        icon={isChecked ? faSquareCheck : faSquare}
        checked={isChecked}
      ></CheckboxIcon>
      <CheckboxInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={(event) => handleChange(event.target.checked, id)}
      />
      {label}
    </Label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func,
};

export default memo(Checkbox);

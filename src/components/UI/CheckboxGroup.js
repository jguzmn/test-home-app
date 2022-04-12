import PropTypes from "prop-types";
import { Fragment, useState, useEffect, useCallback } from "react";

import Checkbox from "./Checkbox";

/*
  This component allows to manage a group of checkboxes from a single state.
  
  So, each time a checkbox selection changes, it retrieves the updated state for the chekcboxes, like this:
    {
      checkboxId-1: state,
      checkboxId-2: state,
    }
*/
const CheckboxGroup = ({ items, handleChange }) => {
  const [checkboxesState, setChekboxesState] = useState(
    items.reduce(
      (accItem, currentItem) => ({
        ...accItem,
        [currentItem.id]: currentItem.initialValue || false,
      }),
      {}
    )
  );

  const onCheckboxChange = useCallback(
    (value, id) => {
      setChekboxesState((prevState) => ({ ...prevState, [id]: value }));
    },
    [setChekboxesState]
  );

  useEffect(() => {
    handleChange(checkboxesState);
  }, [handleChange, checkboxesState]);

  return (
    <Fragment>
      {items.map(({ id, name, initialValue = false }) => (
        <Checkbox
          key={id}
          id={id}
          label={name}
          initialValue={initialValue}
          onChange={onCheckboxChange}
        ></Checkbox>
      ))}
    </Fragment>
  );
};

CheckboxGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      initialValue: PropTypes.bool,
    })
  ).isRequired,
};

export default CheckboxGroup;

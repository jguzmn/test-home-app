import PropTypes from "prop-types";
import { memo, Fragment, useCallback } from "react";
import { reduce } from "lodash";

import Accordion from "components/UI/Accordion";
import CheckboxGroup from "components/UI/CheckboxGroup";

import Title from "components/UI/Title";

const ProductsFilters = ({ filters, onFiltersSelectionChange }) => {
  const handleCheckboxGroupChange = useCallback(
    (filterState, filterId) => {
      onFiltersSelectionChange({
        [filterId]: reduce(
          filterState,
          (activeOptions, value, key) =>
            value ? [...activeOptions, key] : [...activeOptions],
          []
        ),
      });
    },
    [onFiltersSelectionChange]
  );

  const accordionItems = filters.map(({ filterId, filterName, options }) => ({
    filterId,
    label: filterName,
    content: (
      <CheckboxGroup
        items={options}
        handleChange={(filterState) =>
          handleCheckboxGroupChange(filterState, filterId)
        }
      ></CheckboxGroup>
    ),
  }));

  return (
    <Fragment>
      <Title type="secondary">Filter By</Title>
      <Accordion items={accordionItems}></Accordion>
    </Fragment>
  );
};

PropTypes.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      filterId: PropTypes.string,
      filterName: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          initialValue: PropTypes.bool,
        })
      ).isRequired,
    })
  ).isRequired,
  onFiltersSelectionChange: PropTypes.func,
};

export default memo(ProductsFilters);

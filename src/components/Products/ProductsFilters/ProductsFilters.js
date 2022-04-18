import PropTypes from "prop-types";
import { memo, useCallback } from "react";
import { reduce } from "lodash";

import Accordion from "components/UI/Accordion";
import CheckboxGroup from "components/UI/CheckboxGroup";

import { SM_BREAK_POINT } from "constants/styles";

import useWindowDimensions from "utils/hooks/useWindowDimensions";

const ProductsFilters = ({ filters, onFiltersSelectionChange }) => {
  const { width } = useWindowDimensions();

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
    id: filterId,
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
    <Accordion
      items={accordionItems}
      defaultOpen={width > SM_BREAK_POINT}
    ></Accordion>
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

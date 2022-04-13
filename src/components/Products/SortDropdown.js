import PropTypes from "prop-types";

import Dropdown from "components/UI/Dropdown";
import { A_TO_Z, Z_TO_A, LOW_TO_HIGH, HIGH_TO_LOW } from "constants/sort";

const sortList = [
  {
    label: "Name: A to Z",
    value: A_TO_Z,
  },
  {
    label: "Name: Z to A",
    value: Z_TO_A,
  },
  {
    label: "Price: Low to High",
    value: LOW_TO_HIGH,
  },
  {
    label: "Price: High to Low",
    value: HIGH_TO_LOW,
  },
];

const SortDropdown = ({ className, children }) => (
  <Dropdown className={className} itemsList={sortList} label={"Sort By"}>
    {children}
  </Dropdown>
);

SortDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SortDropdown;

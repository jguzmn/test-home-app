import PropTypes from "prop-types";
import Dropdown from "components/UI/Dropdown";

const PageSizeDropdown = ({
  options,
  initialPageSize,
  className,
  children,
}) => (
  <Dropdown
    className={className}
    defaultSelected={initialPageSize}
    itemsList={options}
    label={"Items per Page"}
  >
    {children}
  </Dropdown>
);

PageSizeDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default PageSizeDropdown;

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import NavigationTab from "./NavigationTab";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const NavigationList = styled.ul`
  margin: 0px;
  padding: unset;
  ${verticalAlignCenter};
`;

const NavigationTabs = ({ tabList, handleNavClick, className, children }) => {
  return (
    <NavigationList className={className} onClick={handleNavClick}>
      {children}
      {tabList.map((navItem, idx) => {
        return <NavigationTab key={idx} {...navItem} />;
      })}
    </NavigationList>
  );
};

/*
  className and children props are optional, they're just used
  whenever we want to apply styles from outside using styled-components library
*/
NavigationTabs.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      redirectRoute: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.object,
    })
  ).isRequired,
  handleNavClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default NavigationTabs;

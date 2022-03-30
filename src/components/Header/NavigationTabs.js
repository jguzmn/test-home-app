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

const NavigationTabs = ({ tabList }) => {
  return (
    <NavigationList>
      {tabList.map((navItem, idx) => {
        return <NavigationTab key={idx} {...navItem} />;
      })}
    </NavigationList>
  );
};

NavigationTabs.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      redirectRoute: PropTypes.string,
      tabContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ).isRequired,
};

export default NavigationTabs;

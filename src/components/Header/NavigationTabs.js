import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { MAIN_COLOR, SECONDARY_COLOR, GRAY_COLOR } from "constants/styles";

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

const NavigationTab = styled.li`
  min-width: 4rem;
  text-align: center;
  ${verticalAlignCenter};
  transition: background-color 500ms ease-in-out;

  &:hover {
    background: rgba(186, 169, 127, 0.1);
  }
`;

const LinkLabel = styled.span`
  color: ${(props) => (props.isActive ? MAIN_COLOR : GRAY_COLOR)};
  border-bottom: ${(props) =>
    props.isActive ? `2.5px solid ${SECONDARY_COLOR}` : "none"};
  padding: 0.5rem 0rem;
  transition: border-width 100ms;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 800;
  padding: 1rem 0.8rem;
  position: relative;
  ${verticalAlignCenter};
`;

const NavigationTabs = ({ tabList }) => {
  const { pathname } = useLocation();

  const isHomeActive = (redirectRoute) =>
    redirectRoute === "/home" && pathname === "/";

  return (
    <NavigationList>
      {tabList.map(({ redirectRoute, tabContent }, idx) => {
        return (
          <NavigationTab key={idx}>
            <Link to={redirectRoute}>
              {({ isActive }) => {
                return (
                  <LinkLabel isActive={isActive || isHomeActive(redirectRoute)}>
                    {tabContent}
                  </LinkLabel>
                );
              }}
            </Link>
          </NavigationTab>
        );
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

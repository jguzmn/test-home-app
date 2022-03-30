import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MAIN_COLOR, SECONDARY_COLOR, GRAY_COLOR } from "constants/styles";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const Tab = styled.li`
  min-width: 4rem;
  text-align: center;
  ${verticalAlignCenter};
  transition: background-color 500ms ease-in-out;

  &:hover {
    background: rgba(186, 169, 127, 0.12);
  }
`;

const LinkContent = styled.span`
  color: ${(props) => (props.isActive ? MAIN_COLOR : GRAY_COLOR)};
  border-bottom: ${(props) =>
    props.isActive ? `2.5px solid ${SECONDARY_COLOR}` : "none"};
  padding: 0.5rem 0rem;
  transition: all ease 0.1s;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 800;
  padding: 1rem 0.8rem;
  position: relative;
  ${verticalAlignCenter};
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const NavigationTab = ({ redirectRoute, label, icon }) => {
  const { pathname } = useLocation();
  const isMainRouteActive = (redirectRoute) =>
    redirectRoute === "/home" && pathname === "/";
  
  return (
    <Tab>
      <Link to={redirectRoute}>
        {({ isActive }) => {
          return (
            <LinkContent
              isActive={isActive || isMainRouteActive(redirectRoute)}
            >
              {icon && <Icon icon={icon} />}
              {label}
            </LinkContent>
          );
        }}
      </Link>
    </Tab>
  );
};

NavigationTab.propTypes = {
  redirectRoute: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default NavigationTab;

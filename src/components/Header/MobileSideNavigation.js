import { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";
import NavigationTabs from "./NavigationTabs";

const NavTabs = styled(NavigationTabs)`
  flex-direction: column;
`;

const NavOverlay = styled.div`
  z-index: 9;
  width: 100%;
  position: fixed;
  overflow: hidden;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  height: ${({ isSideNavOpen }) => (isSideNavOpen ? "100%" : "0%")};
`;

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 3.5rem;

  width: ${({ isSideNavOpen }) => (isSideNavOpen ? "50%" : "0%")};
  border-right: ${({ isSideNavOpen }) =>
    isSideNavOpen ? "1px solid rgba(0, 0, 0, 0.01);" : "none"};
`;

const NavIcon = styled(FontAwesomeIcon)`
  color: ${MAIN_COLOR};
  font-size: 1.5rem;
  padding: 1rem;
  padding-right: 0.25rem;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: ${GRAY_COLOR};

  &:hover {
    color: ${MAIN_COLOR};
  }
`;

const MobileSideNavigation = ({ tabList }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openSideNav = () => setIsSideNavOpen(true);
  const closeSideNav = () => setIsSideNavOpen(false);

  return (
    <Fragment>
      <NavIcon icon={faBars} onClick={openSideNav} />
      <NavOverlay isSideNavOpen={isSideNavOpen} onClick={closeSideNav} />
      <SideNav isSideNavOpen={isSideNavOpen}>
        <CloseIcon icon={faXmark} onClick={closeSideNav} />
        <NavTabs tabList={tabList} handleNavClick={closeSideNav} />
      </SideNav>
    </Fragment>
  );
};

MobileSideNavigation.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      redirectRoute: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.object,
    })
  ).isRequired,
};

export default MobileSideNavigation;

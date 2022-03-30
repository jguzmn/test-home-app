import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import fullLogo from "assets/full-logo.png";
import logo from "assets/logo.jpeg";

import NavigationTabs from "./NavigationTabs";
import SearchBar from "./SearchBar";
import ShoppingIcon from "./ShoppingIcon";
import navigationTabsList from "./navigationList";
import HeaderContainer from "./HeaderContainer";

import useWindowDimensions from "utils/hooks/useWindowDimensions";

import {
  XS_BREAK_POINT,
  MD_BREAK_POINT,
  XS_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
} from "constants/styles";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const NavigationContainer = styled.div`
  ${verticalAlignCenter}
`;

const Logo = styled.img`
  height: 2.8rem;
  margin-right: 1rem;
  cursor: pointer;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    & {
      margin-left: 1rem;
    }
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) and (max-width: ${LG_BREAK_POINT_PX}) {
    & {
      margin-right: 0rem;
    }
  }
`;

const SiteActionsContainer = styled.div`
  ${verticalAlignCenter};
`;

const Header = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const isMobile = () => width < XS_BREAK_POINT;
  const isSmallScreen = () => width < MD_BREAK_POINT;

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Logo
          src={isSmallScreen() ? logo : fullLogo}
          onClick={handleLogoClick}
        />
        {!isMobile() && <NavigationTabs tabList={navigationTabsList} />}
      </NavigationContainer>
      <SiteActionsContainer>
        <SearchBar placeholder="Search" />
        <ShoppingIcon />
      </SiteActionsContainer>
    </HeaderContainer>
  );
};
export default Header;

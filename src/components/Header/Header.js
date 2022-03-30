import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import logo from "assets/full-logo.png";

import NavigationTabs from "./NavigationTabs";
import SearchBar from "./SearchBar";
import ShoppingIcon from "./ShoppingIcon";
import navigationTabsList from "./navigationList";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const HeaderContainer = styled.nav`
  padding: 0rem 8rem;
  background: white;
  justify-content: space-between;
  min-height: 4.5rem;
  border-bottom: 0.5px rgb(211 211 211 / 60%) solid;
  box-shadow: 1px 1px 20px 1px rgb(68 68 68 / 5%);
  ${verticalAlignCenter};

  position: fixed;
  overflow: hidden;
  z-index: 5;
  top: 0px;
  left: 0px;
  right: 0px;
`;

const NavigationContainer = styled.div`
  ${verticalAlignCenter}
`;

const Logo = styled.img`
  height: 2.8rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const SiteActionsContainer = styled.div`
  ${verticalAlignCenter};
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Logo src={logo} onClick={handleLogoClick} />
        <NavigationTabs tabList={navigationTabsList} />
      </NavigationContainer>
      <SiteActionsContainer>
        <SearchBar placeholder="Search" />
        <ShoppingIcon />
      </SiteActionsContainer>
    </HeaderContainer>
  );
};
export default Header;

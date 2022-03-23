import { useNavigate, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import logo from "assets/full-logo.png";
import { MAIN_COLOR, SECONDARY_COLOR, GRAY_COLOR } from "constants/styles";

import SearchBar from "./SearchBar";
import ShoppingIcon from "./ShoppingIcon";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const HeaderContainer = styled.nav`
  padding: 0rem 5rem;
  background: white;
  justify-content: space-between;
  min-height: 4.5rem;
  border-bottom: 0.5px rgb(211 211 211 / 60%) solid;
  box-shadow: 1px 1px 20px 1px rgb(68 68 68 / 5%);
  ${verticalAlignCenter};

  position: fixed;
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

const NavigationTabs = styled.ul`
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
        <NavigationTabs>
          <NavigationTab>
            <Link to="/home">
              {({ isActive }) => (
                <LinkLabel isActive={isActive}>HOME</LinkLabel>
              )}
            </Link>
          </NavigationTab>
          <NavigationTab>
            <Link to="/products">
              {({ isActive }) => (
                <LinkLabel isActive={isActive}>PRODUCTS</LinkLabel>
              )}
            </Link>
          </NavigationTab>
        </NavigationTabs>
      </NavigationContainer>
      <SiteActionsContainer>
        <SearchBar placeholder="Search" />
        <ShoppingIcon />
      </SiteActionsContainer>
    </HeaderContainer>
  );
};
export default Header;

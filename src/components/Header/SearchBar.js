import PropTypes from "prop-types";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { GRAY_COLOR, MAIN_COLOR } from "constants/styles";

import { XS_BREAK_POINT_PX } from "constants/styles";

const Icon = styled(FontAwesomeIcon)`
  transition: color 250ms ease-in-out;
`;

const SearchBarContainer = styled.div`
  padding: 0.5rem 0.7rem;
  border: 0.5px rgb(211 211 211) solid;
  border-radius: 8px;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  transition: box-shadow 250ms ease;

  &:hover,
  &:focus-within {
    box-shadow: 0px 0px 4px 2px #a793693d;
  }

  &:focus-within ${Icon} {
    color: ${MAIN_COLOR};
  }
`;

const SearchInput = styled.input`
  border: unset;
  font-size: 1rem;

  &:focus-visible {
    border: unset;
    box-shadow: none;
    outline: none;
  }

  @media screen and (max-width: ${XS_BREAK_POINT_PX}) {
    width: 8rem;
  }
`;

const SearchBar = ({ placeholder = "" }) => {
  return (
    <SearchBarContainer>
      <Icon icon={faMagnifyingGlass} size="sm" color={GRAY_COLOR} />
      <SearchInput type="search" placeholder={placeholder} />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;

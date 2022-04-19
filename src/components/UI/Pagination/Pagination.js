import { useState, useCallback, useMemo, useEffect } from "react";
import { range } from "lodash";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { PreviousButton, NextButton } from "components/UI/ControlButtons";

import {
  MAIN_COLOR,
  SECONDARY_COLOR,
  COMPLEMENTARY_COLOR,
  GRAY_COLOR,
} from "constants/styles";

import { PREV_KEY, NEXT_KEY } from "constants/uiComponentsKeys";

const Container = styled.nav`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Pages = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  border-radius: 0.25rem;
`;

const PageItem = styled.li``;

const disabledStyles = css`
  cursor: default;
  color: ${GRAY_COLOR};
  background-color: rgba(0, 0, 0, 0.1);
`;

const selectedStyles = css`
  color: ${COMPLEMENTARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-weight: bold;
`;

const PageLink = styled.a`
  cursor: pointer;

  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${MAIN_COLOR};
  background-color: "white";
  transition: all 0.25s ease;

  ${({ disabled, selected }) =>
    !disabled &&
    !selected &&
    css`
      &:hover {
        background-color: rgba(186, 169, 127, 0.12);
      }
    `}

  ${({ disabled }) => disabled && disabledStyles}
  ${({ selected }) => selected && selectedStyles}

  & > * {
    color: inherit;
    cursor: inherit;
  }
`;

const Pagination = ({ defaultSelectedPage, numOfPages, onPageSelected }) => {
  const [selectedPage, setSelectedPage] = useState(defaultSelectedPage);
  const pages = useMemo(
    () => range(1, (numOfPages > 1 ? numOfPages : 1) + 1, 1),
    [numOfPages]
  );

  const isPageSelected = useCallback(
    (pageNumber) => pageNumber === selectedPage,
    [selectedPage]
  );

  const handleClick = (selectedPageNumber) => {
    setSelectedPage(selectedPageNumber);
  };

  useEffect(() => onPageSelected(selectedPage), [selectedPage, onPageSelected]);

  const moveBetweenPages = (movementType, isDisabled) => {
    if (isDisabled) return;
    switch (movementType) {
      case PREV_KEY:
        setSelectedPage((prevPageNumber) => prevPageNumber - 1);
        break;

      case NEXT_KEY:
        setSelectedPage((prevPageNumber) => prevPageNumber + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Pages>
        <PageItem>
          <PageLink
            disabled={selectedPage === 1}
            onClick={() => moveBetweenPages(PREV_KEY, selectedPage === 1)}
          >
            <PreviousButton />
          </PageLink>
        </PageItem>
        {pages.map((pageNumber) => (
          <PageItem key={pageNumber}>
            <PageLink
              selected={isPageSelected(pageNumber)}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </PageLink>
          </PageItem>
        ))}
        <PageItem>
          <PageLink
            disabled={selectedPage === pages.length}
            onClick={() =>
              moveBetweenPages(NEXT_KEY, selectedPage === pages.length)
            }
          >
            <NextButton />
          </PageLink>
        </PageItem>
      </Pages>
    </Container>
  );
};

Pagination.propTypes = {
  defaultSelectedPage: PropTypes.number.isRequired,
  numOfPages: PropTypes.number.isRequired,
  onPageSelected: PropTypes.func,
};

export default Pagination;

import styled, { css } from "styled-components";
import { isNil } from "lodash";
import PropTypes from "prop-types";

import Column from "./Column";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const ColumnWidthStyles = (value) => css`
  flex: 0 0 calc(${100 / value}% - 2rem);
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;

  & ${Column} {
    flex: 0 0 1;
    padding: 0.5rem;
  }

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ xs }) => !isNil(xs) && ColumnWidthStyles(xs)}
    }
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ sm }) => !isNil(sm) && ColumnWidthStyles(sm)}
    }
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ md }) => !isNil(md) && ColumnWidthStyles(md)}
    }
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ lg }) => !isNil(lg) && ColumnWidthStyles(lg)}
    }
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ xl }) => !isNil(xl) && ColumnWidthStyles(xl)}
    }
  }
`;

/* This parameters indicate the amount of items that the user wants to render in a single line */
Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;

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
  XXL_BREAK_POINT_PX,
} from "constants/styles";

const ColumnWidthStyles = (value) => css`
  width: calc(${100 / value}% - var(--padding-sides) * 2);
`;

const Grid = styled.div`
  --padding-sides: 0.5rem;

  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: flex-start;

  & ${Column} {
    padding: 0.8rem var(--padding-sides);
  }

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    --padding-sides: 0.25rem;

    & ${Column} {
      ${({ xs }) => !isNil(xs) && ColumnWidthStyles(xs)}
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
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

  @media only screen and (min-width: ${XXL_BREAK_POINT_PX}) {
    & ${Column} {
      ${({ xxl }) => !isNil(xxl) && ColumnWidthStyles(xxl)}
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
  xxl: PropTypes.number,
};

export default Grid;

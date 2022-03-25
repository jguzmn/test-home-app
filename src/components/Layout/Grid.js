import styled, { css } from "styled-components";
import { isNil } from "lodash";
import PropTypes from "prop-types";

import Column from "./Column";

const ColumnWidthStyles = css`
  & ${Column} {
    padding: 0.5rem;
    flex: 0 0 calc(${({ itemsPerColumn }) => 100 / itemsPerColumn}% - 2rem);
  }
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;

  ${({ itemsPerColumn }) => !isNil(itemsPerColumn) && ColumnWidthStyles}
`;

Grid.propTypes = {
  itemsPerColumn: PropTypes.number,
};

export default Grid;

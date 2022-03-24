import styled from "styled-components";

import { MAIN_COLOR, COMPLEMENTARY_COLOR } from "constants/styles";

const SquaredLabel = styled.span`
  cursor: default;

  /* Text Style */
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.3px;

  /* Box shape */
  padding: 0.25rem 1.25rem;
  background-color: ${MAIN_COLOR};
  border: 0.5px solid ${COMPLEMENTARY_COLOR};
  border-radius: 2px;
`;

export default SquaredLabel;

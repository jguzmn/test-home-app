import { css } from "styled-components";

const FadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: fadeIn;
  animation-duration: 1s;
`;

export { FadeIn };

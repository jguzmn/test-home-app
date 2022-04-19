import { css } from "styled-components";

const FadeIn = (time) => css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: fadeIn;
  animation-duration: ${time}s;
`;

export { FadeIn };

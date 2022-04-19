import styled from "styled-components";

const BaseButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-items: stretch;

  padding: 0.5rem 1rem;
  position: relative;
  border-radius: 5px;
  margin: 0.5rem 0rem;

  font-size: 1rem;
  transition: all 0.25s ease;
`;

export default BaseButton;

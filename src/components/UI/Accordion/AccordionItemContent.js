import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const OpenStyle = css`
  transform: scaleY(1);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 0 1.2rem;
  margin: 0.5rem 0;

  overflow: hidden;
  position: absolute;
  background-color: white;

  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.25s ease-out;

  ${({ isOpen }) => isOpen && OpenStyle}
`;

const AccordionItemContent = ({ children, className, isOpen }) => {
  return (
    <StyledDiv className={className} isOpen={isOpen}>
      {children}
    </StyledDiv>
  );
};

AccordionItemContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default AccordionItemContent;

import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import AccordionItemContent from "./AccordionItemContent";
import useToggle from "utils/hooks/useToggle";

const AccordionItemContainer = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const AccordionIcon = styled(FontAwesomeIcon)``;

const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;

  cursor: pointer;
  width: 100%;
  padding: 1rem;
  color: #444;
  background-color: white;

  border: none;
  outline: none;

  font-size: 1.1rem;
  font-weight: bold;
  transition: 0.4s;
`;

const Accordion = ({ items }) => {
  const toggle = useToggle;

  return items.map(({ label, content }, idx) => {
    const [isItemOpen, setIsItemOpen] = toggle(idx === 0 ? true : false);
    return (
      <AccordionItemContainer key={idx}>
        <AccordionButton onClick={setIsItemOpen}>
          {label}
          {<AccordionIcon icon={isItemOpen ? faMinus : faPlus} />}
        </AccordionButton>
        <AccordionItemContent isOpen={isItemOpen}>
          {content}
        </AccordionItemContent>
      </AccordionItemContainer>
    );
  });
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
};

export default Accordion;

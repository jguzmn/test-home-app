import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import AccordionItemContent from "./AccordionItemContent";

const AccordionItemContainer = styled.div`
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

const Accordion = ({ items, defaultOpen }) => {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    setOpenItems({
      ...items.reduce((res, item) => {
        return { ...res, [item.id]: defaultOpen || false };
      }, {}),
    });
  }, [items, defaultOpen]);

  const setOpenItemState = (itemId) =>
    setOpenItems((prevOpenItems) => {
      return {
        ...prevOpenItems,
        [itemId]: !prevOpenItems[itemId],
      };
    });

  return items.map(({ id, label, content }, idx) => (
    <AccordionItemContainer key={idx}>
      <AccordionButton onClick={() => setOpenItemState(id)}>
        {label}
        {<AccordionIcon icon={!!openItems[id] ? faMinus : faPlus} />}
      </AccordionButton>
      <AccordionItemContent isOpen={!!openItems[id]}>
        {content}
      </AccordionItemContent>
    </AccordionItemContainer>
  ));
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  defaultOpen: PropTypes.bool,
};

export default Accordion;

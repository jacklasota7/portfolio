import { useState } from "react";

// PropTypes for runtime type checking
import PropTypes from "prop-types";

function ListGroup({ items, heading }) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // React Fragment allows us to group multiple elements without adding extra nodes to the DOM.
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

export default ListGroup; // Must export it to be used in other files.

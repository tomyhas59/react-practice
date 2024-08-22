import React, { useState, useRef, useEffect } from "react";

const MenuListRenderer = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setHoveredIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-list-container" ref={menuRef}>
      {data.map((item, i) => (
        <div
          key={i}
          className={`menu ${hoveredIndex === i ? "hovered" : ""}`}
          onClick={() => setHoveredIndex(i)}
        >
          <div className={`menu-inner ${hoveredIndex === i ? "hovered" : ""}`}>
            <div className="menu-front"></div>
            <div className="menu-back">
              <p className={`food-name ${hoveredIndex === i ? "hovered" : ""}`}>
                메뉴: {item.menu}
              </p>
              <p className={`price ${hoveredIndex === i ? "hovered" : ""}`}>
                가격: {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuListRenderer;
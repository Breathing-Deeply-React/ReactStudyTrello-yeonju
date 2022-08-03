import React from "react";

const Item = ({ content, id, children }) => {
  return (
    <div className="Item">
      <div className="context">
        <div>{children}</div>
      </div>

      <div>
        <button> 리스트 추가 </button>
      </div>
    </div>
  );
};

export default Item;

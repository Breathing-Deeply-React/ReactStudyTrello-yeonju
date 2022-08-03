import React, { useState } from "react";
import Item from "../group/Item";

const ListItem = ({ dataList }) => {
  const onDelete = () => {};

  return (
    <div className="ListItem">
      {dataList.map((item, index) => (
        <Item key={item.id} {...item}>
          {item.content}
        </Item>
      ))}
    </div>
  );
};

export default ListItem;

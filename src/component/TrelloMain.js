import ListItem from "./group/ListItem";
import Editor from "./group/Editor";

import React, { useState, useRef, useEffect } from "react";

const dummyList = [
  {
    content: "ㅎㅇ 1",
  },
  {
    content: "ㅎㅇ 2",
  },
  {
    content: "ㅎㅇ 3",
  },
];

const TrelloMain = () => {
  const [cardData, setCarddata] = useState([]);
  const dataId = useRef(1);

  const handleChangeState = (e) => {
    setCarddata({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const initList = () => {
    const initData = dummyList.map((it) => {
      return {
        content: it.content,
        id: dataId.current++,
      };
    });

    setCarddata(initData);
  };

  useEffect(() => {
    initList();
  }, []);

  const onAdd = (content) => {
    const newList = {
      content,
      id: dataId.current,
    };
    dataId.current += 1;

    setCarddata([newList, ...cardData]);
  };

  return (
    <div className="TrelloMain">
      <Editor onAdd={onAdd}></Editor>
      <ListItem dataList={cardData}></ListItem>
    </div>
  );
};

export default TrelloMain;

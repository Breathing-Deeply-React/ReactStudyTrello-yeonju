import React, { useState, useRef } from "react";

const Editor = ({ onAdd }) => {
  const [state, setState] = useState("");
  const stateCheck = useRef("");

  const submitData = () => {
    if (state == "") {
      stateCheck.current.focus();
      return;
    }
    onAdd(state);
    setState("");
  };

  return (
    <div>
      <div className="groupText">
        <input
          ref={stateCheck}
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <button onClick={submitData}>추가</button>
      </div>
    </div>
  );
};

export default Editor;

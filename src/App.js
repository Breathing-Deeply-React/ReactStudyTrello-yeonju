import React from "react";
import "./App.css";
import TrelloMain from "./component/TrelloMain";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <h2>Trello</h2>
        </div>
      </header>
      <TrelloMain></TrelloMain>
    </div>
  );
}

export default App;

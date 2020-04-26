import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "hogehoge",
    };
  }
  public render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for </h1>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Mixi</li>
        </ul>
      </div>
    );
  }
}

export default App;

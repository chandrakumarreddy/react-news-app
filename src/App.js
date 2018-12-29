import React, { Component } from "react";
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <UsersList />
      </div>
    );
  }
}

export default App;

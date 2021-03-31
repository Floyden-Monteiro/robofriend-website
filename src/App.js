import React, { Component } from "react";
import CardList from "./CardList.js";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox.js";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchchange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 ClassName="headerName">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchchange} />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

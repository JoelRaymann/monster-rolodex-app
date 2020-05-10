import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    // Fetch users
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  __getMonsterData__ = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const monsterListJSON = await response.json();
      return monsterListJSON;
    } catch (error) {
      alert(`[ERROR]: API Request Failed. Check console.log`);
      console.log(`[ERROR]: API Request Failed: ${error}`);
    }
  };

  componentDidMount() {
    const monsterList = this.__getMonsterData__();
    monsterList.then((users) =>
      this.setState({
        monsters: users,
      })
    );
  }

  /**
   * Function to change state for every search entry in the search box
   *
   * @memberof App
   */
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

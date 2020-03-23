import React, { Component } from "react";
import Car from "./Car";
import Comments from "./Comments";
import User from "./User";

class App extends Component {
  render() {
    var tablici = { tablica: "SK-000-AB" };

    var vozila = [
      { brand: "Ford", model: "Focus", year: 2001 },
      { brand: "Opel", model: "Astra", year: 2006 },
      { brand: "Opel", model: "Vectra", year: 2010 }
    ];

    var registracija = [
      { grad: "Skopje", oznaka: "SK", tablici },
      { grad: "Stip", oznaka: "ST", tablici },
      { grad: "Gostivar", oznaka: "GV", tablici }
    ];

    var komentari = [
      { user: "Petko", com: "Comment #1" },
      { user: "Janko", com: "Comment #2" },
      { user: "Stanko", com: "Comment #3" }
    ];

    return (
      <div id="app">
        <h2>Hello cas2</h2>
        <Car cars={vozila} reg={registracija} />
        <Comments
          date={"23-03-2020"}
          broj={25}
          cifra={2}
          comments={komentari}
        />
        <User name={"Stefa"} lastName={"Zdravkov"} />
        <User name={"Aleksandar"} lastName={"Mitev"} />
        <User name={"Petar"} lastName={"Dzukovski"} />
      </div>
    );
  }
}

export default App;

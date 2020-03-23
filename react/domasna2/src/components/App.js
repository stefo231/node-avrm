import React, { Component } from "react";
import Movies from "./Movies";

class App extends Component {
  render() {
    var filmovi = [
      {
        img:
          "https://filmovionline.to/wp-content/uploads/2018/11/Juzni-vetar.jpg",
        title: "Juzni Vetar",
        rating: 8.2,
        year: 2018,
        director: "Milos Avramovic"
      },
      {
        img:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9KHHcZ77V9cPmxm5b0yAjefFIqgQU4uB13lLIGXU8Jvbr8xIs",
        title: "1917",
        rating: 8.4,
        year: 2019,
        director: "Sam Mendes"
      },
      {
        img:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1OvwszdIz_Vc79PbB5El6tKdFdOGwHJZCOoKbbPVtyYZtyFC4",
        title: "The Irishman",
        rating: 7.9,
        year: 2019,
        director: "Martin Scorsese"
      },
      {
        img:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
        title: "Avengers: Endgame",
        rating: 8.4,
        year: 2019,
        director: "Joe Russo, Anthony Russo"
      },
      {
        img:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkPE0us5SIkt9fhXCL4GOD_sLdXrZPiuEZDzJBBNdURla5WIcb",
        title: "Bad Boys for Life",
        rating: 7.2,
        year: 2020,
        director: "Bilall Fallah, Adil El Arbi"
      }
    ];
    return (
      <div>
        <Movies filmovi={filmovi} />
      </div>
    );
  }
}

export default App;

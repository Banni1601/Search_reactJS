import { Component } from "react";
import Mycard from "./components/Items";

import "./styles.css";
const destinationsList = [
  {
    id: 1,
    name: "Bunny",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png",
  },
  {
    id: 2,
    name: "Shrubland",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/shrubland-img.png",
  },
  {
    id: 3,
    name: "Bunny",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/new-york-img.png",
  },
  {
    id: 4,
    name: "Escarpment",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/escarpment-img.png",
  },
  {
    id: 5,
    name: "Westminster Abbey",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png",
  },
  {
    id: 6,
    name: "South Downs National Park",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png",
  },
  {
    id: 7,
    name: "National Historic Site",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png",
  },
  {
    id: 8,
    name: "Tower Bridge",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png",
  },
  {
    id: 9,
    name: "Arc Here",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/arc-here-img.png",
  },
  {
    id: 10,
    name: "Steeple",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/steeple-img.png",
  },
  {
    id: 11,
    name: "Glaciokarst",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png",
  },
  {
    id: 12,
    name: "Parco Nazionale delle Cinque Terre",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png",
  },
];

class App extends Component {
  state = { searchData: "", list: destinationsList };
  data = (event) => {
    const { searchData } = this.state;
    this.setState({ searchData: event.target.value, list: destinationsList });
  };

  render() {
    const { searchData, list } = this.state;
    const value = list.filter((i) => i.name.includes(searchData));
    return (
      <div className="f" id="hh">
        <input type="search" onChange={this.data} value={searchData} />
        <div className="s">
          {value.map((i) => (
            <Mycard key={i.id} cardData={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

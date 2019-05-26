import React from 'react';
import './App.css';

import Type from './Type';
import RestaurantByType from './RestaurantByType';
import Menu from './Menu';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: {
        "mediterranean": {
            "Mediterranean Grill": [
                "hummus", "tabouli", "dolmas"
            ],
            "Yalla": [
                "hummus wrap", "tabouli wrap", "dolmas"
            ],
            "Nik's": [
                "spanakopita", "gyro", "dolmas"
            ]
        },
        "american": {
            "Chik fil a": [
                "chicken biscuit", "chicken sandwich", "chicken salad"
            ],
            "Mary Mac's Tea Room": [
                "biscuit", "fried chicken", "mashed potatoes"
            ],
            "Jersey Mike's": [
                "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
            ]
        },
        "mexican": {
            "Elmyriachi": [
                "tacos", "burritos", "cheese dip"
            ],
            "Mezcalito's Cantina": [
                "tortas", "tamales", "cheese dip"
            ],
            "Matador": [
                "cheese dip", "cheese dip", "cheese dip"
            ]
        }
    },
      type: 'american',
      restaurant: ''
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Type types={Object.keys(this.state.restaurants)}/>

          <h3>Pick a Restaurant type to filter:</h3>
          <select
            onChange={this._filterType}
          >
            <option value="american">American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
          </select>

          <RestaurantByType onClick={this._handleClick} type={this.state.type} allRestaurants={this.state.restaurants}/>

          <Menu restaurant={this.state.restaurant} type={this.state.type} allRestaurants={this.state.restaurants}/>
        </header>
      </div>
    );
  }

  _filterType = (e) => {
    console.log('select has been changed!')
    console.log(e.target.value);
    this.setState({
      type: e.target.value,
      restaurant: ''
    })
  }

  _handleClick = (e) => {
    this.setState({
      restaurant: e.target.textContent
    })
  }
}

export default App;

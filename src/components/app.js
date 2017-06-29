import React, { Component } from 'react';
import Card from './card.js';
import Header from './header.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import populatePhotos from '../actions/populate_photos.js';
import populatePrice from '../actions/populate_price.js';
import populateCoinname from '../actions/populate_coinname.js';
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props);

  }

  renderCards() {
    var arr = [];
    const request = axios.get('https://api.coinmarketcap.com/v1/ticker/');
    this.props.populateCoinname(request);
    this.props.populatePrice(request);
    this.props.populatePhotos(request);
    for (var i = 0; i < 99; i++) {

      arr.push(<Card  num={i} key={i}/>)
    }
    return arr;
  }
  render() {
    return (
      <div>
          <Header />
          <div className='card-parent'>
            {this.renderCards()}
      </div>
    </div>
      );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    populatePhotos: populatePhotos,
    populatePrice: populatePrice,
    populateCoinname: populateCoinname
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(App);

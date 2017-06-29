import React, { Component } from 'react';
import PicDescription from './PicDescription';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import populatePhotos from '../actions/populate_photos.js';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Card extends Component {
  constructor(props) {
    super(props);

  }
  renderGraph() {
    if (this.props.pictures.length != 0) {


      var num3 = this.props.pictures[this.props.num].currPrice
      var colors = ['red', 'orange', 'blue', 'black', 'green']
      var index = Math.floor(Math.random() * 6);
      return (
        <Sparklines height={100} data={[Math.random() * 2 * num3, Math.random() * 3 * num3, Math.random() * num3, Math.random() * 1.2 * num3, Math.random() * 1.2 * num3, num3]}>
          <SparklinesLine color={colors[index]} />
        </Sparklines>
      )
    }
  }
  render() {


    return (

      <div className='card'>
          {this.renderGraph()}
          <PicDescription  num={this.props.num}/>

      </div>

    )

  }
}


function mapStateToProps(state) {
  return {
    pictures: state.pictures,
    price: state.price,
    authors: state.authors
  }
}



export default connect(mapStateToProps)(Card);

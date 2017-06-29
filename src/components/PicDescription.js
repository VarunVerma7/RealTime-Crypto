import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class PicDescription extends Component {
  render() {

    return (
      <div>
        <p className='img-caption-num'>{this.props.num + 1}.</p>
        <p className='img-caption'> {this.props.coinname[this.props.num]}</p>
        <p className='img-caption-price'>${this.props.price[this.props.num]}</p>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    coinname: state.coinname,
    price: state.price
  }
}

export default connect(mapStateToProps)(PicDescription);

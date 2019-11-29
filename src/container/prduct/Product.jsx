import React, { Component, Fragment } from 'react';

import './Product.css';

export default class Product extends Component {
  state = {
    product: 6
  };
  handlePlus = () => {
    // alert('plus');
    this.setState({
      product: this.state.product + 1
    });
  };
  handleMinus = () => {
    // alert('minus');
    if (this.state.product > 0) {
      this.setState({
        product: this.state.product - 1
      });
    }
    if (this.state.product === 0) {
      alert('mentok 0 Cuk');
    }
  };
  render() {
    return (
      <Fragment>
        <div className='pwrapper'>
          <div className='nav'>
            <div className='logo'>
              <h2>Adi Store</h2>
            </div>
            <div className='keranjang'>
              <img
                src='https://i.ibb.co/qdvZ3cY/shopping-cart.png'
                alt='cart'
              />
              <div className='jumlah'>{this.state.product}</div>
            </div>
          </div>
          <div className='product'>
            <div className='gambar-product'>
              <img
                src='https://i.ibb.co/FzDgjj5/bag-sleeve.jpg'
                alt='bag-sleeve'
                className='gambarpaket'
              />
            </div>
            <p className='nama'>Tas Slempang USB</p>
            <p className='harga'>Rp. 81.000</p>
          </div>
          <div className='counter'>
            <button className='mplus' onClick={this.handleMinus}>
              -
            </button>
            <input type='text' className='input' value={this.state.product} />
            <button className='mplus' onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

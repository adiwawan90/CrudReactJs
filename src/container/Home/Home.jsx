import React, { Component, Fragment } from 'react';
import KursusComponen from '../../component/KursusComponent/KursusComponent';
import Product from '../prduct/Product';
import Blogs from '../Blogs/Blogs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Router>
        {/* <div>
          <KursusComponen
            nama='SEO'
            harga='5000'
            desc='Belajar SEO sampai bisa banget'
          />
          <KursusComponen
            nama='Fb Ads'
            harga='2000'
            desc='Belajar Fb ads sukses banget pokoke '
          />
          <KursusComponen
            nama='Google Ads'
            harga='3500'
            desc='Belajar Google Ads supaya Joss'
          />
          <KursusComponen
            nama='Google Adsen'
            harga='42000'
            desc='Belajar Google Adsen sampai bisa'
          />
          <KursusComponen />
          <Product />
          <h2>Baba Studio</h2>
          <hr />
          <Blogs />
        </div> */}
        <Fragment>
          <div className='back'>
            <nav>
              <ul>
                <li className='link'>
                  <Link to='/' className='ahref'>
                    Home
                  </Link>
                </li>
                <li className='link'>
                  <Link to='/product' className='ahref'>
                    Product
                  </Link>
                </li>
                {/* <li>
                  <Link to='/users'>Users</Link>
                </li> */}
              </ul>
            </nav>
          </div>

          <Route path='/' exact component={Blogs} />
          <Route path='/product' exact component={Product} />
          {/* <Router path="/" exact component={Blogs}/> */}
        </Fragment>
      </Router>
    );
  }
}

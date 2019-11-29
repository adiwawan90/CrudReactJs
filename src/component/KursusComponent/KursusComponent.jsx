import React from 'react';
import './KursusComponent.css';

const KursusComponent = props => {
  return (
    <div className='pwrapper'>
      <div className='wrapper'>
        <div className='gambar'>
          <img
            className='gambarpaket'
            src='https://i.ibb.co/d7yFNtp/p4.jpg'
            alt='p4'
            border='0'
          />
        </div>
        <p className='harga'>{props.nama}</p>
        <p className='harga'>Rp. {props.harga}</p>
        <p className='harga'>{props.desc}</p>
      </div>
    </div>
  );
};

KursusComponent.defaultProps = {
  nama: 'IG',
  harga: '75000',
  desc: 'Belajar Ads Instagram mak nyuss'
};

export default KursusComponent;

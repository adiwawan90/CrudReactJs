//cara stateless component
import React from 'react';
import '../BlogsComponent/BlogsComponents.css';

const BlogsComponents = props => {
  return (
    <div className='post'>
      <div className='img'>
        <img
          className='gambarpaket'
          src='https://i.ibb.co/d7yFNtp/p4.jpg'
          alt='p4'
          border='0'
        />
      </div>
      <div className='article'>
        <p className='title'>{props.data.title}</p>
        <p className='title'>{props.data.body} </p>
        <button className='delete' onClick={() => props.remove(props.data.id)}>
          Delete Data
        </button>
        <button className='update' onClick={() => props.update(props.data)}>
          Update Data
        </button>
      </div>
    </div>
  );
};

export default BlogsComponents;

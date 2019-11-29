import React, { Component, Fragment } from 'react';
import '../Blogs/Blogs.css';
import BlogsComponents from '../../component/BlogsComponent/BlogsComponents';
// import axios
// import axos from 'axios';
import axios from 'axios';

export default class Blogs extends Component {
  //buat state utk looping dan tampung data drJSON API
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1
    },
    isUpdate: false
  };

  getPostApi = () => {
    axios
      .get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then(result => {
        this.setState({
          post: result.data
        });
      });
  };

  postDataToApi = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost).then(
      res => {
        console.log(res);
        //ini biar tidak reload lgsg tampil data
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
          }
        });
      },
      err => {
        console.log('error : ', err);
      }
    );
  };

  //untuk mengaupdate data to API
  putDataToApi = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(res => {
        console.log(res);
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
          }
        });
      });
  };

  handleRemove = data => {
    // console.log(data);
    //
    axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
      // console.log(res);
      this.getPostApi();
    });
  };
  handleUpdate = data => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true
    });
  };

  handleFormInput = event => {
    // console.log('data input', event.target);
    // membuat variable menampung nilai inputan
    // let title = event.target.value;
    let formBlogPostData = { ...this.state.formBlogPost };
    //membuat variabel u/ mengambil ilai inputan
    let timenow = new Date().getTime();
    // console.log(timenow);
    if (!this.state.isUpdate) {
      formBlogPostData['id'] = timenow;
    }
    formBlogPostData[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostData
      // },
      // () => {
      //   console.log('value title', this.state.formBlogPost);
    });
  };

  //membuat fungsi
  handleSubmit = () => {
    // console.log(this.state.formBlogPost);
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
  };

  // memanggil data dari JSON API
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // axios.get('http://localhost:3004/posts').then(result => {
    //   this.setState({
    //     post: result.data
    //   });
    // });
    this.getPostApi(); //
  }

  render() {
    return (
      <Fragment>
        <h2 className='title'>Welcome to Adi's Blogs</h2>
        {/* <BlogsComponents title='title' desc='Deskripsi' /> */}
        <div className='content'>
          <div className='formdata'>
            <label htmlFor='title' className='judul'>
              Title Blog
            </label>
            <input
              type='text'
              name='title'
              placeholder='add title'
              className='title2'
              onChange={this.handleFormInput}
              value={this.state.formBlogPost.title}
            />
            <label htmlFor='body-content' className='judul'>
              Blogs Content
            </label>
            <textarea
              name='body'
              id='body'
              cols='40'
              rows='15'
              placeholder='add blo content'
              className='title2'
              onChange={this.handleFormInput}
              value={this.state.formBlogPost.body}
            ></textarea>
            <button className='btn-submit' onClick={this.handleSubmit}>
              Simpan Data
            </button>
          </div>
          {this.state.post.map(post => {
            return (
              <BlogsComponents
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

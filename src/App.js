import './App.css';
import React from 'react';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "@popperjs/core";
import PostsList from './PostsList';
import { GlobalContext } from './Context';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      post:"",
      postsList:[],
      likes:[]
    }
  }
  onTextChange(e){
    this.setState({post:e.target.value});
  }
  async onButtonClicked(e){
    e.preventDefault();
    if(this.state.post !== ""){
    let _postsList = JSON.parse(JSON.stringify(this.state.postsList));
    let _likes = JSON.parse(JSON.stringify(this.state.likes));
    _postsList.push(this.state.post);
    _likes.push(false)
    await this.setState({post:"" ,postsList:_postsList, likes:_likes})
    console.log(this.state.likes);
    }
    
  }
  render(){
  return (
    // <GlobalContext.Provider >
    <>
    <div className="container border-2 d-flex justify-content-center m-3">
      <div className='row'>
      <form>
          <div className='col'>
            <label>
              Post
              <br></br>
              <textarea value={this.state.post} onChange={this.onTextChange.bind(this)}></textarea>
            </label>
            <div>
              <input type="submit" className={'btn btn-success'} onClick={this.onButtonClicked.bind(this)}></input>
            </div>
            <hr></hr>
        </div>
      </form>
      </div>
    </div>
    <div className='col'>
    <PostsList items={this.state.postsList} likes={this.state.likes} />
    </div>
    </>
    // </GlobalContext.Provider>
  );
}
}
App.contextType=GlobalContext;
export default App;

import React from "react";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "@popperjs/core";
import Comments from "./Comments";
class PostsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            like:[false],
            comment:false
        }
    }

    onLikeClicked(idx){
        this.props.likes.forEach((element, index) => {
            if(idx===index){
                this.props.likes[index]=!this.props.likes[index];
            }
        });     
    }

    onCommentClicked(){
        this.setState({comment:!this.state.comment})
    }

    render(){
        return(
            
            <div className="container border-2 d-flex justify-content-center m-3">
            <ul className="col-10">
                { 
                    this.props.items.map((item, idx) => {
                        return (
                        <li key={idx}>
                        <div className="d-flex border shadow p-3 mb-5 bg-body rounded">
                            <p>{item}</p>
                        </div>
                        <div>
                            <button onClick={this.onLikeClicked.bind(this, idx)} className={`btn ${this.props.likes[idx]?"btn-primary":"btn-light"} m-3 p-2`}>Like</button>
                            <button onClick={this.onCommentClicked.bind(this)} className="btn m-3 p-2">Comment</button>
                        </div>
                        <div>
                            {this.state.comment
                            ?
                            <Comments />
                            :
                            <></>
                            }
                        </div>
                        
                        </li>
                        )
                    })
                }
      </ul>
      </div>

        )
    }
}
export default PostsList;
import React from "react";

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comment:"",
            commentsList:[{text:"", date:""}]
        }
    }

    onCommentChanged(e){
        this.setState({comment:e.target.value})
    }

    async onCommentAdded(e){
        e.preventDefault();
        if(this.state.comment !== ""){
        let _commentsList = JSON.parse(JSON.stringify(this.state.commentsList));

        _commentsList.push({text:this.state.comment, date:new Date().toLocaleTimeString()});
        
        await this.setState({comment:"" ,commentsList:_commentsList})
        }
    }

    render(){
        return(
            <div>
                <form >
                    <div>
                        <input type="text" onChange={this.onCommentChanged.bind(this)} className={"me-4"} placeholder="add Comment" />
                        <input type="submit" onClick={this.onCommentAdded.bind(this)} className={"btn btn-success"} value={"add"}></input>
                    </div>
                </form>
                <div>
                    <ul>
                    
                    {
                    
                    this.state.commentsList.map((item, idx)=>{
                        return(
                            <div key={idx}>
                            
                            <li > 
                                
                                    <p>{item.text}</p>
                                    <h6>{item.date}</h6>
                                
                                
                            </li>

                        </div>)
                        }
                    )
               }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Comments;
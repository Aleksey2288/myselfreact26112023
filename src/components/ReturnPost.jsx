import React from "react";
import classes from '../styles/App.module.css'

const ReturnPost = (props) => {   
    return(
        <div className={classes.Borderdescr}>
            <div>
                <div>
                     <h3>{props.number}. {props.post.title}</h3>
                </div>
            <h1>{props.post.body}</h1>
            </div>
            <div>
            <button onClick={(e)=>props.remove(props.post)}>Удалить пост</button>
            </div>
            
        </div>
    )
};

export default ReturnPost;
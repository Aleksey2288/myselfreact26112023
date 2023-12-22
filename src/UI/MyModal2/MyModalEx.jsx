import React from "react";
import classes from './MyModal.module.css'


const MyModalEx = ({children, visible, setVisible}) => {

    const roofVisible = [classes.myModal]

    if(visible){
        roofVisible.push(classes.active);
    }

    return(<div className={classes.myModal} onClick={()=>setVisible(false)}>
        <div className={roofVisible} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>)
}

export default MyModalEx;
import React from "react";
function MealTypeCard (props) {
    return(
        <div className='col'>
    <button className='btn btn-large btn-light' onClick={props.handleClick} id={props.id}>{props.text}</button>
        </div>
    )
}

export default MealTypeCard
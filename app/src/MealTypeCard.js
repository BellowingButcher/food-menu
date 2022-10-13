import React from "react";
function MealTypeCard (props) {
    return(<button onClick={props.handleClick} id={props.id}>{props.text}</button>)
}

export default MealTypeCard
import React from "react";
function HomeButton (props) {
    return(<button onClick={props.handleClick} className='btn btn-large btn-info' id='Home'>Home</button>)
}
export default HomeButton
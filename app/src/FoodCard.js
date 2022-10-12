import React from 'react';

function FoodCard (props) {
    return (<div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
            </div>);
}

export default FoodCard
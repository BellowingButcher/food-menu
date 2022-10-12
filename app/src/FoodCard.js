import React from 'react';

function FoodCard(props) {
    return (
        <div>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
        </div>
    );
}

export default FoodCard
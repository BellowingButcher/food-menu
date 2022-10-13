import React from 'react';

function FoodCard(props) {
    
    return (
        
        <div>
            <ul>
                <li>{props.item.title}</li>
                <li>{props.item.description}</li>
                <li>{props.item.price}</li>
            </ul>
        </div>
    );
}

export default FoodCard
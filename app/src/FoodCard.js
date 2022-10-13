import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FoodCard(props) {
    
    return (
        <div className="container">
            <div className='row'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        <p className="card-text">{props.item.description}</p>
                        <p className="card-text">${props.item.price}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FoodCard

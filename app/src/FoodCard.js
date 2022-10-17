import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FoodCard(props) {
    
    return (
            <div className='col-12 col-sm-6 col-md-6 col-xl-4 d-flex align-items-stretch'>
                <div className="card bg-light">
                    <div className="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        <p className="card-text">{props.item.description}</p>
                        <p className="card-text text-danger">${props.item.price}</p>
                    </div>
                </div>
            </div>

    );
}

export default FoodCard

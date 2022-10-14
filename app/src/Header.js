import React from "react";

function Header () {
    // let image = require('https://github.com/BellowingButcher/food-menu/blob/mjw/design/app/src/WhaleBacon.jpeg');
    return(
        <>
            <header className="container-fluid bg-info">
                <div className="row justify-content-evenly">
                    <div className="col flex-box text-start">
                        <h3>Any</h3>
                        <h3>And</h3>
                        <h3>All</h3>
                    </div>
                    <img className='col' src='' alt="image of a piece of bacon shaped like a whale not found" />
                    <div className="col flex-box text-end">
                        <p>Open</p>
                        <p>06:00hrs-11:00hrs</p>
                        <p>13:00hrs-20:00hrs</p>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
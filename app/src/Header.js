import React from "react";
function Header () {
    return(
        <>
            <header className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col flex-box text-start">
                        <h3>Any</h3>
                        <h3>And</h3>
                        <h3>All</h3>
                    </div>
                    <div className="col text-center">ICON</div>
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
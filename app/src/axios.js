import React, { useState } from 'react';
import axios from 'axios';
// import FoodCard from './FoodCard';

function Api () {
    const baseurl = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
    const [data, setData] = useState([]);

    React.useEffect ( () => {
        axios.get(baseurl).then((response) => {
            console.log(response);
            setData(response.data);
        });
    }, []);

    if (data.length === 0) return null;
    // console.log(data[0].title)
    return (
        <div>
            
            {data.map((item) => {
                // console.log(item);
                return (<div>
                    {/* <h1><FoodCard props={item}/></h1> */}
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                        </div>);
            })}
        
        </div>
    );
}
export default Api



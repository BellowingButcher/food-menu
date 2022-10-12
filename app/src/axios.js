import React, { useState } from 'react'
import axios from 'axios'

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
                return (<h1>{item.title}</h1>)
            })}
        {/* {data[0].title} */}
        
        </div>
    );
}
export default Api


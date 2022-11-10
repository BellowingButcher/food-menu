import React, { useState } from 'react';
import axios from 'axios';
import HomePage from './HomePage';
function Api() {
    const baseurl = 'https://8000-bellowingbutc-thebistro-bz6o3yicn90.ws-us75.gitpod.io/';
    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios.get(baseurl).then((response) => {
            console.log(response);
            setData(response.Meals);
        });
    }, []);

    if (data.length === 0) return null;

    return (
        <div id='body' className='container-fluid vh-100 bg-dark'>
            <HomePage data={data} />
        </div>
    )
    
}
export default Api

// data.map((item) => {
//         return (<FoodCard key={item.id} item={item} />)
//     })
        // console.log(item);
        // let props = { item: item, test: "test", potato: "potato" }
        // function FoodCard(props)
// TODO let lunchItems = data.filter((item) => {
    // TODO     return (item.category.title === 'Lunch')
    //TODO }).map((item) => {
        //TODO console.log(item);
        //TODO let props = { item: item, test: "test", potato: "potato" }
        //TODO function FoodCard(props)
//TODO     return (<FoodCard key={item.id} item={item} />)
//TODO })

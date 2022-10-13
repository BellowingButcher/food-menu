import React, { useState } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';

function Api() {
    const baseurl = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios.get(baseurl).then((response) => {
            console.log(response);
            setData(response.data);
        });
    }, []);

    if (data.length === 0) return null;

    return (

        
        <div>
            {
                    data.map((item) => {
                            return (<FoodCard key={item.id} item={item} />)
                        })
                            // console.log(item);
                            // let props = { item: item, test: "test", potato: "potato" }
                            // function FoodCard(props)
                    }
                </div>
    )
                
}
export default Api

// TODO let lunchItems = data.filter((item) => {
// TODO     return (item.category.title === 'Lunch')
//TODO }).map((item) => {
//TODO console.log(item);
//TODO let props = { item: item, test: "test", potato: "potato" }
//TODO function FoodCard(props)
//TODO     return (<FoodCard key={item.id} item={item} />)
//TODO })

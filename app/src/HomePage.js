import React, { useState } from "react";
import MealTypeCard from "./MealTypeCard";
import FoodCard from './FoodCard'
function HomePage (props) {
    const [page, updatePage] = useState('home');
    function handleClick(e) {
        console.log('Clicked', e.target.id)
        updatePage(e.target.id);
        
    }
    console.log(page);
    if(page === 'home') {
    //    { let lunch=document.getElementById('Lunch');
    //     lunch.addEventListener('click', (e) => {handleClick(e.target)});}
        return (
            <div id='home'>
                <MealTypeCard handleClick={handleClick} id='Dinner' text={'Dinner'}/>
                <MealTypeCard handleClick={handleClick} id='Lunch' text={'Lunch'}/>
                <MealTypeCard handleClick={handleClick} id='Breakfast' text={'Breakfast'}/>
                <MealTypeCard handleClick={handleClick} id='Dessert' text={'Desserts'}/>
            </div>
            );
        }
        // }

    // if (page === 'Breakfast') {
        
    //     return(
    //         <div id='BreakfastMenu'>
                
    //             {/* some stuff here*/}
    //         </div>
    //     )
    // }
    if (page === 'Lunch'){

        let lunchInfo = props.data;
        lunchInfo = lunchInfo.filter((item) => (item.category.title) === 'Lunch')

        lunchInfo = lunchInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            
            
            <div id='Lunch'>
                {lunchInfo}
            </div>
        
        )
    }
    // if (page === 'Dinner'){

    //     return(
    //         <div id='Dinner'>
    //             {/* some stuff here */}
    //         </div>
    //     )
    // }

    // if (page == 'Dessert'){

    //     return(
    //         <div id='Dessert'>
    //             {/* some stuff here */}
    //         </div>
    //     )
    // }

    }

export default HomePage
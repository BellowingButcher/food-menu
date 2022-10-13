import React from "react";
import MealTypeCard from "./MealTypeCard";
import FoodCard from './FoodCard'
let page = 'home';
function HomePage (props) {
    if(page == 'home') {

        return (
            <div id='home'>
                <MealTypeCard id='Dinner' text={'Dinner'}/>
                <MealTypeCard id='Lunch' text={'Lunch'}/>
                <MealTypeCard id='Breakfast' text={'Breakfast'}/>
                <MealTypeCard id='Dessert' text={'Desserts'}/>
            </div>
            );
        }

    // if (page == 'Breakfast') {
        
    //     return(
    //         <div id='BreakfastMenu'>
                
    //             {/* some stuff here*/}
    //         </div>
    //     )
    // }
    if (page == 'Lunch'){

        let lunchInfo = props.data;
        lunchInfo = lunchInfo.filter((item) => (item.category.title) === 'Lunch')

        lunchInfo = lunchInfo.map(object => <FoodCard key={object.id} item={object} />);
        console.log(lunchInfo);
        
        return (
            
            
            <div id='Lunch'>
                {lunchInfo}
            </div>
        
        )
    }
    // if (page == 'Dinner'){

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
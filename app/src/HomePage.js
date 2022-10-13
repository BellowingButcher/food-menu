import React from "react";
import MealTypeCard from "./MealTypeCard";
let page = 'home';
function HomePage (props) {
    if(page == 'home') {

        return (
            <div id='typeDiv'>
                <MealTypeCard text={'Dinner'}/>
                <MealTypeCard text={'Lunch'}/>
                <MealTypeCard text={'BreakFast'}/>
                <MealTypeCard text={'Desserts'}/>
            </div>
            );
        }

    if (page == 'Breakfast') {
        
        return(
            <div id='BreakfastMenu'>
                
                {/* some stuff here*/}
            </div>
        )
    }
    if (page == 'Lunch'){

            let lunchItems = data.filter((item) => {item.category.title === 'Lunch'}).map((item) => {{/* use foodcard component here */}}
        return (
            
            
            <div id='Lunch'>
                
            </div>
        
        )
    }
    if (page == 'Dinner'){

        return(
            <div id='Dinner'>
                {/* some stuff here */}
            </div>
        )
    }

    if (page == 'Dessert'){

        return(
            <div id='Dessert'>
                {/* some stuff here */}
            </div>
        )
    }

    }

export default HomePage
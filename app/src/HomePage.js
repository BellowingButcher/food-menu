import React from "react";
import MealTypeCard from "./MealTypeCard";
import FoodCard from './FoodCard'
let page = 'home';
function HomePage (props) {
    // if(page == 'home') {

    //     return (
    //         <div id='typeDiv'>
    //             <MealTypeCard text={'Dinner'}/>
    //             <MealTypeCard text={'Lunch'}/>
    //             <MealTypeCard text={'BreakFast'}/>
    //             <MealTypeCard text={'Desserts'}/>
    //         </div>
    //         );
    //     }

    // if (page == 'Breakfast') {
        
    //     return(
    //         <div id='BreakfastMenu'>
                
    //             {/* some stuff here*/}
    //         </div>
    //     )
    // }
    // if (page == 'Lunch'){

        // let lunchInfo = 

        //     {props.data.filter((item) => {item.category.title === 'Lunch'}).map((item) => {{item.category.title}})},
            
        //     {props.data.filter((item) => {item.category.title === 'Lunch'}).map((item) => {{item.description}})},
            
        //     {props.data.filter((item) => {item.category.title === 'Lunch'}).map((item) => {{item.category.title}})},
        
        return (
            
            
            <div id='Lunch'>
                {/* <FoodCard item={props.data.filter((item) => {item.category.title === 'Lunch'})} /> */}
                <FoodCard key={props.data[0].id} item={props.data[0]} />
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

    // }

export default HomePage
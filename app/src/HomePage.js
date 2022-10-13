import React from "react";
import MealTypeCard from "./MealTypeCard";
function HomePage () {
    return (
        <div>
            <MealTypeCard text={'Dinner'}/>
            <MealTypeCard text={'Lunch'}/>
            <MealTypeCard text={'BreakFast'}/>
            <MealTypeCard text={'Desserts'}/>
        </div>
            )
}
export default HomePage
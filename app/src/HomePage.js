import React, { useState } from "react";
import MealTypeCard from "./MealTypeCard";
import FoodCard from './FoodCard'
import HomeButton from "./HomeButton";
function HomePage (props) {
    const [page, updatePage] = useState('Home');
    function handleClick(e) {
        console.log('Clicked', e.target.id)
        updatePage(e.target.id);
        
    }
    console.log(page);
    if(page === 'Home') {
        return (
            <div id='home'>
                <MealTypeCard handleClick={handleClick} id='Dinner' text={'Dinner'}/>
                <MealTypeCard handleClick={handleClick} id='Lunch' text={'Lunch'}/>
                <MealTypeCard handleClick={handleClick} id='Breakfast' text={'Breakfast'}/>
                <MealTypeCard handleClick={handleClick} id='Dessert' text={'Desserts'}/>
            </div>
            );
        }

    if (page === 'Breakfast') {
        let breakInfo = props.data;
        breakInfo = breakInfo.filter((item) => (item.category.title) === 'Breakfast')

        breakInfo = breakInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            
            
            <div id='Breakfast'>
                <HomeButton handleClick={handleClick} />
                {breakInfo}
            </div>
        
        )

        
    }
    if (page === 'Lunch'){

        let lunchInfo = props.data;
        lunchInfo = lunchInfo.filter((item) => (item.category.title) === 'Lunch')

        lunchInfo = lunchInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            
            
            <div id='Lunch'>
                <HomeButton handleClick={handleClick} />
                {lunchInfo}
            </div>
        
        )
    }
    if (page === 'Dinner'){
        let dinnerInfo = props.data;
        dinnerInfo = dinnerInfo.filter((item) => (item.category.title) === 'Dinner')

        dinnerInfo = dinnerInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            
            
            <div id='Dinner'>
                <HomeButton handleClick={handleClick} />
                {dinnerInfo}
            </div>
        
        )

    }

    if (page == 'Dessert'){

        let dessertInfo = props.data;
        dessertInfo = dessertInfo.filter((item) => (item.category.title) === 'Dessert')

        dessertInfo = dessertInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            
            
            <div id='Dessert'>
                <HomeButton handleClick={handleClick} />
                {dessertInfo}
            </div>
        
        )


    }

    }

export default HomePage
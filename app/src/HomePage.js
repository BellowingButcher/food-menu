import React, { useState } from "react";
import MealTypeCard from "./MealTypeCard";
import FoodCard from './FoodCard'
import HomeButton from "./HomeButton";
import Header from "./Header";
import Footer from "./footer";
function HomePage (props) {
    const [page, updatePage] = useState('Home');
    function handleClick(e) {
        // console.log('Clicked', e.target.id)
        updatePage(e.target.id);
        
    }
    // console.log(page);
    if(page === 'Home') {
        return (
            <>
                <Header />
                <div className="container vh-100">
                    <div id='home' className="row">
                            <MealTypeCard handleClick={handleClick} id='Dinner' text={'Dinner'}/>
                            <MealTypeCard handleClick={handleClick} id='Lunch' text={'Lunch'}/>
                            <MealTypeCard handleClick={handleClick} id='Breakfast' text={'Breakfast'}/>
                            <MealTypeCard handleClick={handleClick} id='Dessert' text={'Desserts'}/>
                    </div>
                </div>
                <Footer />
            </>
            );
        }

    if (page === 'Breakfast') {
        let breakInfo = props.data;
        breakInfo = breakInfo.filter((item) => (item.category.title) === 'Breakfast')

        breakInfo = breakInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            <>
            <Header />
                    <div className="container">
                        <div className='row justify-content-center' id='Breakfast'>
                            <HomeButton handleClick={handleClick} />
                            {breakInfo}
                        </div>
                    </div>
            <Footer />
            </>
        
        )

        
    }
    if (page === 'Lunch'){

        let lunchInfo = props.data;
        lunchInfo = lunchInfo.filter((item) => (item.category.title) === 'Lunch')

        lunchInfo = lunchInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            <>
                <Header />
                    <div className='container'>
                        <div className='row justify-content-center' id='Lunch'>
                            <HomeButton handleClick={handleClick} />
                            {lunchInfo}
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
    if (page === 'Dinner'){
        let dinnerInfo = props.data;
        dinnerInfo = dinnerInfo.filter((item) => (item.category.title) === 'Dinner')

        dinnerInfo = dinnerInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            <>
                <Header />
                    <div>
                        <div className='container'>
                            <div className="row justify-content-center" id='Dinner'>
                                <HomeButton handleClick={handleClick} />
                                {dinnerInfo}
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
        )

    }

    if (page === 'Dessert'){

        let dessertInfo = props.data;
        dessertInfo = dessertInfo.filter((item) => (item.category.title) === 'Dessert')

        dessertInfo = dessertInfo.map(object => <FoodCard key={object.id} item={object} />);
        // console.log(lunchInfo);
        
        return (
            <>
                <Header />
                    <div className="container">
                        <div className="row justify-content-center" id='Dessert'>
                            <HomeButton handleClick={handleClick} />
                            {dessertInfo}
                        </div>
                    </div>
                <Footer />
            </>
        )


    }

    }

export default HomePage
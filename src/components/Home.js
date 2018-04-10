import React from 'react';
import MainComponent from './MainComponent';
import CardRestaurant from './CardRestaurant';
import Data from '../data';

const Home = () => {
    console.log(Data)
    return(
        <div>
            < MainComponent />
            {Data.map(item=> < CardRestaurant name={item.name} address={item.address} img={item.img}/>
)}
                    </div> 
        
            
    
    )
};

export default Home;
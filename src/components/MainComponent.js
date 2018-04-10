import React from 'react';
import img from '../img/banner_home.png';


const MainComponent = () => {
    return(
        <div>
            <h1>Title</h1>
            <p>Subtitle</p>
            <img src={img} alt="dummy-image" />
        </div>
    )
};

export default MainComponent;
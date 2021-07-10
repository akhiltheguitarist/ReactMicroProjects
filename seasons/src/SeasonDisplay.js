import React from 'react'
import './SeasonDisplay.css'



const getSeason = (latitude, month) => {
    if(month > 2 && month <9){
        return latitude > 0? "summer": "winter"
    }
    else{
        return latitude > 0? "winter": "summer"
    }

}

const SeasonConfig = {
    summer: {
        text: 'It is hot',
        className: 'sun'
    },
    winter: {
        text: 'It is cold',
        className: 'snowflake'
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, className } = SeasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${season} massive ${className} icon`}/>
           <h1><div>{text}</div></h1>
            <i className={`icon-right ${season} massive ${className} icon`}/>
        </div>
    );
}

export default SeasonDisplay;
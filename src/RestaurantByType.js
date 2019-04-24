import React from 'react';


function RestaurantByType(props) {

    let type = props.type;

    return (
        <div>
            <h2>{type} restaurants</h2>
            <h3>Click Restaurant to see menu</h3>
            <ul>
                {
                    Object.keys(props.allRestaurants[type]).map((restaurant, i) => {
                        return (
                                <li
                                    onClick = {props.onClick} 
                                    key={i}
                                >
                                {restaurant}
                                </li>
                        )
                    })
                    
                }

            </ul>
        </div>
    )
}







export default RestaurantByType;
import React from 'react';


function Menu(props) {

    console.log(props);

    if (!props.restaurant) {
        return (
            <div></div>
        )
    }
    return (
        <div>

            <h3>{props.restaurant} Menu</h3>
            <ul>
                {
                    props.allRestaurants[props.type][props.restaurant].map((food, i) => <li key={i}>{food}</li>)
                }
            </ul>

        </div>
    )

}




export default Menu;
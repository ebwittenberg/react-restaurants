import React from 'react';


function Type(props) {
    console.log(props);

    return (
        <div>
            <h2>Types of Restaurants</h2>
            <ul>
                {
                    props.types.map((type, i) => <li style={{textAlign: 'left'}} key={i}>{type}</li>)
                }
            </ul>
        </div>

    )

}




export default Type;
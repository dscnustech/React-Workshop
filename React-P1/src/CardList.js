import React from 'react';
import Card from "./Card";

const CardList = (prop) => {
    const cardsArray = prop.weather.map((area, i) => {
        return <Card key={i} id={area.id} name={area.name} value={area.value} />
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;
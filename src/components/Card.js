import React from 'react'



const Card = ({ dog, loading, updateDog }) => {


    return (

        <div className="card" onClick={() => updateDog(dog.breed.id)} >
            <img src={dog.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{dog.breed.name}</h5>
                <p style={{fontSize: "18px",color:"GrayText"}}>{dog.breed.temperament}</p>
            </div>
        </div>

    )
}
export default Card;


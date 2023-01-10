import React, { useState, useEffect } from 'react'; 
import SwapiService from '../../services/swapi-service' 
import './item-details.css'; 
 
 
const ItemDetails = ({itemId}) => { 
 
  const [state, setState] = useState({data: {}}) 
  const {id, name, hair_color, gender, birthYear, eyeColor, mass, skin_color,height,} = state.data ; 
  const itemImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  const swapi = new SwapiService()  
 
    // const updatePerson = () => { 
  //   const id = Math.floor(Math.random() * (25 - 1 + 1) + 1)  
  //   swapi.getPerson(id) 
  //   .then(data => { 
  //     SetState({data: data}) 
  //   }) 
  // } 
  // useEffect(() => { 
  //   setInterval(() => updatePerson(), 5000) 
  // }) 
 
 
 
  useEffect(() => {  
    swapi.getPerson(itemId) 
    .then(data => { 
      setState({data: data}) 
    }) 
  }, [itemId]) 
 
 
 
  return( 
      <div className="person-details card"> 
        <img className="person-image" 
          src={itemImg}/> 
 
        <div className="card-body"> 
          <h4>{name}</h4> 
          <ul className="list-group list-group-flush"> 
            <li className="list-group-item"> 
              <span className="term">Gender</span> 
              <span>{gender}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">Birth Year</span> 
              <span>{birthYear}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">Eye Color</span> 
              <span>{eyeColor}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">hair_color</span> 
              <span>{hair_color}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">mass</span> 
              <span>{mass}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">height</span> 
              <span>{height}</span> 
            </li> 
            <li className="list-group-item"> 
              <span className="term">skin_color</span> 
              <span>{skin_color}</span> 
            </li> 
          </ul> 
        </div> 
      </div> 
  ) 
} 
 
export default ItemDetails;


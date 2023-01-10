import React from 'react';

import Header from '../header';
import PeoplePage from '../pages';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service'


import './app.css';
import { Provider } from '../swapi-context';

const swapi = new SwapiService() 

const App = () => {
  return (
    <div>
      <Provider value={swapi}/>
      <Header />
      <RandomPlanet />
      <PeoplePage/> 
      <Provider/>
      

      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <ItemDetails />
        </div>
      </div> */}
    </div>
  );
};

export default App;
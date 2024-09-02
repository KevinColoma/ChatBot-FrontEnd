import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>DESCUBRE ESPE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='ESPE-Matriz-Sangolqui.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='ESPE'
              path='/Nosotros'
            />
            <CardItem
              src='IEEE.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Clubes'
              path='/Club'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

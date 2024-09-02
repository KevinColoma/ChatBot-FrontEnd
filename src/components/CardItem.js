import React from 'react';
import { Link } from 'react-router-dom';
import img9 from '../assets/images/ESPE-Matriz-Sangolqui.png';
import img2 from '../assets/images/IEEE.jpg';

function CardItem(props) {
  // Selecciona la imagen basada en la prop src
  const getImage = (src) => {
    switch(src) {
      case 'ESPE-Matriz-Sangolqui.png':
        return img9;
      case 'IEEE.jpg':
        return img2;
      default:
        // Puedes devolver una imagen por defecto o null si prefieres
        return null; // Imagen por defecto
    }
  };

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt={props.text} // Cambiado aquí
            src={getImage(props.src)}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;

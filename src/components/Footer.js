import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>Inicio</Link>
            <Link to='/Nosotros'>Sobre Nosotros</Link>
            <Link to='/Clubes'>Clubes</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Grupo2 © 2024</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/ESPE.U?mibextid=ZbWKwL'
              target='_blank'
              aria-label='Facebook'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/espe.u?igsh=Mmtncnc5eTkzaTJy'
              target='_blank'
              aria-label='Instagram'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/@universidaddelasfuerzasarm4608'
              target='_blank'
              aria-label='YouTube'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

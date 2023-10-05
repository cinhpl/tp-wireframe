import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image1.png';
import '../App.css';

export default function Header() {
  return (
    <header>
        <div className='nav_links'>
            <Link to='#'>Acheter des livres</Link>
            <Link to='#'>Consulter les livres</Link>
        </div>
        <div className='nav_home'>
            <div className='nav_content'>
                <h3 className='nav_title'>Acheter des livres, c'est facile</h3>
                <p className='text'>Lorem ipsum dolor sit amet consectetur. Laoreet nunc auctor metus et eu dui mattis. Donec nunc tortor convallis massa cras ac. Amet vulputate faucibus amet nibh nunc non. Est felis aenean risus purus.</p>
                <Link to='#books' className='btn btn-light'>Voir nos livres</Link>
            </div>
            <img src={image} alt="img" />
        </div>
    </header>
  )
}

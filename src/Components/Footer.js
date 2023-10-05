import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='nav'>
                <h6>Navigation</h6>
                <Link to='#'>News</Link>
                <Link to='#'>Acheter des livres</Link>
                <Link to='#'>Consulter des livres</Link>
                <Link to='#'>Best Sellers</Link>
            </div>
            <div className='nav'>
                <h6>Aide</h6>
                <Link to='#'>Prix</Link>
                <Link to='#'>Comparer</Link>
                <Link to='#'>Catalogue</Link>
                <Link to='#'>Sav</Link>
            </div>
            <div className='nav'>
                <h6>Informations</h6>
                <Link to='#'>Conditions d'utilisation</Link>
                <Link to='#'>Mentions légales</Link>
            </div>
        </div>
    </footer>
  )
}

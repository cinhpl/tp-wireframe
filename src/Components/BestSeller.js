import React from 'react';
import image from '../assets/image 2.png';
import { Badge, Button, Table } from 'react-bootstrap';

export default function BestSeller() {
    const books = [
        {
          id: 1,
          name: 'Les Fleurs du mal',
          date: '21/12/2021',
          availability: 'Disponible',
        },
        {
          id: 2,
          name: 'Voyage au bout de la nuit',
          date: '12/08/2020',
          availability: 'Rupture',
        },
        {
          id: 3,
          name: 'Don Quichotte',
          date: '05/02/2016',
          availability: 'Disponible',
        },
      ];
  return (
    <section id='best_seller'>
        <div className='bestSeller'>
            <img src={image} alt="couv"/>
            <div className='content_bestseller'>
                <h2>Notre best seller</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Laoreet nunc auctor metus et eu dui mattis. Donec nunc tortor convallis massa cras ac. Amet vulputate faucibus amet nibh nunc non. Est felis aenean risus purus.</p>
                <Button variant="light" >Acheter</Button>
            </div>
        </div>
        <div className='top'>
        <h3>Top des ventes</h3>
        <Table responsive="sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col" className='col-date'>Date de sortie</th>
                <th scope="col">Disponibilité</th>
                </tr>
            </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                    <th scope="row">{book.id}</th>
                    <td className='name'>{book.name}</td>
                    <td className='date'>{book.date}</td>
                    <td>
                        {book.availability === 'Disponible' ? (
                        <Badge bg="success" className='custom-button' style={{background: '#28A745'}}>Disponible</Badge>
                        ) : (
                        <Badge bg="danger" className='custom-button' style={{background: '#DC3545'}}>Rupture</Badge>
                        )}
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    </section>
  );
};
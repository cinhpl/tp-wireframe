import React, { useState, useEffect } from 'react';
import datas from '../data';
import { faTriangleExclamation, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookList from './Pagination'; 
import { Badge } from 'react-bootstrap';

export default function Books() {
    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(8);

    const infoBadge = (info) => {
        if (info === 'Best Seller') {
            return <Badge bg='light' className='btn-best' style={{ backgroundColor: '#EBE5FC' }}>Best Seller</Badge>
        } else if (info === 'Rupture de stock') {
            return <Badge bg="danger" className="custom-button">Rupture de stock</Badge>
        }
        return null;
    }

    // Manage pagination
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }

    const updateLimit = () => {
        if (window.innerWidth <= 868) {
            setLimit(3);
        } else {
            setLimit(8);
        }
    }

    useEffect(() => {
        updateLimit();
        window.addEventListener('resize', updateLimit);
        return () => {
            window.removeEventListener('resize', updateLimit);
        };
    }, []);

    useEffect(() => {
        const totalPages = Math.ceil(datas.length / limit);
        setActivePage(totalPages);
    }, [limit]);

    const totalBooksList = window.innerWidth <= 868 ? 12 : datas.length;

    const startIndex = (activePage - 1) * limit;
    const endIndex = startIndex + limit;
    const data = datas.slice(startIndex, endIndex);

    return (
        <section id='books'>
            <div className='nav_books'>
                <h2 className='title'>Consultez les classiques</h2>
                <div className='searchbar'>
                    <div className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon_search' />
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rechercher un livre"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="alert alert-warning" role="alert">
                    <FontAwesomeIcon icon={faTriangleExclamation} className='alert_icons' />
                    <p>Attention les frais de ports ne sont pas inclus</p>
                    <FontAwesomeIcon icon={faXmark} className='alert_icons' />
                </div>
                <div className='row'>
                    {data.map(books =>
                        (
                            <div key={books.id} className='col-sm-3'>
                                <div className='infos'>{infoBadge(books.info)}</div>
                                <img src={books.img} alt="couv" />
                                <div className='content'>
                                    <h6 className='author'>{books.author}</h6>
                                    <h6 className='book_title'>{books.title}</h6>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <BookList
                    totalPages={Math.ceil(totalBooksList / limit)}
                    activePage={activePage}
                    handlePageChange={handlePageChange}
                />
            </div>
        </section>
    )
}

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import './Promocoes.css';
import api from '../../services/apiPassagens.js'


export default function Promocoes() {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips')
            setTrips(response.data)
        }

        loadApi()

    }, [])

    function handleAdd(trip) {
        dispatch({
            type: 'ADD_RESERVE',
            trip
        });
    }
    
    return (
        <div>
            <header className="capap">
                <NavBar />
            </header>
            <div>
                <h1 className="tituloP">Promoções</h1>
                <div className="box">
                    {trips.map(trip => (
                            <li key={trip.id}>
                                <div className="imgpromo">
                                    <img src={trip.image}
                                        alt={trip.title} />
                                </div>
                                <div className="content">
                                    <div className='status'>
                                        <strong className="titulocardp">{trip.title}</strong>
                                        <p className="textopromos">50% de Desconto</p>
                                        <p className="preco">Preço: R${ trip.Preco }</p>
                                        <button className="btnP" onClick={() => { handleAdd(trip) }}>Comprar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Carrinho.css';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { MdDelete } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';

export default function Carrinho() {
    const dispatch = useDispatch();

    const reserves = useSelector(state => state.reserve)

    function handleRemove(id) {
        dispatch({
            type: 'REMOVE_RESERVE',
            id,
        })
    }

    return (
        <div>
            <header className="capac">
                <NavBar />
            
                <div className="textoinicial">
                    <h1 className="tituloC1">Pronto pra aventura, Viajante?</h1>
                    <p className='paragrafoC'>Agora que já escolheu seu destino, faltam só mais alguns detalhes pra você curtir a melhor experiência da sua vida!</p>
                    <FaArrowDown size='50px' color='white' />
                </div>

            </header>

            <section>
                <h1 className="title">Você solicitou {reserves.length} reservas</h1>
                
                {reserves.map(reserve => (
                    <div className="reservas" key={reserve.id}>
                        <img className="imgpassagem" src={reserve.image} alt={reserve.title} />
                        <strong className='tituloC2'>Viagem: {reserve.title}</strong>
                        <span className="quantidade">Quantidade: {reserve.amount}</span>
                        <button className='btnc' type="button" onClick={() => handleRemove(reserve.id)}><MdDelete size={20} color='#000' /></button>
                    </div>
                ))}

                <footer className='botaomae'>
                    <button className='sr' type='button'>Solicitar Reservas</button>
                </footer>
            </section>
            <div>
                <Footer />
            </div>
        </div>

    );
}

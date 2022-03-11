import React from 'react';
import NavBar from '../../Components/NavBar/index'
import './Home.css';
import Footer from '../../Components/Footer/index.js';
import { MdMap } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div className="capa">
                <NavBar />
                <div className="container">
                    <h3 className="saudações">Bem-Vindo, Viajante!</h3>
                    <div className="venhavivermae">
                        <h2 className="venhaviver">Venha desbravar o mundo ao seu redor e viver as maiores aventuras da sua vida!</h2>
                    </div>
                    <div className="btnmae">
                        <Link className="btn" to="/cadastro">Cadastre-se</Link>
                    </div>
                </div>
            </div>
            <h1 className="titulo-1">Nossos Serviços</h1>
            <div className="icon">
                <div className="icons">
                    <div className="um-icon">
                        <MdMap size="70px" color="#36a9e1" />
                    </div>
                    <h2 className="tituloS">Destinos</h2>
                    <span className="textoS">Escolha qualquer destino baseado nas avaliações de nossos clientes!</span>
                </div>
                <div className="icons">
                    <div className="um-icon">
                        <AiOutlinePercentage size="70px" color="#36a9e1" />
                    </div>
                    <h2 className="tituloS">Promoções</h2>
                    <span className="textoS">Você também pode checar nossos pacotes com preços especiais</span>
                </div>
                <div className="icons">
                    <div className="um-icon">
                        <FaAssistiveListeningSystems size="70px" color="#36a9e1" />
                    </div>
                    <h2 className="tituloS">Assistencia Online</h2>
                    <span className="textoS">Se desejar cancelar ou tiver algum imprevisto basta nos contatar a qualquer hora!</span>
                </div>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
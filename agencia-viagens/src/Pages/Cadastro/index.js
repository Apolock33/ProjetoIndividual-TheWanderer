import React, { useRef } from 'react';
import './Cadastro.css';
import api from '../../services/api'
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';


export default function Cadastro() {

    const nome = useRef();
    const email = useRef();
    const senha = useRef();

    function enviarDados() {
        api.post('/clientes', {
            nome: nome.current.value,
            email: email.current.value,
            senha: senha.current.value
        }).then(() => window.location.reload()).catch((err) => console.log(err))
    }

    return (
        <div>
            <div className='imgcad'>
                <NavBar />
                <div className='Cadastro'>
                    <div className='cadastromae'>
                        <div className='cadastrese'>
                            <h1>Cadastre-se</h1><br/>
                        </div>
                        <form onSubmit={enviarDados}>
                            <div className="camposCad">
                                <label>Nome</label>
                                <input required type='text' className='validacao' ref={nome} /><br />
                            </div>
                            <div className="camposCad">
                                <label>E-mail</label>
                                <input required type='email' className='validacao' ref={email} /><br />
                            </div>
                            <div className="camposCad">
                                <label>Senha</label>
                                <input required type='password' className='validacao' ref={senha} />
                            </div>
                            
                            <div className="botoes">
                                <div className='btnmaeCad'>
                                    <input type="submit" className='btnCad' value='Enviar' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
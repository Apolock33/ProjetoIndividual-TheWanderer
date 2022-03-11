import React from 'react';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import './Destinos.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img1card from '../../assets/cardsimg.jpg';
import img2card from '../../assets/imgcard2.jpg';
import img3card from '../../assets/imgcard3.jpg';



export default function Destinos() {
  return (
    <div>
      <div className='capad'>
        <div>
          <NavBar />
          <h4 className='descubrase'>Descubra-se, Viajante!</h4>
          <h1 className='textocentro'>O seu caminho é só seu. Venha desvenda-lo através dos destinos mais lindos e das aventuras mais épicas e memoráveis!</h1>
        </div>
      </div>

      <div className='fotos'>
        <img src={img1} alt='img1' />
        <img src={img2} alt='img2' />
        <img src={img3} alt='img3' />
        <img src={img5} alt='img4' />
        <img src={img6} alt='img3' />
        <img src={img7} alt='img4' />
      </div>

      <div>
        <h1 className='tituloD'>Destinos</h1>

        <div className='cardmae'>

          <div className='cards'>

            <div className='card'>
              <div className='imgcard'>
                <img src={img1card} alt='img1' />
              </div>
              <div className='cardcontent'>
                <h1 className='titulocard'>Helsinque</h1>
                <p className='textocard'>Helsinque é a capital da Finlândia, um dos cinco Países Nórdicos. Helsinque é o principal porto e centro industrial da Finlândia.</p>
              </div>
            </div>

            <div className='card'>
              <div className='imgcard'>
                <img src={img2card} alt='img1' />
              </div>
              <div className='cardcontent'>
                <h1 className='titulocard'>Islandia</h1>
                <p className='textocard'>A cidade Russa de Oymyakon geralmente figura no topo das listas de lugares mais frios do planeta. Em 1933 registrou -67,8°C. O vilarejo possui apenas 500 habitantes, aproximadamente.</p>
              </div>
            </div>

            <div className='card'>
              <div className='imgcard'>
                <img src={img3card} alt='img1' />
              </div>
              <div className='cardcontent'>
                <h1 className='titulocard'>Ulaanbaatar</h1>
                <p className='textocard'>Com temperaturas negativas de até -40ºC, a capital e maior cidade da Mongólia, possui o título de capital mais fria do mundo. Os invernos são longos e gelados, congelando os rios, lagos e o solo, os quais permanecem assim por vários meses do ano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
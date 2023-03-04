import golden from './assets/golden.png'
import Dog from './Dog'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { Dialog, Rating } from '@mui/material';

const urls = {
  mel: 'https://www.shelterluv.com/sites/default/files/animal_pics/11413/2020/12/20/12/20201220122101.png',
  toby: 'https://www.shelterluv.com/sites/default/files/animal_pics/11413/2022/01/03/10/20220103105130.png',
  bento: 'https://www.shelterluv.com/sites/default/files/animal_pics/11413/2022/02/28/13/20220228130919.png',
  luna: 'https://www.milofoundation.org/wp-content/uploads/2020/06/kb_milo_62-scaled-847x1024.jpg',
  romeu: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit69WONYofef6gwMt5nxnAEcoLtQ1DX5ilkzSwIt1D4cFcdwuEqZGWl0HaO8A8lbXIIxOsrL7FuD_PNmaSX3RzEd7RVoBgrMccJj36tZ1nm4HYP1TgFl4O7VWYTjo3H5NK6n9i6KS-HmewUf6ic3fL96hL25zC3ugmv2LG1dEFskzsImUOPuGWlB0_/w1200-h630-p-k-no-nu/um-cachorro-chamado-caramelo.JPG'
}

const historias = {
  mel: 'Em uma de nossas missões de busca, encontramos uma adorável cadela Golden Retriever que estava perdida em uma floresta. Percebemos que a cadela estava com fome e sede, então oferecemos comida e água para ela. Depois de se alimentar, a cadela se aproximou de nós com confiança, permitindo que colocássemos uma guia nela para levá-la de volta ao abrigo. No abrigo, a cadela recebeu todos os cuidados necessários, incluindo exames veterinários, vacinas e tratamentos contra pulgas e carrapatos. Apesar de não ter nenhuma identificação, ela parecia ser um cachorro muito saudável e bem cuidado antes de se perder.',
  luna: 'A equipe da "Cathioros" estava em uma de suas missões de resgate quando encontrou uma pequena cadela Yorkshire Terrier perdida nas ruas movimentadas da cidade. A cadela parecia assustada e confusa, tentando evitar os carros e as pessoas ao seu redor. Nos aproximamos com cuidado para não assustá-la ainda mais, e percebemos que ela não tinha nenhuma identificação ou microchip. Decidimos que era nossa responsabilidade ajudá-la a encontrar um novo lar amoroso. Levamos a cadela para o abrigo, onde ela recebeu todos os cuidados necessários, incluindo exames veterinários, vacinas e tratamentos contra pulgas e carrapatos. Apesar de sua aparência suja e maltratada, ficamos impressionados com a personalidade corajosa e animada da cadela. Ela se adaptou rapidamente ao abrigo e parecia estar feliz em estar cercada de pessoas que a amavam e cuidavam dela.',
  romeu: 'Em uma tarde de domingo, a equipe da "Cathioros" recebeu uma chamada de emergência sobre um cachorro que estava vagando pelas ruas movimentadas da cidade. Quando chegamos ao local, encontramos um cão viralata caramelo andando sem rumo pela calçada, aparentemente perdido e com fome. Percebendo que o cão precisava de ajuda, nos aproximamos com cautela e oferecemos comida e água. Apesar de inicialmente hesitante, o cão rapidamente se aproximou de nós, mostrando uma personalidade doce e amorosa. Levamos o cão para o abrigo, onde ele recebeu todos os cuidados necessários, incluindo exames veterinários, vacinas e tratamentos contra pulgas e carrapatos. Apesar de sua aparência magra e maltratada, o cão tinha uma personalidade incrível e rapidamente se adaptou ao ambiente do abrigo. Começamos uma campanha de adoção para encontrar um novo lar para o cão viralata caramelo. Recebemos várias solicitações de adoção para ele, mas queríamos ter certeza de que ele seria adotado por alguém que pudesse oferecer a ele a atenção e cuidado que ele merecia.',
  bento: 'Um dia, a equipe da ONG "Cathioros" recebeu uma chamada de emergência sobre um cão Pastor Alemão que havia sido encontrado abandonado na rua. Quando chegamos ao local, encontramos um cão assustado e magro, vagando pela rua sem rumo. Percebendo que o cão precisava de ajuda imediatamente, nos aproximamos com cautela e oferecemos comida e água. O cão estava claramente em estado de choque, mas ainda assim parecia amigável e afetuoso. Levamos o cão para o abrigo, onde ele recebeu todos os cuidados necessários, incluindo exames veterinários, vacinas e tratamentos contra pulgas e carrapatos. Apesar de sua aparência abatida, o cão tinha uma personalidade incrível e um desejo inabalável de encontrar um novo lar.',
  toby: 'Um dia, enquanto a equipe da "Cathioros" estava fazendo uma campanha de conscientização sobre a adoção de cães, eles encontraram um cachorro abandonado em um beco sem saída. O cachorro estava com medo e parecia estar sozinho há um tempo. A equipe se aproximou do cachorro e o acalmou com carinho. O cachorro era jovem, com pelos curtos e macios, e uma mistura de várias raças. Ele tinha uma energia contagiante e parecia feliz por ter sido encontrado. A equipe de resgate da ONG levou o cachorro para o abrigo, onde ele recebeu cuidados e amor enquanto aguardava uma nova casa. Eles deram a ele o nome de Toby, porque parecia ser um nome divertido e alegre, assim como ele. Toby se tornou um favorito do abrigo, com sua personalidade doce e sua disposição brincalhona. A equipe de resgate fez várias campanhas de adoção para ele, mas infelizmente ninguém parecia estar interessado em adotar um cachorro sem raça definida.'
}

function App() {

  const [isFoot, setFoot] = useState(window.innerWidth < 1100);
  const [isNav, setNav] = useState(window.innerWidth < 560);
  const [isBreak, setBreak] = useState(window.innerWidth < 836);
  const [isHamburguer, setHamburguer] = useState(false);
  const [dialog, setDialog] = useState(false);

  const [dog, setDog] = useState([null, null, null]);

  useEffect(() => {
    Aos.init()
  },[])

  useEffect(() => {
    if (!isNav) {
      
    } else {
      setNav(!isNav)
      setNav(() => {
        setNav(true)
      }, 10);
    }
  },[isNav])

  useEffect(() => {
    function handleResize() {
      setFoot(window.innerWidth < 1100);
      setNav(window.innerWidth < 560);
      setBreak(window.innerWidth < 836);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <>
      
      <header className="bg-white fixed shadow-xl h-24 -translate-y-5 w-screen flex items-center p-8 pt-12 z-30">
          
          <i className="fa-solid fa-paw text-yellow-600 text-4xl mr-3 -rotate-12"></i>
        <p className='text-black text-3xl font-bold cursor-default'>Cathioros!</p>
        { !isNav ?
          <nav className='flex flex-row ml-auto mt-2 z-10'>
          
            <a onClick={() => window.scrollTo(0, 0)} className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Home</a>
            <a href='#adotar' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Adotar</a>
            <a href='#sobre' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Sobre</a>
            
          
          </nav>
          :
          <div className='ml-auto'>
            <button onClick={() => setHamburguer(!isHamburguer)}><i className="fa-solid fa-bars text-black text-4xl mt-1 cursor-pointer"></i></button>
          </div>
        }
        {
          (isHamburguer && isNav) && 
          <div id='mobile' className='h-12 w-full fixed top-24 right-0 bg-white shadow-xl'>
            <nav className='translate-x-2 flex flex-row h-full items-center justify-center'>
                <a onClick={() => window.scrollTo(0, 0)} className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Home</a>
                <a href='#adotar' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Adotar</a>
                <a href='#sobre' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Sobre</a>
                          
            </nav>
          </div>
        }

      </header>

      <div className='h-24'></div>
          
      <main style={{minHeight: '550px'}} id='home' className={`flex ${!isBreak ? 'flex-row' : 'flex-col'} justify-center items-center z-20 pl-5 pr-5`}>
          
            <div className="flex flex-col items-center">
          <h1 className={`text-yellow-600 font-serif ${isBreak ? 'text-4xl' : 'text-3xl'} cursor-default `}>Cathioro que late</h1>
          <h1 className={` text-yellow-800 font-bold ${isBreak ? 'text-5xl' : 'text-6xl'} cursor-default`}>tem fome!</h1>
              <h1 className={`text-black font-black ${isBreak ? 'text-7xl' : 'text-8xl'} cursor default`}>Au Au!</h1>
              <motion.a href="#adotar" whileTap={{scale: 0.9}} whileHover={{ scale: 1.05 }} className={`bg-yellow-800 cursor-pointer p-3 will-change-transform pl-6 pr-6 transition-all font-black text-white ${!isBreak ? 'mt-28' : 'mt-5'} mb-4 rounded-xl flex justify-center items-center text-2xl`}><i className="fa-solid fa-bone mr-3
              "></i>Adote!</motion.a>
            </div>

            <img className='ml-5 bg-cover object-cover' src={golden}></img>          
  
      </main>
      

      <section style={{minHeight: '700px'}} id='adotar' className="bg-yellow-700 flex flex-col relative">
        
          <div className="custom-shape-divider-top-1677719465 -translate-y-1 z-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
          
        <div data-aos="fade-up" data-aos-duration="800" className='pt-16 flex flex-col gap-20 flex-wrap items-center'>
          
            <div className='flex flex-row flex-wrap justify-center gap-10 mb-12'>
            <Dog onClick={() => { setDialog(true); setDog(['Mel',urls.mel, historias.mel]) }} name={'Mel'} src={urls.mel}></Dog>
            <Dog onClick={() => { setDialog(true); setDog(['Toby', urls.toby, historias.toby]) }} name={'Toby'} src={urls.toby}></Dog>
            <Dog onClick={() => { setDialog(true); setDog(['Bento', urls.bento, historias.bento]) }} name={'Bento'} src={urls.bento}></Dog>
            <Dog onClick={() => { setDialog(true); setDog(['Luna', urls.luna, historias.luna]) }} name={'Luna'} src={urls.luna}></Dog>
            <Dog onClick={() => { setDialog(true); setDog(['Romeu', urls.romeu, historias.romeu]) }} name={'Romeu	'} src={urls.romeu}></Dog>
            </div>
            
          </div>

      </section>

      <section style={{minHeight: '700px'}} id='sobre' className="bg-white rounded-3xl flex flex-col">
        
          <div className="custom-shape-divider-top-1677720024 -translate-y-1">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
          
        <div data-aos="fade-up" className='flex flex-col w-full items-center'>
          
          <span className='w-3/4 mt-20'>
            <h1 className='text-6xl font-bold'>Quem Somos?</h1>
            
            <p className='mt-5 text-2xl text-justify'>
              Nós somos uma organização sem fins lucrativos que tem como missão resgatar, cuidar e expor para adoção cachorros em situação de risco. Acreditamos que todo cachorro merece uma vida feliz e saudável, e trabalhamos duro para garantir que isso aconteça.
              Com a ajuda de voluntários dedicados e veterinários especializados, nossa ONG proporciona cuidados médicos, abrigo e amor para cada cachorro resgatado. E quando estão prontos, os cachorros são apresentados para adoção em eventos semanais em nossa comunidade.
            </p>
    
            <footer className='mb-10 mt-8 w-full h-14 rounded-full bg-yellow-800 flex flex-row text-white p-4 text-2xl items-center justify-between'>
              { !isFoot &&
                <div className='flex flex-row '>
                  <p className='font-bold'>Stack</p>
                  <i style={{ marginTop: 6 }} className="fa-solid fa-arrow-right-from-bracket ml-2 mr-2"></i>
                  <p className='font-bold'>React, MaterialUI, Tailwind, JavaScript, Vite</p>
                </div>
              }
              <div className={`flex flex-row ${isFoot ? 'w-full justify-center gap-14':'gap-5'}`}>
                <a target={'_blank'} href="https://www.linkedin.com/in/thiago-dorville/" className='cursor-pointer text-white'>
                  <i className="fa-brands fa-linkedin text-4xl"></i>
                </a>
                <a target={'_blank'} href="https://github.com/DorvilleThiago" className='cursor-pointer text-white'>
                  <i className="fa-brands fa-github text-4xl"></i>
                </a>
                <a target={'_blank'} href="https://www.thiago-dorville.tech" className='cursor-pointer text-white'>
                  <i className="fa-solid fa-earth-asia text-4xl"></i>
                </a>
              </div>
            </footer>

            <Dialog
              open={dialog}
              onClose={() => setDialog(false)}>
              <div className='flex flex-col items-center p-8'>
                  <div>
                    <img src={dog[1]} className='h-80 w-72 rounded-2xl mb-2 object-cover '></img>
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                <h1 className=' mb-5 font-bold text-3xl'>{dog[0]}</h1>
                <p className='text-justify'>{dog[2]}</p>
                <motion.button onClick={() => alert('ERRO... Você não pode adotar um cachorro fictício de uma página fictícia, mas a intenção é o que vale!')} whileTap={{scale: 0.8}} className={`bg-yellow-800 mt-5 w-2/4 cursor-pointer p-3 will-change-transform pl-6 pr-6 transition-all font-black text-white rounded-xl flex justify-center items-center text-2xl`}>Adotar</motion.button>
              </div>
            </Dialog>

          </span>

        </div>

      </section>

      </>

  )
}


export default App
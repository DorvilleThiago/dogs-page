import dog from './assets/golden.png'
import Dog from './Dog'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  const [isFoot, setFoot] = useState(window.innerWidth < 1100);
  const [isDog, setDog] = useState(window.innerWidth < 1100);
  const [isText, setText] = useState(window.innerWidth < 456);
  const [isButton, setButton] = useState(window.innerWidth < 367);
  const [isNav, setNav] = useState(window.innerWidth < 560);

    useEffect(() => {
      Aos.init()
      console.log('a')
    },[])


  useEffect(() => {
    function handleResize() {
      setFoot(window.innerWidth < 1100);
      setDog(window.innerWidth < 1122);
      setText(window.innerWidth < 456)
      setButton(window.innerWidth < 367);
      setNav(window.innerWidth < 560)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <>
      <header className="bg-white fixed shadow-xl h-24 -translate-y-5 w-screen flex items-center p-8 pt-12 z-10">
          
          <i className="fa-solid fa-paw text-yellow-600 text-4xl mr-3 -rotate-12"></i>
        <p className='text-black text-3xl font-bold cursor-default'>Cathioros!</p>
        { !isNav ?
          <div className='flex flex-row ml-auto mt-2'>
          
            <a onClick={() => window.scrollTo(0, 0)} className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Home</a>
            <a href='#sobre' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Sobre</a>
            <a href='#contato' className='text-black text-xl font-bold mr-5 hover:text-yellow-600 transition-all cursor-pointer'>Contato</a>
          
          </div>
          :
          <div className='ml-auto'>
            <button><i class="fa-solid fa-bars text-black text-4xl mt-1"></i></button>
          </div>
        }

        </header>
          
      <section style={{ minHeight: '700px', height: '85vh' }} id='home' className={`flex flex-row ${ !isText ? 'pl-7 pr-5' : ''} relative top-8  justify-center items-center pt-10`}>
          
            <div style={!isText ? {width: '400px', height: '160px'} : {width: '90%', height: '10px', display: 'flex', flexDirection: 'column'}} className="-translate-y-52">
              <h2 className={`font-bold text-yellow-700 ${!isText ? 'text-7xl' : 'text-5xl'} cursor-default`}>Cathiorro que late, tem fome</h2>
              <h1 className={`font-bold ${!isText ? 'text-9xl' : 'text-7xl'} cursor-default`}>Au au!</h1>
              <a href='#adotar' className={`bg-yellow-700 p-5 ${!isText ? 'text-2xl' : 'flex justify-center text-xl' } rounded-xl text-white font-bold relative top-40 hover:top-150px transition-all cursor-pointer`}><i className="fa-solid fa-dog"></i> Adote um doguinho</a>
            </div>{ !isDog &&
            <div>
              <img src={dog} style={{ width: '680px' }} className="overflow-hidden"></img>
            </div>}
          
        </section>
      

        <section style={{minHeight: '700px'}} id='adotar' className="bg-yellow-700 flex flex-col relative">
        
          <div className="custom-shape-divider-top-1677719465 translate-y-">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
          
        <div data-aos="fade-up" data-aos-duration="800" className='pt-16 flex flex-col gap-20 flex-wrap items-center'>
          
            <div className='flex flex-row flex-wrap justify-center gap-10 mb-12'>
            <Dog name={'Mel'} src="https://www.shelterluv.com/sites/default/files/animal_pics/11413/2020/12/20/12/20201220122101.png"></Dog>
            <Dog name={'Toby'} src="https://www.shelterluv.com/sites/default/files/animal_pics/11413/2022/01/03/10/20220103105130.png"></Dog>
            <Dog name={'Bento'} src="https://www.shelterluv.com/sites/default/files/animal_pics/11413/2022/02/28/13/20220228130919.png"></Dog>
            <Dog name={'Luna'} src="https://www.milofoundation.org/wp-content/uploads/2020/06/kb_milo_62-scaled-847x1024.jpg"></Dog>
            <Dog name={'Romeu	'} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit69WONYofef6gwMt5nxnAEcoLtQ1DX5ilkzSwIt1D4cFcdwuEqZGWl0HaO8A8lbXIIxOsrL7FuD_PNmaSX3RzEd7RVoBgrMccJj36tZ1nm4HYP1TgFl4O7VWYTjo3H5NK6n9i6KS-HmewUf6ic3fL96hL25zC3ugmv2LG1dEFskzsImUOPuGWlB0_/w1200-h630-p-k-no-nu/um-cachorro-chamado-caramelo.JPG"></Dog>
            </div>
            
          </div>

        </section>

        <section style={{minHeight: '700px'}} id='sobre' className="bg-white rounded-3xl flex flex-col">
        
          <div className="custom-shape-divider-top-1677720024">
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

          </span>

        </div>

        </section>

      </>

  )
}

export default App

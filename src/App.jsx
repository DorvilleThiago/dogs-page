import dog from './assets/golden-cut.png'
import Dog from './Dog'

function App() {

  return (
      <>
      <div className="bg-white h-screen flex flex-col items-center">
        
        <div className="bg-white fixed shadow-xl h-24 rounded-3xl -translate-y-5 w-screen flex items-center p-8 pt-12 z-10">
          
          <p className='text-red-700 text-xl font-bold'>Cathioros!</p>
          <div className='flex flex-row ml-auto'>
            <a onClick={() => window.scrollTo(0,0)} className='text-black text-xl font-bold mr-4 hover:text-red-700 transition-all cursor-pointer'>Home</a>
            <a href='#sobre' className='text-black text-xl font-bold mr-4 hover:text-red-700 transition-all cursor-pointer'>Sobre</a> 
            <a href='#contato' className='text-black text-xl font-bold mr-4 hover:text-red-700 transition-all cursor-pointer'>Contato</a>
          </div>

        </div>
          
        <div id='home' className="flex flex-row pl-5 pr-5 relative top-1/4">
            <div style={{width: '350px'}}>
              <h2 className="font-bold text-2xl text-red-700">Cathiorro que late, tem fome...</h2>
              <h1 className="font-bold text-6xl ">Me adota!</h1>
              <a href='#adotar'className="bg-red-700 p-2 rounded-xl text-white font-bold relative top-5 transition-all cursor-pointer">Adote um doguinho</a>
            </div>
            <div>
              <img src={dog} style={{ width: '700px' }} className="overflow-hidden"></img>
            </div>
          </div>

      </div>
      
      <div id='sobre' className="bg-red-700 rounded-3xl  h-screen flex flex-col">
        <h1 className='text-white font-bold mt-32 text-6xl ml-10'>Quem somos?</h1>
        <p>...</p>
      </div>

      <div id='adotar' className="bg-white rounded-3xl  h-screen flex flex-col">
        <h1 className='text-black font-bold mt-32 text-6xl ml-10'>Bora adotar um au au?</h1>
      </div>

      <div id='contato' className="bg-red-700 h-96 flex flex-col">
        <h1 className='text-white font-bold mt-16 text-6xl ml-10'>Fale conosco</h1>
      </div>

      </>

  )
}

export default App

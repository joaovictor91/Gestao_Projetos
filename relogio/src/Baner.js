import Typewriter from 'typewriter-effect'

function Baner(){
  
    return (
        
        <div className='Baner'>
          <h1>
          <Typewriter
            onInit={(typewriter) =>{
                    typewriter.typeString('Venha para FATEC')
                    
                    .deleteAll()
                    .start();
            }}
          />
          </h1>
        
        </div>
            
        
    );
    
}


export default Baner;
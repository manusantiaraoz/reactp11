import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";

import { useEffect,useState } from 'react';
import Noticias from './components/Noticias';

function App() {
  const [noticias,setNoticias]= useState({})
  //componente condicional
const [mostrarSpinner, SetMostrarSpinner]= useState(true)

useEffect(()=>{
consultarAPI();
},[])
//usar si o si los corchetitos, porque sino se hara un bucle infinito 

const consultarAPI = async()=>{
  //poner en true el spinner
  SetMostrarSpinner(true)
  try{
     //peticiones get con react
    const repuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_381258db9a257415299b43385bc7dd4011f98&language=es");
    const datos = await repuesta.json();
    setNoticias(datos.results);
    SetMostrarSpinner(false);
  }catch(err){
    console.log(err);
    //agregar un mensaje como usuario final
  }
}

const mostrarComponente = mostrarSpinner ? ( <div> <span className="loader"></span> </div>):(<Noticias noticias = {noticias}/>)

  return (
    <>
  <Container className="text-center my-5">
        <h1 className='display-2'>top noticias</h1>
       {mostrarComponente}
       
        
      </Container>
    </>
  )
}

export default App

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Form  } from "react-bootstrap";
import { useEffect, useState } from "react";
import Noticias from "./components/Noticias";

function App() {
  const [noticias, setNoticias] = useState({});
  const [categoria, setCategoria] = useState("world");
  //componente condicional
  const [mostrarSpinner, SetMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, [categoria]);
  //usar si o si los corchetitos, porque sino se hara un bucle infinito

  const consultarAPI = async () => {
    //poner en true el spinner
    SetMostrarSpinner(true);
    try {
      //peticiones get con react
      const repuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_381258db9a257415299b43385bc7dd4011f98&language=es,&category=${categoria}`
      );
      const datos = await repuesta.json();
      setNoticias(datos.results);
      SetMostrarSpinner(false);
    } catch (err) {
      console.log(err);
      //agregar un mensaje como usuario final
    }
  };
  const filtrarCat = (lista) => {
    // lista.filter(cate=>cate.category == )
  };

  const mostrarComponente = mostrarSpinner ? (
    <div>
      {" "}
      <span className="loader"></span>{" "}
    </div>
  ) : (
    <Noticias noticias={noticias} />
  );

  return (
    <>
      <Container className="text-center my-5">
        <h1 className="display-2">top noticias</h1>
        
        <Form.Select className="my-3" aria-label="Default"  onChange={e=> setCategoria(e.target.value)} >

          <option>selecciona por categoria:</option>
          <option value="world">mundial</option>
          <option value="business">negocios</option>
          <option value="crime">crimenes</option>
          <option value="domestic">hogar</option>
          <option value="education">educacion</option>
          <option value="entertainment">entretenimiento</option>
          <option value="environment">medio ambiente</option>
          <option value="food">comida</option>
          <option value="health">salud</option>
          <option value="lifestyle">Estilo de vida</option>
          <option value="other">otros</option>
          <option value="politics">politica</option>
          <option value="sports">deportes</option>
          <option value="technology">tecnologia</option>
          <option value="top">más relevantes</option>
          <option value="tourism">ciencia</option>
      
          
        </Form.Select>
        {mostrarComponente}
      </Container>
    </>
  );
}

export default App;

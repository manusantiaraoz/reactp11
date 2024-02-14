import { Card } from "react-bootstrap";

const Noticia = ({
  image_url, link, title, descripcion}) => {
  return (
    
      <Card className="w-50 my-3">
      <img className="card-img-top  " src={image_url} alt={title} />
        <Card.Body>
          <div>
            <blockquote className="blockquote">
              <h2><a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark" href={link}>{title}</a></h2>
            </blockquote>
          </div>
          <cite>{descripcion}</cite>
        </Card.Body>
      </Card>
  
  );
};

export default Noticia;

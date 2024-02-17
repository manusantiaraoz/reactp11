import { Card } from "react-bootstrap";

const Noticia = ({ image_url, link, title, diario }) => {
  return (
    <>
      {/* <Card className="w-50 my-3 d-flex">
      <img className="card-img-top  " src={image_url} alt={title} />
        <Card.Body>
          <div>
            <blockquote className="">
              <h2><a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark" href={link}>{title}</a></h2>
            </blockquote>
          </div>
          <cite>{descripcion}</cite>
        </Card.Body>
      </Card> */}
      <Card className="d-flex flex-lg-row my-2 bg-light border border-primary-subtle">
        <img className=" imgcard " src={image_url} alt={title} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <h5>
            <a
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-primary"
              href={link}
            >
              {title}
            </a>
          </h5>
          <cite>emitido por: {diario}</cite>
        </Card.Body>
      </Card>
    </>
  );
};

export default Noticia;

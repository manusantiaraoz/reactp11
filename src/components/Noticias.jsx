import Noticia from "./Noticia";

const Noticias = ({ noticias }) => {
  console.log("noticias------------->" + noticias);
  return (
    <section className="d-flex flex-column justify-content-center align-content-center flex-wrap">
      {noticias.map((noti, i) => (
        <Noticia
          key={i}
          image_url={noti.image_url}
          link={noti.link}
          title={noti.title}
          descripcion={noti.description}
        ></Noticia>
      )) }
    </section>
  );
};

export default Noticias;

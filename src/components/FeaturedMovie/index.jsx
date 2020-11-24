import React from "react";
import "./style.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
  const movieYear = new Date(item.first_air_date).getFullYear();
  const genres = item.genres.map((genre) => genre.name);
  const formattedGenres = genres.join(", ");
  const description =  (text)=>{
    if(text.length > 250 ){
      return `${text.substr(0,250)}...`
    }else{
      return text
    }
  }
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      {/* <div>{item.original_name}</div> */}
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{movieYear}</div>

            {item.number_of_seasons && (
              <div className="featured-seasons">
                {item.number_of_seasons} temporada
                {item.number_of_seasons > 1 && "s"}
              </div>
            )}
          </div>
          <div className="featured-description" title={item.overview}>{description(item.overview)}</div>
          <div className="featured-buttons">
            <a
              href={`/watch/${item.id}`}
              className="featured-button featured-watchbutton"
            >
              ▶ Assistir
            </a>
            <a
              href={`/list/add/${item.id}`}
              className="featured-button featured-addbutton"
            >
              + Minha lista
            </a>
          </div>
          <div className="featured-genres">
            <strong>Gêneros: </strong>
            {formattedGenres}
          </div>
        </div>
      </div>
    </section>
  );
};

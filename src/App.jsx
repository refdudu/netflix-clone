import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import tmdb from "./utils/tmdb_api";
import Loading from "./img/loading.gif";

import "./App.css";
export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      // pegar toda lista
      let list = await tmdb.getHomeList();
      setMovieList(list);
      // pegar filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          💗
        </span>{" "}
        por Renan Fischer <br />
        Direitos de imagem para Netflix <br />
        Dados pegos na API do site themoviedb.org
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img src={Loading} alt="Carregando" />
        </div>
      )}
    </div>
  );
}

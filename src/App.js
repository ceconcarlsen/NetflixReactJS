import React, { useEffect, useState } from "react";
import "./App.css";

//Dados
import Tmdb from "./Tmdb";

//Components
import MovieRow from "./Components/MovieRow";
import FeaturedMovie from "./Components/FeaturedMovie";
import Header from "./Components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    //Quando a aplicação for carregada, executa a função
    const loadAll = async () => {
      //Pegando a lista dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list); //Novo state da minha aplicação

      //Pegando o fimle em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo); //Info enviada ao componente FeaturedMovie
    };

    loadAll();
  }, []);

  useEffect(() => {
    //

    const scrollListener = () => {
      if (window.scrollY > 10) {
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
      {featureData && <FeaturedMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""></img>
        <h3>API  <a href="https://developers.themoviedb.org/3" target="_blank">Themoviedb.org</a></h3>
      </footer>
    </div>
  );
}

export default App;

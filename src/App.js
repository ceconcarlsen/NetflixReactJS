import React, {useEffect, useState} from 'react'
import './App.css'

//Dados
import Tmdb from './Tmdb';

//Components
import MovieRow from './Components/MovieRow/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie/FeaturedMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  
  useEffect(()=>{ //Quando a aplicação for carregada, executa a função
    const loadAll = async () =>{
      //Pegando a lista dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list); //Novo state da minha aplicação

      //Pegando o fimle em destaque
      let originals = list.filter(i=>i.slug === "originals");
      let randomChosen =  Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen); 
    }
    
    loadAll();

  }, []);

  return (
    <div className="page">
      {featureData && 
        <FeaturedMovie item={featureData }/>
      }
       <section className="lists">
        {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
       </section> 
    </div>
  );
}

export default App;

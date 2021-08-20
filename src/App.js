import React, {useEffect, useState} from 'react'

//Dados
import Tmdb from './Tmdb';

//Components
import MovieRow from './Components/MovieRow/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);

  
  useEffect(()=>{ //Quando a aplicação for carregada, executa a função
    const loadAll = async () =>{
      //Pegando a lista dos filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list); //Novo state da minha aplicação
    }
    
    loadAll();

  }, []);

  return (
    <div className="page">
       <section className="lists">
        {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
       </section> 
    </div>
  );
}

export default App;

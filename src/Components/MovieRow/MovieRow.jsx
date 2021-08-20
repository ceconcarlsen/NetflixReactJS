import React from 'react'
import './style.css'

function MovieRow({title, items}){ //{title, items} = props desconstruido, evitar usar props.title

    return(
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                 {items.results.length > 0 && items.results.map((item, key)=>( 
                    <img alt="" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                 ))} 
            </div>
        </div>
    );
}

export default MovieRow; 
import React from "react";
import "./style.css";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function MovieRow({ title, items }) {
  //{title, items} = props desconstruido, evitar usar props.title

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left">
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right">
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;

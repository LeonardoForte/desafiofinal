import React ,{ useEffect , useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';

export default () => {

  const [movieList, ] = useState([]);

  useEffect(() => {

    const loadAll = async () => {

      let list = await Tmdb.getHomeFilm();
      console.log(list);

    }
    loadAll()
    
  }, []);

  return (
    <div className="page">
      <section className= "list">
        {movieList.map((item, key) =>(
          <movierow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

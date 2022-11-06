import { useState, useEffect } from "react";
import { getData } from "../services/services";
import { v4 as uuidv4 } from "uuid";
import Popup from 'reactjs-popup';
import axios from 'axios';



export const EffectF = () => {
    const [filter, /* setFilter */] = useState('')
    const [listPeliculas, setListPeliculas] = useState([]);
  
9

    useEffect(()=>{
        (async () => {
          const data = await getData(filter)
          setListPeliculas(data)
        })()
      },[filter])
      console.log(listPeliculas);



/*       const tipos = entries.filter(tipo => tipo.programType ==="series"); */
/* const mose = element.listPeliculas.filter(m => m.movie === (movie)); */
return (
  
    <>
         
      {/* <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} /> */}
      
      <ul className="listPeliculas">
        
        {listPeliculas
        .sort((z,a) => a.title > z.title ? 1 : -1)
        .filter((peliculas) => peliculas.programType === 'movie' && peliculas.releaseYear >= 2010 && peliculas.title[10])
        .map((Peliculas) => (
          <li key={uuidv4()} className="list">
            
            
            {/* {listPeliculas.filter((peli) => peli.tipos === tipos).map(peli => {
              return <item peli={programType} key={programType.id}/>
            })} */}
            <h1>{Peliculas.programType}</h1>
            <img src={Peliculas.images["Poster Art"].url} className="PeliImage"/>
            <Popup trigger={<button><h1>{Peliculas.title}</h1></button>}>
            <h1 className="description">{Peliculas.description}</h1>
            </Popup>
          </li>
        )
            
        )}

        
      </ul>
    </>
  );
  
};

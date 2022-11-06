import { useState, useEffect } from "react";
import { getData } from "../services/services";
import { v4 as uuidv4 } from "uuid";
import Popup from 'reactjs-popup';
import axios from 'axios';


export const EffectS = () => {
    const [filter, /* setFilter */] = useState('')
    const [listSeries, setListSeries] = useState([]);



    useEffect(()=>{
        (async () => {
          const data = await getData(filter)
          setListSeries(data)
        })()
      },[filter])
      console.log(listSeries);



/*       const tipos = entries.filter(tipo => tipo.programType ==="series"); */
/* const mose = element.listPeliculas.filter(m => m.movie === (movie)); */
return (
    <>
         
      {/* <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} /> */}
      
      <ul className="listSeries">
        
        {listSeries
        .sort((z,a) => a.title > z.title ? 1 : -1)
        .filter((series) => series.programType === 'series' && series.releaseYear >= 2010 && series.title[12])
        .map((series) => (
          <li key={uuidv4()} className="list">
            
            {/* <h1>{Peliculas.description}</h1> */}
            {/* {listPeliculas.filter((peli) => peli.tipos === tipos).map(peli => {
              return <item peli={programType} key={programType.id}/>
            })} */}
            <h1>{series.programType}</h1>
            <img src={series.images["Poster Art"].url} className="SerieImage" />
            <Popup trigger={<button><h1>{series.title}</h1></button>}>
            <h1 className="description">{series.description}</h1>
            </Popup>
          </li>
        )
            
        )}

        
      </ul>
    </>
  );
  /* const orden = series.sort((a,z) => {
    return a < z; */
};

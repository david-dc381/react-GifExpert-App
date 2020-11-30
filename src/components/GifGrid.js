import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { // pasamos un argumento
  
  // const [images, setImages] = useState([]);

  // con esto le decimos que solamente se ejecute solo getGifs() una sola vez
  // useEffect(() => {
  //   getGifs( category ) // es una promesa
  //     .then( setImages );
  // }, [ category ]); // para que se ejecute una sola vez le pasamos un array o parametros vacios.
                    // Pero en este caso estamos mandando solo que queremos recibir, que son las categorias.

  const { data:images, loading } = useFetchGifs( category );
  // console.log(loading);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> { category } </h3>
      { loading && <p className="animate__animated animate__flash">Cargando...</p> }
      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
      
    </>
  )
}

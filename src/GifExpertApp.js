import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; esta es una manera de hacer nuestra categoria, pero no podemos agregam mas por ser constante

  // creamos un useStage para poder agregar más opciones a nuestro array de categorias
  const [categories, setCategories] = useState(['One Punch']);
  
  // para agregar una categoria
  // const handleAdd = () => {
    // setCategories( ['Naruto', ...categories] ); esta es una manera de agregar categorias al array
    // setCategories( categories => [ ...categories, 'Naruto' ] );
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* añadimos el componente para añadir una categoria */}
      <AddCategory setCategories={ setCategories } />
      <hr />

      {/* botón para agregar más categorias */}
      {/* <button onClick={handleAdd}>Agregar</button> */}

      {/* mostramos la lista de categorias */}
      {/* usamos map para recorrer el array y cada elemento necesita un key
      ya que react lo usa para identificarlo */}
      <ol>
        {
          categories.map( category => (
            /* los id generalmente son de base de datos */
            /* <li key={ category }> {category} </li> */

            <GifGrid
              key={ category } // le pasamos su key con su propio nombre.
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}
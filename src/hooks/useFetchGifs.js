// Los hooks son solamente funciones y son caracterizados por tener 'use' al inicio de sus nombres

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true

  });

  // esto es para que no nos carge toda la petición de nuevo
  useEffect( () => {
    // usamos el helper
    getGifs( category )
      .then( imgs => {
        setTimeout( () => {

          console.log(imgs);

          setState({
            data: imgs,
            loading: false,

          });

        }, 10);
      });
  }, [category]);

  // setTimeout( ()=> {
  //   setState({
  //     data: [1,2,3],
  //     loading: false,
  //   });
  // }, 3000);

  return state; // { data: [], loading: true }

};
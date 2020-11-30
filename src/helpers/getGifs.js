// función que devuelve una Promesa, sino devuelve una promesa que devuelve la collecion de las img

// función para obtener los gifs
export const getGifs = async( category ) => {
  
  // conseguimos la url del una busqueda de la api con gifs
  // encodeURI().- reemplaza los espacios en la url por 20% u otros carácteres
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=9&api_key=zPV8L5HptfEwRQ7n2kNPBkWjvw2NuHMg`;
  // usamos fetch que es como una interfaz que nos ayuda a buscar recursos de internet, en este caso usando la api de los gifs
  const respuesta = await fetch(url);
  // esperamos 'await' a que lo de arriba funcione para dar una respuesta en formato json
  const { data } = await respuesta.json();

  // una vez obtenido los gifs, con un map nos creamos un nuevo arreglo y le pasamos un callback donde le decimos cuales son los únicos párametros queremos obtenes del gif
  const gifs = data.map( img => {
    return {
      id:    img.id,
      title: img.title,
      url:   img.images?.downsized_medium.url // el signo '?' pregunta si encuentra el gif que se require y si es así obtiene su url.
    }
  });

  return gifs;
  
};

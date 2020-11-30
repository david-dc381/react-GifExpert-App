import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => { // usamos un prop

  const [inputValue, setInputValue] = useState('');

  // para cambiar el texto del input
  const handleInputChange = (e) => {
    setInputValue( e.target.value );
  }

  // para enviar el texto ingresado y evitar que la página se recargue a cada rato
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submit hecho')

    if ( inputValue.trim().length > 2 ) {
      setCategories( categories => [ inputValue, ...categories] );
      setInputValue('');
    }
  }

  return (
    // aqui podemos sacar los '<>' '</>', ya que form agrupa los elementos
    <form onSubmit = { handleSubmit }>
      {/* <h1>{inputValue}</h1> */}
      <input
        type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
      />
    </form>
  );

};

// indicamos que el valor de setCategories sea necesario
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

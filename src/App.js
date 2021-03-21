import React, { Fragment, useState, useEffect } from 'react';


// ************************ CUSTOMIZED COMPONENTS *********************************** //

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

// ********************************************************************************* //

function App() {

  // SET UP CATEGORY AND NEWS
  const [ categoria, guardarCategoria ] = useState('');

  const [ noticias, guardarNoticias ] = useState( [ ] );

  useEffect( () => {

    const consultarAPI = async () => {

      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=106d6f544dd7446c96524e6640403666`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    }

    consultarAPI();

  }, [categoria] )

  return (
    <Fragment>

      <Header titulo="Buscador de Noticias"/>

      <div className="container white" >

        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
            noticias={noticias}
          />

      </div>

    </Fragment>
  );
}

export default App;

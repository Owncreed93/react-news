import React from 'react';
import PropTypes from 'prop-types';

// **************************** COMPONENT ******************************* //

import Noticia from './Noticia';

// ********************************************************************** //

const ListadoNoticias = ( { noticias } ) => (
    <div className="row">
        { noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
             />
        )) }
    </div>
      
);
 
ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
export default ListadoNoticias;
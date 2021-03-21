import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {

    // EXTRACT DATA
    const { urlToImage, url, title, description, source  } = noticia;

    const imagen = (urlToImage) ? 
        <div className='card-image' >
            <img src={urlToImage} alt={title} />
            <span className='card-title' > { source.name } </span>
        </div>
    : <div className='card-image' >
        <img src='' alt={title} />
        <span className='card-title' > { source.name } </span>
      </div>;
    // (urlToImage !== undefined || urlToImage !== null) ? imagen =  <img src={urlToImage} alt={title} /> : imagen = <img src='' alt={title} />

    return (

        <div className='col s12 m6 l4'>

            <div className='card' >

                { imagen }
                

                <div className='card-content'>

                    <h3> { title } </h3>
                    <p> { description } </p>

                </div>

                <div className='card-action' >

                    <a href={ url }
                       target='_blank'
                       rel='noopener noreferrer'
                       className='waves-effect waves-light btn'
                       > 
                       Ver Noticia Completa
                    </a>

                </div>

            </div>
        </div>

    );

}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;